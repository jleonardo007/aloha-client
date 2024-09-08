export const enum ScreenActions {
  GO_TO_NEXT_SCREEN = 'GO_TO_NEXT_SCREEN',
  GO_TO_PREV_SCREEN = 'GO_TO_PREV_SCREEN',
}

export const enum Screens {
  CHATS = 'CHATS',
  CALLS = 'CALLS',
  CONTACTS = 'CONTACTS',
}

export type Action = {
  type: ScreenActions;
  payload: {
    currentScreen: Screens;
    prevScreen: Screens;
  };
};

export type ScreenState = {
  currentScreen: Screens;
  prevScreen: Screens;
};

export function screensReducer(state: ScreenState, action: Action): ScreenState {
  const { currentScreen, prevScreen } = action.payload;

  switch (action.type) {
    case ScreenActions.GO_TO_NEXT_SCREEN:
      return {
        currentScreen,
        prevScreen,
      };

    case ScreenActions.GO_TO_PREV_SCREEN:
      return {
        currentScreen,
        prevScreen,
      };

    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
}
