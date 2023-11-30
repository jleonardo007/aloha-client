import { useContext } from 'react';
import { CurrentUserContext } from 'src/context/current-user';

import NoDataView from 'src/components/no-data-view';

export default function CallsList() {
  const { calls } = useContext(CurrentUserContext);

  if (calls.length === 0) {
    return <NoDataView />;
  }
  return <div>CallsList</div>;
}
