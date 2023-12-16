import { useContext } from 'react';
import { ScreenContext } from 'src/context/app-screens';
import { Screens } from 'src/reducers/app-screens';
import MessagingTabs from 'src/components/messaging-tabs';
import CallsList from 'src/components/calls-list';
import ChatsList from 'src/components/chats-list';

export default function Messaging() {
  const { currentScreen } = useContext(ScreenContext);

  return (
    <section className="min-h-[calc(100vh-48px)]">
      <MessagingTabs />
      {currentScreen === Screens.CHATS && <ChatsList />}
      {currentScreen === Screens.CALLS && <CallsList />}
    </section>
  );
}
