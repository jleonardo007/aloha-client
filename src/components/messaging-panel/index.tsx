import { useContext } from 'react';
import { CurrentUserContext } from 'src/context/current-user';
import { TransitionContext, TransitionsOptions } from 'src/context/app-transition';
import { APP_TITLE } from 'src/constants/ui-constants';
import { useGetAccessTokenService } from 'src/service-hooks/access-token';
import defaultAvatar from 'src/resources/images/default-avatar.svg';
import Header from 'src/components/header';
import Messaging from 'src/components/messaging';
import AddButton from 'src/components/create-button';
import ContactsPanel from 'src/components/contacts-panel';
import Menu from 'src/components/menu';

export default function MessagingPanel() {
  const { currentTransition } = useContext(TransitionContext);
  const { currentUser } = useContext(CurrentUserContext);
  const { profilePicture, fullName } = currentUser;

  useGetAccessTokenService();

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
