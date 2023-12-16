import { Dispatch, ReactNode, createContext, useReducer } from 'react';
import { Action, Screens, screensReducer } from 'src/reducers/app-screens';

const initialState = {
  currentScreen: Screens.CHATS,
  prevScreen: Screens.CHATS,
  changeScreen: () => {},
};

type TransitionContextProps = {
  currentScreen: Screens;
  prevScreen: Screens;
  changeScreen: Dispatch<Action>;
};

export const ScreenContext = createContext<TransitionContextProps>(initialState);

export function AppScreensProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(screensReducer, initialState);
  const value = {
    currentScreen: state.currentScreen,
    prevScreen: state.prevScreen,
    changeScreen: dispatch,
  };

  return <ScreenContext.Provider value={value}>{children}</ScreenContext.Provider>;
}
