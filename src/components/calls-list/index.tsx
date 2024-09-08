import { useContext } from 'react';
import { CurrentUserContext } from 'src/context/current-user';
import { NoDataView } from 'src/components/ui/not-data-view';
import { Header } from 'src/components/ui/header';

export function CallsList() {
  const { currentUser } = useContext(CurrentUserContext);
  const { calls } = currentUser;

  return (
    <div>
      <div className="hidden md:block">
        <Header title="Calls" />
      </div>
      {calls.length === 0 && <NoDataView />}
    </div>
  );
}
