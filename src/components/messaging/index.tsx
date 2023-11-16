import { useContext } from 'react';
import { TransitionContext, TransitionsOptions } from 'src/context/app-transition';
import MessagingTabs from 'src/components/messaging-tabs';
import CallsList from 'src/components/calls-list';
import MessagesList from 'src/components/messages-list';

export default function Messaging() {
  const { currentTransition } = useContext(TransitionContext);

  return (
    <section className="min-h-[calc(100vh-48px)]">
      <MessagingTabs />
      {currentTransition === TransitionsOptions.chats && <MessagesList />}
      {currentTransition === TransitionsOptions.calls && <CallsList />}
    </section>
  );
}
