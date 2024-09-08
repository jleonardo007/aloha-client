import { useContext } from 'react';
import { ScreenContext } from 'src/context/app-screens';
import { Screens, ScreenActions } from 'src/reducers/app-screens';
import { Button } from 'src/components/common/button';
import addMessage from 'src/resources/icons/add-message.svg';
import addCall from 'src/resources/icons/add-call.svg';

export function AddButton() {
  const { currentScreen, changeScreen } = useContext(ScreenContext);

  return (
    <Button
      type="button"
      label=""
      className="w-16 h-16 grid place-items-center rounded-full bg-teal-700 absolute top-[85%] left-[75%]"
      onClick={() => {
        changeScreen({
          type: ScreenActions.GO_TO_NEXT_SCREEN,
          payload: {
            currentScreen: Screens.CONTACTS,
            prevScreen: currentScreen,
          },
        });
      }}
    >
      {currentScreen === Screens.CHATS && (
        <img src={addMessage} className="w-8 h-8" alt="call icon" />
      )}
      {currentScreen === Screens.CALLS && <img src={addCall} className="w-8 h-8" alt="call icon" />}
    </Button>
  );
}
