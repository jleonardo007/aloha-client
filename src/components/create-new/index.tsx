import { useContext } from 'react';
import { ScreenContext } from 'src/context/app-screens';
import { Screens } from 'src/reducers/app-screens';
import { TITLES_CREATE_NEW } from 'src/constants/ui-constants';
import { ContactsPanelScreens, CreateNewProps } from 'src/types/contacts-panel';
import groupIcon from 'src/resources/icons/group.svg';
import contactIcon from 'src/resources/icons/add-contact.svg';
import callLinkIcon from 'src/resources/icons/call-link.svg';

export function CreateNew({ goToScreen }: CreateNewProps) {
  const { prevScreen } = useContext(ScreenContext);

  return (
    <div className="h-[calc(25vh-48px)] bg-slate-100">
      {prevScreen === Screens.CALLS && (
        <div
          className="h-1/2 flex items-center px-6 active:bg-slate-200"
          role="presentation"
          onClick={() => {
            goToScreen(ContactsPanelScreens.CREATE_CALL_LINK);
          }}
        >
          <div className="w-12 h-12 grid place-content-center rounded-full bg-teal-700">
            <img src={callLinkIcon} alt="add group" className="w-6 h-6" />
          </div>
          <span className="ml-5 text-lg">{TITLES_CREATE_NEW.callLink}</span>
        </div>
      )}
      {prevScreen === Screens.CHATS && (
        <div
          className="h-1/2 flex items-center px-6 active:bg-slate-200"
          role="presentation"
          onClick={() => {
            goToScreen(ContactsPanelScreens.CREATE_NEW_GROUP);
          }}
        >
          <div className="w-12 h-12 grid place-content-center rounded-full bg-teal-700">
            <img src={groupIcon} alt="add group" className="w-6 h-6" />
          </div>
          <span className="ml-5 text-lg">{TITLES_CREATE_NEW.newGroup}</span>
        </div>
      )}
      <div
        className="h-1/2 flex items-center px-6 active:bg-slate-200"
        role="presentation"
        onClick={() => {
          goToScreen(ContactsPanelScreens.CREATE_NEW_CONTACT);
        }}
      >
        <div className="w-12 h-12 grid place-content-center rounded-full bg-teal-700">
          <img src={contactIcon} alt="add group" className="w-8 h-8" />
        </div>
        <span className="ml-5 text-lg">{TITLES_CREATE_NEW.newContact}</span>
      </div>
    </div>
  );
}
