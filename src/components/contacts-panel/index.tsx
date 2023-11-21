import { useContext } from 'react';
import { TransitionContext } from 'src/context/app-transition';
import { CurrentUserContext } from 'src/context/current-user';
import Header from 'src/components/header';
import CreateNew from 'src/components/create-new';
import ContactsList from 'src/components/contacts-list';
import Menu from 'src/components/menu';
import BackButton from 'src/components/common/back-button';
import SearchButton from 'src/components/common/search-button';
import { CONTACTS_PANEL_HEADER } from 'src/constants/ui-constants';

export default function ContactsPanel() {
  const { prevTransition, changeTransition } = useContext(TransitionContext);
  const { contacts } = useContext(CurrentUserContext);

  function goToPrevScreen() {
    changeTransition(prevTransition, prevTransition);
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
      <CreateNew />
      <ContactsList />
    </section>
  );
}
