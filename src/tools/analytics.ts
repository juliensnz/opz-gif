const AMPLITUDE_URL = 'https://api.amplitude.com/2/httpapi';

const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

enum UserEvent {
  AppLaunch = 'app_launch_event',
  ErrorOccured = 'error_occured_event',
  StartAdding = 'start_adding_event',
  StartEditing = 'start_editing_event',
  GifSelected = 'gif_selected_event',
  CancelAdd = 'cancel_add_event',
  LoopAdded = 'loop_added_event',
  LoopEdited = 'loop_edited_event',
  LoopRemoved = 'loop_removed_event',
  Download = 'download_event',
  OpenWtf = 'open_wtf_event',
  CloseWtf = 'close_wtf_event',
  OpenLike = 'open_like_event',
  CloseLike = 'close_like_event',
  ConfigurationChange = 'configuration_change_event',
}

// Everytime you relaunch the app, I generate a unique id from nothing to identifiy a session.
const sessionId = Date.now();
let userId: null | string = null;

const getUserId = () => {
  if (null === userId) {
    if (null === localStorage.getItem('user_id')) {
      userId = uuidv4();
      localStorage.setItem('user_id', userId);
    } else {
      userId = localStorage.getItem('user_id');
    }
  }

  return userId;
};

const sendError = (type: string, error: Error) => {
  console.error(type, error);
  sendEvent(UserEvent.ErrorOccured, {type: type, error});
};

const sendEvent = async (type: string, event: any = {}) => {
  if ('development' === process.env.NODE_ENV) {
    console.log(type, event);
    return;
  }

  try {
    await fetch(AMPLITUDE_URL, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: process.env.REACT_APP_ANALYTICS_API_KEY,
        events: [
          {
            user_id: getUserId(),
            session_id: sessionId,
            device_id: getUserId(),
            event_type: type,
            time: Date.now(),
            event_properties: event,
            app_version: process.env.REACT_APP_VERSION,
          },
        ],
      }),
    });
  } catch {}
};

export {sendEvent, sendError, UserEvent};
