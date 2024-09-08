import { useContext } from 'react';
import { CurrentUserContext } from 'src/context/current-user';
import { NoDataView } from 'src/components/no-data-view';

export function CallsList() {
  const { currentUser } = useContext(CurrentUserContext);
  const { calls } = currentUser;

  if (calls.length === 0) {
    return <NoDataView />;
  }
  return <div>CallsList</div>;
}
