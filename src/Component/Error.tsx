import React from 'react';
import {sendError} from '../tools/analytics';

class ErrorBoundary extends React.Component<{}, {hasError: boolean; error: null | Error}> {
  constructor(props: {}) {
    super(props);
    this.state = {hasError: false, error: null};
  }

  static getDerivedStateFromError(error: Error) {
    return {hasError: true, error};
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error(error);
    sendError('fatal_error', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <React.Fragment>
          <h1>Something went wrong: {null !== this.state.error ? this.state.error.message : ''}</h1>
          <span
            onClick={() => {
              this.setState({hasError: false, error: null});
            }}
          >
            Click here to dismiss this error
          </span>
        </React.Fragment>
      );
    }

    return this.props.children;
  }
}

export {ErrorBoundary};
