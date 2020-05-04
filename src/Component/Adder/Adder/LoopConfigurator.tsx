import React, {useContext, useState, useEffect, useCallback} from 'react';
import styled, {ThemeContext} from 'styled-components';
import {GIF, Sample, Configuration, getGifLength} from '../../../tools/gif';
import {Player} from '../../Player';
import {Back} from '../../Style/Back';
import {Cutter} from './LoopConfigurator/Cutter';
import {SampleModeSelector} from './LoopConfigurator/SampleModeSelector';
import {sendEvent, UserEvent} from '../../../tools/analytics';
import {getImages} from '../../../tools/canvas';
import {Preview} from '../../../model/loop';
import {Bar, Progress} from '../../Loading';

const Container = styled.div<{fullSize: boolean}>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.theme.addModal.windowSize - (props.fullSize ? 0 : props.theme.addModal.spacing)}px;
  height: ${(props) => props.theme.addModal.windowSize}px;
  padding: ${(props) => props.theme.addModal.spacing}px;
  background: rgb(208, 208, 208);
  box-sizing: border-box;
  justify-content: space-between;
  position: relative;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Submit = styled.span`
  background-color: ${(props) => props.theme.color.yellow};
  color: black;
  margin: 20px 0;
  padding: 10px 5px;
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }
`;

const Configurator = styled.div`
  display: flex;
  flex-direction: column;
`;

const MIN_GIF_SIZE = 3;

enum Size {
  Short = 'short',
  Medium = 'medium',
  Long = 'long',
}

const useGeneratePreview = (gif: GIF, configuration: Configuration): Preview => {
  const [preview, setPreview] = useState<Preview>([]);
  useEffect(() => {
    if (gif.length !== 0 && configuration.start !== configuration.end) {
      setPreview(getImages(gif, configuration));
    }
  }, [configuration, gif]);

  return preview;
};

const useConfiguration = (
  gif: GIF,
  initialConfiguration: Configuration | null
): [Configuration, (configuration: Configuration) => void] => {
  const [configuration, setConfiguration] = useState(
    initialConfiguration === null ? {start: 0, end: getGifLength(gif), mode: Sample.Sample} : initialConfiguration
  );

  useEffect(() => {
    if (null !== initialConfiguration) return;
    if (0 === gif.length) return;

    if (MIN_GIF_SIZE >= gif.length) {
      setConfiguration({start: 0, end: getGifLength(gif), mode: Sample.Sample});
    } else if (2000 >= getGifLength(gif)) {
      setConfiguration({start: 0, end: getGifLength(gif), mode: Sample.Sample});
    } else {
      setConfiguration({start: 0, end: 2000, mode: Sample.Trim});
    }
  }, [gif, initialConfiguration]);

  useEffect(() => {
    const isDefaultSample =
      0 === configuration.start && getGifLength(gif) === configuration.end && configuration.mode === Sample.Sample;
    const isDefaultTrim = 0 === configuration.start && 2000 === configuration.end && configuration.mode === Sample.Trim;
    const isEmptyConfiguration =
      0 === configuration.start && 0 === configuration.end && configuration.mode === Sample.Sample;

    if (
      (!isDefaultSample && !isDefaultTrim && !isEmptyConfiguration) ||
      (null !== initialConfiguration && initialConfiguration !== configuration)
    )
      sendEvent(UserEvent.ConfigurationChange, configuration);
  }, [configuration, gif, initialConfiguration]);

  return [configuration, setConfiguration];
};

const useSize = (gif: GIF): Size => {
  const [size, setSize] = useState<Size>(Size.Long);

  useEffect(() => {
    if (0 === gif.length) return;

    if (MIN_GIF_SIZE >= gif.length) {
      setSize(Size.Short);
    } else if (2000 >= getGifLength(gif)) {
      setSize(Size.Medium);
    } else {
      setSize(Size.Long);
    }
  }, [gif]);

  return size;
};

const LoopConfigurator = ({
  initialConfiguration,
  gif,
  isEdit,
  onLoopConfirmation,
}: {
  initialConfiguration: Configuration | null;
  gif: GIF;
  isEdit: boolean;
  onLoopConfirmation: (configuration: Configuration | null, preview: Preview) => void;
}) => {
  const previous = null !== initialConfiguration;
  const theme = useContext(ThemeContext);
  const [configuration, setConfiguration] = useConfiguration(gif, initialConfiguration);
  const preview = useGeneratePreview(gif, configuration);
  const size = useSize(gif);

  const onModeChange = useCallback(
    (newMode: Sample) => {
      const newStartEnd =
        newMode === Sample.Trim
          ? {
              start: newMode === Sample.Trim ? 0 : configuration.start,
              end: newMode === Sample.Trim ? 2000 : configuration.end,
            }
          : {};
      setConfiguration({
        ...configuration,
        mode: newMode,
        ...newStartEnd,
      });
    },
    [configuration, setConfiguration]
  );

  const onCutChange = useCallback(
    (start: number, end: number) => {
      setConfiguration({...configuration, start, end});
    },
    [configuration, setConfiguration]
  );

  return (
    <Container fullSize={isEdit}>
      {0 === preview.length && (
        <LoadingContainer>
          <Bar>
            <Progress />
          </Bar>
        </LoadingContainer>
      )}
      {gif.length !== 0 && configuration.start !== configuration.end && 0 !== preview.length && (
        <>
          <Configurator>
            <Player preview={preview} width={theme.addModal.windowSize - theme.addModal.spacing * (isEdit ? 2 : 3)} />
            {Size.Long === size && <SampleModeSelector mode={configuration.mode} onChange={onModeChange} />}
            {Size.Short !== size && (
              <Cutter
                length={getGifLength(gif)}
                start={configuration.start}
                end={configuration.end}
                mode={configuration.mode}
                gif={gif}
                onChange={onCutChange}
              />
            )}
          </Configurator>
          <Submit
            data-testid="loop_configurator_confirm"
            onClick={() => {
              onLoopConfirmation(configuration, preview);
            }}
          >
            Confirm
          </Submit>
        </>
      )}
      {previous && !isEdit && (
        <Back vertical={true} onClick={() => onLoopConfirmation(null, preview)}>
          Back
        </Back>
      )}
    </Container>
  );
};

export {LoopConfigurator};
