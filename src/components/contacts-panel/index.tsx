import { useContext, useState } from 'react';
import { ScreenContext } from 'src/context/app-screens';
import { CurrentUserContext } from 'src/context/current-user';
import { ScreenActions } from 'src/reducers/app-screens';
import { ContactsPanelScreens } from 'src/types/contacts-panel';
import { CONTACTS_PANEL_HEADER } from 'src/constants/ui-constants';
import Header from 'src/components/header';
import CreateNew from 'src/components/create-new';
import ContactsList from 'src/components/contacts-list';
import Menu from 'src/components/menu';
import BackButton from 'src/components/common/back-button';
import SearchButton from 'src/components/common/search-button';
import CreateContact from 'src/components/create-contact';

export default function ContactsPanel() {
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
