import Header from 'src/components/header';
import CreateNew from 'src/components/create-new';
import ContactsList from 'src/components/contacts-list';

export default function ContactsPanel() {
  return (
    <section className="h-screen">
      <Header />
      <CreateNew />
      <ContactsList />
    </section>
  );
}
