import { useContext } from 'react';
import { TransitionContext } from 'src/context/app-transition';
import { CurrentUserContext } from 'src/context/current-user';
import Header from 'src/components/header';
import CreateNew from 'src/components/create-new';
import ContactsList from 'src/components/contacts-list';
import Menu from 'src/components/menu';
import Button from 'src/components/common/button';
import { CONTACTS_PANEL_HEADER } from 'src/constants/ui-constants';
import backIcon from 'src/resources/icons/arrow-left.svg';
import searchIcon from 'src/resources/icons/search-icon.svg';

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
        slot={<Button type="button" icon={searchIcon} className="h-6 w-6 mr-2" />}
        backButton={
          <Button type="button" icon={backIcon} className="h-8 w-8 mr-2" onClick={goToPrevScreen} />
        }
      />
      <CreateNew />
      <ContactsList />
    </section>
  );
}
