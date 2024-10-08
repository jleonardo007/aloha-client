import { useContext, useState } from 'react';
import { ScreenContext } from 'src/context/app-screens';
import { CurrentUserContext } from 'src/context/current-user';
import { ScreenActions } from 'src/reducers/app-screens';
import { ContactsPanelScreens } from 'src/types/contacts-panel';
import { Header } from 'src/components/ui/header';
import { Menu } from 'src/components/ui/menu';
import { BackButton } from 'src/components/ui/back-button';
import { SearchButton } from 'src/components/ui/search-button';
import { CreateNew } from 'src/components/create-new';
import { ContactsList } from 'src/components/contacts-list';
import { CreateContact } from 'src/components/create-contact';
import { CONTACTS_PANEL_HEADER } from 'src/constants/ui-constants';

export function ContactsPanel() {
  const { prevScreen, changeScreen } = useContext(ScreenContext);
  const { currentUser } = useContext(CurrentUserContext);
  const { contacts } = currentUser;
  const [panelScreens, setPanelScreens] = useState(ContactsPanelScreens.CONTACTS_LIST);

  function goToPrevScreen() {
    changeScreen({
      type: ScreenActions.GO_TO_PREV_SCREEN,
      payload: {
        currentScreen: prevScreen,
        prevScreen,
      },
    });
  }

  function goToScreen(screen: ContactsPanelScreens) {
    //add timeout to see clikc animation on create-new component
    setTimeout(() => {
      setPanelScreens(screen);
    }, 200);
  }

  if (panelScreens === ContactsPanelScreens.CREATE_NEW_CONTACT) {
    return <CreateContact goToScreen={() => goToScreen(ContactsPanelScreens.CONTACTS_LIST)} />;
  }

  return (
    <section className="h-screen">
      <Header
        title={CONTACTS_PANEL_HEADER.title}
        subtitle={CONTACTS_PANEL_HEADER.contactsAmount(contacts.length)}
        menu={<Menu />}
        slot={<SearchButton enableSearch={() => {}} />}
        backButton={<BackButton back={goToPrevScreen} />}
      />
      <CreateNew goToScreen={goToScreen} />
      <ContactsList />
    </section>
  );
}
