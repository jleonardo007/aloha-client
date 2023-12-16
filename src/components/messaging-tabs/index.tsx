import { useContext } from 'react';
import { ScreenContext } from 'src/context/app-screens';
import { Screens, ScreenActions } from 'src/reducers/app-screens';
import { TITLES_MESSAGING_TABS } from 'src/constants/ui-constants';

export default function MessagingTabs() {
  const { prevScreen, currentScreen, changeScreen } = useContext(ScreenContext);

  return (
    <div className="h-10 flex bg-teal-700 border-b border-b-gray-300">
      <div
        className="w-1/2 grid place-items-center"
        role="presentation"
        onClick={() => {
          changeScreen({
            type: ScreenActions.GO_TO_NEXT_SCREEN,
            payload: {
              currentScreen: Screens.CHATS,
              prevScreen,
            },
          });
        }}
      >
        <span
          className={`${currentScreen === Screens.CHATS ? 'text-slate-100' : 'text-slate-300'}`}
        >
          {TITLES_MESSAGING_TABS.chats}
        </span>
        <div
          className={`w-full h-1 place-self-end ${
            currentScreen === Screens.CHATS && 'bg-slate-100'
          }`}
        ></div>
      </div>
      <div
        className="w-1/2 grid place-items-center"
        role="presentation"
        onClick={() => {
          changeScreen({
            type: ScreenActions.GO_TO_NEXT_SCREEN,
            payload: {
              currentScreen: Screens.CALLS,
              prevScreen,
            },
          });
        }}
      >
        <span
          className={`${currentScreen === Screens.CALLS ? 'text-slate-100' : 'text-slate-300'}`}
        >
          {TITLES_MESSAGING_TABS.calls}
        </span>
        <div
          className={`w-full h-1 place-self-end ${
            currentScreen === Screens.CALLS && 'bg-slate-100'
          }`}
        ></div>
      </div>
    </div>
  );
}
