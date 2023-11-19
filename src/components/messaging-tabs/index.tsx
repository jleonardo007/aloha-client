import { useContext } from 'react';
import { TransitionContext, TransitionsOptions } from 'src/context/app-transition';
import { TITLES_MESSAGING_TABS } from 'src/constants/ui-constants';

export default function MessagingTabs() {
  const { currentTransition, changeTransition } = useContext(TransitionContext);

  return (
    <div className="h-10 flex bg-teal-700 border-b border-b-gray-300">
      <div
        className="w-1/2 grid place-items-center"
        role="presentation"
        onClick={() => changeTransition(TransitionsOptions.chats, currentTransition)}
      >
        <span
          className={`${
            currentTransition === TransitionsOptions.chats ? 'text-slate-100' : 'text-slate-300'
          }`}
        >
          {TITLES_MESSAGING_TABS.chats}
        </span>
        <div
          className={`w-full h-1 place-self-end ${
            currentTransition === TransitionsOptions.chats && 'bg-slate-100'
          }`}
        ></div>
      </div>
      <div
        className="w-1/2 grid place-items-center"
        role="presentation"
        onClick={() => changeTransition(TransitionsOptions.calls, currentTransition)}
      >
        <span
          className={`${
            currentTransition === TransitionsOptions.calls ? 'text-slate-100' : 'text-slate-300'
          }`}
        >
          {TITLES_MESSAGING_TABS.calls}
        </span>
        <div
          className={`w-full h-1 place-self-end ${
            currentTransition === TransitionsOptions.calls && 'bg-slate-100'
          }`}
        ></div>
      </div>
    </div>
  );
}
