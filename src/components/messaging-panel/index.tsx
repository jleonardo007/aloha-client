import { useContext } from 'react';
import { CurrentUserContext } from 'src/context/current-user';
import { TransitionContext, TransitionsOptions } from 'src/context/app-transition';
import Header from 'src/components/header';
import Messaging from 'src/components/messaging';
import AddButton from 'src/components/create-button';
import ContactsPanel from 'src/components/contacts-panel';
import Menu from 'src/components/menu';
import { APP_TITLE } from 'src/constants/ui-constants';
import defaultAvatar from 'src/resources/images/default-avatar.svg';

export default function MessagingPanel() {
  const { currentTransition } = useContext(TransitionContext);
  const { profilePicture, fullName } = useContext(CurrentUserContext);

  if (currentTransition === TransitionsOptions.contacts) {
    return <ContactsPanel />;
  }

  return (
    <>
      <Header
        title={APP_TITLE}
        menu={<Menu />}
        slot={
          <img
            className="w-9 h-9 rounded-full"
            src={profilePicture ? profilePicture : defaultAvatar}
            alt={`${fullName} avatar`}
          />
        }
      />
      <Messaging />
      <AddButton />
    </>
  );
}
