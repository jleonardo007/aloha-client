import { useContext } from 'react';
import { CurrentUserContext } from 'src/context/current-user';
import { NoDataView } from 'src/components/ui/not-data-view';
import { ContactCard } from 'src/components/contact-card';

export function ContactsList() {
  const { currentUser } = useContext(CurrentUserContext);
  const { contacts } = currentUser;

  if (contacts.length === 0) {
    return <NoDataView />;
  }

  return (
    <div className="bg-slate-100 md:max-h-[calc(100vh-193px)] md:overflow-y-auto">
      {contacts.map((contact) => (
        <ContactCard key={contact._id} {...contact} />
      ))}
    </div>
  );
}
