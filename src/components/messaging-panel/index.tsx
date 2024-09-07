import { useContext, useEffect } from 'react';
import { CurrentUserContext } from 'src/context/current-user';
import { ScreenContext } from 'src/context/app-screens';
import { Screens } from 'src/reducers/app-screens';
import { APP_TITLE } from 'src/constants/ui-constants';
import { useGetNewCredentialsService } from 'src/service-hooks/access-token';
import { updateUser } from 'src/utils/local-storage';
import defaultAvatar from 'src/resources/images/default-avatar.svg';
import Header from 'src/components/header';
import Messaging from 'src/components/messaging';
import AddButton from 'src/components/create-button';
import ContactsPanel from 'src/components/contacts-panel';
import Menu from 'src/components/menu';

export default function MessagingPanel() {
  const { currentScreen } = useContext(ScreenContext);
  const { currentUser } = useContext(CurrentUserContext);
  const { profilePicture, fullName } = currentUser;

  useGetNewCredentialsService();

  useEffect(() => {
    if (!currentUser) return;

    updateUser(currentUser);
  }, [currentUser]);

  if (currentScreen === Screens.CONTACTS) {
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
