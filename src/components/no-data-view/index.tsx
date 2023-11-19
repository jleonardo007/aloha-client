import { useContext } from 'react';
import { TransitionContext, TransitionsOptions } from 'src/context/app-transition';
import noMessagesIcon from 'src/resources/icons/no-messages.svg';
import noCalls from 'src/resources/icons/no-calls.svg';
import noContactsIcon from 'src/resources/icons/no-contacts.svg';

export default function NoDataView() {
  const { currentTransition } = useContext(TransitionContext);

  if (currentTransition === TransitionsOptions.contacts) {
    return (
      <div className="h-[75vh] bg-slate-100 pt-20">
        <img src={noContactsIcon} className="w-20 h-20 mx-auto mb-4" alt="no contacts" />
        <span className="capitalize text-2xl text-center block">{`you don't have contacts yet`}</span>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-88px)] bg-slate-100 pt-32">
      {currentTransition === TransitionsOptions.chats && (
        <img src={noMessagesIcon} className="w-20 h-20 mx-auto mb-4" alt="no messages" />
      )}
      {currentTransition === TransitionsOptions.calls && (
        <img src={noCalls} className="w-16 h-16 mx-auto mb-4" alt="no calls" />
      )}
      <span className="capitalize text-2xl text-center block">{`don't have ${
        currentTransition === TransitionsOptions.chats ? 'messages' : 'calls'
      } yet`}</span>
    </div>
  );
}
