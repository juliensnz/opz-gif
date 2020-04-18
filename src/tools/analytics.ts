const AMPLITUDE_URL = 'https://api.amplitude.com/2/httpapi';

const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

enum UserEvent {
  AppLaunch = 'app_launch',
  ErrorOccured = 'error_occured',
  StartAdding = 'start_adding',
  GifSelected = 'gif_selected',
  CancelAdd = 'cancel_add',
  LoopAdded = 'loop_added',
  Download = 'download',
}

// Everytime you relaunch the app, I generate a unique id from nothing to identifiy a session.
const userId = uuidv4();

const sendError = (type: string, error: Error) => {
  sendEvent(UserEvent.ErrorOccured, {type: type, error});
};

const sendEvent = async (type: string, event: any = {}) => {
  try {
    await fetch(AMPLITUDE_URL, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: process.env.AMPLITUDE_API_KEY,
        events: [
          {
            user_id: userId,
            device_id: userId,
            event_type: type,
            time: Date.now(),
            event_properties: event,
            app_version: `${process.env.REACT_APP_VERSION}-${process.env.NODE_ENV}`,
          },
        ],
      }),
    });
  } catch {}
};

export {sendEvent, sendError, UserEvent};
