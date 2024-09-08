import { useContext } from 'react';
import { CurrentUserContext } from 'src/context/current-user';
import { NoDataView } from 'src/components/ui/not-data-view';
import { Header } from 'src/components/ui/header';

export function ChatsList() {
  const { currentUser } = useContext(CurrentUserContext);
  const { chats } = currentUser;

  return (
    <>
      <div className="hidden md:block">
        <Header title="Chats" />
      </div>
      {chats.length === 0 && <NoDataView />}
    </>
  );
}
