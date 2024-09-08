import { useContext } from 'react';
import { CurrentUserContext } from 'src/context/current-user';
import { NoDataView } from 'src/components/no-data-view';

export function ChatsList() {
  const { currentUser } = useContext(CurrentUserContext);
  const { chats } = currentUser;

  if (chats.length === 0) {
    return <NoDataView />;
  }
  return <div>MessagesList</div>;
}
