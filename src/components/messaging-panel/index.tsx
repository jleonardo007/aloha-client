import { useContext } from 'react';
import { TransitionContext, TransitionsOptions } from 'src/context/app-transition';
import Header from 'src/components/header';
import Messaging from 'src/components/messaging';
import AddButton from 'src/components/create-button';
import ContactsPanel from 'src/components/contacts-panel';

export default function MessagingPanel() {
  const { currentTransition } = useContext(TransitionContext);

  if (currentTransition === TransitionsOptions.contacts) {
    return <ContactsPanel />;
  }

  return (
    <>
      <Header />
      <Messaging />
      <AddButton />
    </>
  );
}
