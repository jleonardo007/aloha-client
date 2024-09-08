import { useContext, useEffect } from 'react';
import { CurrentUserContext } from 'src/context/current-user';
import { ScreenContext } from 'src/context/app-screens';
import { Screens } from 'src/reducers/app-screens';
import { useGetNewCredentialsService } from 'src/service-hooks/access-token';
import { Header } from 'src/components/ui/header';
import { Messaging } from 'src/components/messaging';
import { AddButton } from 'src/components/ui/add-button';
import { ContactsPanel } from 'src/components/contacts-panel';
import { Menu } from 'src/components/ui/menu';
import { APP_TITLE } from 'src/constants/ui-constants';
import { updateUser } from 'src/utils/local-storage';
import defaultAvatar from 'src/resources/images/default-avatar.svg';

export function MobileLayout() {
  const { currentScreen } = useContext(ScreenContext);
  const { currentUser } = useContext(CurrentUserContext);
  const { profilePicture, fullName } = currentUser;

  useGetNewCredentialsService();

  useEffect(() => {
    if (!currentUser) return;

    updateUser(currentUser);
  }, [currentUser]);

  if (currentScreen === Screens.CONTACTS) {
    return (
      <section className="md:hidden">
        <ContactsPanel />
      </section>
    );
  }

  return (
    <section className="md:hidden">
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
    </section>
  );
}
