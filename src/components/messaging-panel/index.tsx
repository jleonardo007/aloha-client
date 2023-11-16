import { useContext } from 'react';
import { TransitionContext, TransitionsOptions } from 'src/context/app-transition';
import Header from 'src/components/header';
import Messaging from 'src/components/messaging';
import AddButton from 'src/components/create-button';

export default function MessagingPanel() {
  const { currentTransition } = useContext(TransitionContext);

  if (currentTransition === TransitionsOptions.contacts) {
    return <h1>Contacts</h1>;
  }

  return (
    <>
      <Header />
      <Messaging />
      <AddButton />
    </>
  );
}
