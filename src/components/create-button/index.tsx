import { useContext } from 'react';
import { TransitionContext, TransitionsOptions } from 'src/context/app-transition';
import Button from 'src/components/common/button';
import addMessage from 'src/resources/icons/add-message.svg';
import addCall from 'src/resources/icons/add-call.svg';

export default function AddButton() {
  const { currentTransition, changeTransition } = useContext(TransitionContext);

  return (
    <Button
      type="button"
      label=""
      className="w-16 h-16 grid place-items-center rounded-full bg-teal-700 absolute top-[85%] left-[75%]"
      onClick={() => changeTransition(TransitionsOptions.contacts, currentTransition)}
    >
      {currentTransition === TransitionsOptions.chats && (
        <img src={addMessage} className="w-8 h-8" alt="call icon" />
      )}
      {currentTransition === TransitionsOptions.calls && (
        <img src={addCall} className="w-8 h-8" alt="call icon" />
      )}
    </Button>
  );
}
