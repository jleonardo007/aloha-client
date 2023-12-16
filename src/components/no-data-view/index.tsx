import { useContext } from 'react';
import { ScreenContext } from 'src/context/app-screens';
import { Screens } from 'src/reducers/app-screens';
import { TEXT_NODATA_VIEW } from 'src/constants/ui-constants';
import noMessagesIcon from 'src/resources/icons/no-messages.svg';
import noCalls from 'src/resources/icons/no-calls.svg';
import noContactsIcon from 'src/resources/icons/no-contacts.svg';

export default function NoDataView() {
  const { currentScreen } = useContext(ScreenContext);

  if (currentScreen === Screens.CONTACTS) {
    return (
      <div className="h-[75vh] bg-slate-100 pt-20">
        <img src={noContactsIcon} className="w-20 h-20 mx-auto mb-4" alt="no contacts" />
        <span className="capitalize text-2xl text-center block">{TEXT_NODATA_VIEW.contacts}</span>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-88px)] bg-slate-100 pt-32">
      {currentScreen === Screens.CHATS && (
        <img src={noMessagesIcon} className="w-20 h-20 mx-auto mb-4" alt="no messages" />
      )}
      {currentScreen === Screens.CALLS && (
        <img src={noCalls} className="w-16 h-16 mx-auto mb-4" alt="no calls" />
      )}
      <span className="capitalize text-2xl text-center block">
        {currentScreen === Screens.CHATS ? TEXT_NODATA_VIEW.messages : TEXT_NODATA_VIEW.calls}
      </span>
    </div>
  );
}
