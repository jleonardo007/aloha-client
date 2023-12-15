import { useContext } from 'react';
import { CurrentUserContext } from 'src/context/current-user';
import NoDataView from 'src/components/no-data-view';

export default function ContactsList() {
  const { currentUser } = useContext(CurrentUserContext);
  const { contacts } = currentUser;

  if (contacts.length === 0) {
    return <NoDataView />;
  }

  return <div>ContactsList</div>;
}
