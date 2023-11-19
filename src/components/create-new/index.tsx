import { useContext } from 'react';
import { TransitionContext, TransitionsOptions } from 'src/context/app-transition';
import { TITLES_CREATE_NEW } from 'src/constants/ui-constants';
import groupIcon from 'src/resources/icons/group.svg';
import contactIcon from 'src/resources/icons/add-contact.svg';
import callLinkIcon from 'src/resources/icons/call-link.svg';

export default function CreateNew() {
  const { prevTransition } = useContext(TransitionContext);

  if (prevTransition === TransitionsOptions.calls) {
    return (
      <div className="h-[calc(25vh-48px)]">
        <div
          className="h-1/2 flex items-center px-6 active:bg-slate-200"
          role="presentation"
          onClick={() => {}}
        >
          <div className="w-12 h-12 grid place-content-center rounded-full bg-teal-700">
            <img src={callLinkIcon} alt="add group" className="w-6 h-6" />
          </div>
          <span className="ml-5 text-lg">{TITLES_CREATE_NEW.callLink}</span>
        </div>
        <div
          className="h-1/2 flex items-center px-6 active:bg-slate-200"
          role="presentation"
          onClick={() => {}}
        >
          <div className="w-12 h-12 grid place-content-center rounded-full bg-teal-700">
            <img src={contactIcon} alt="add group" className="w-6 h-6" />
          </div>
          <span className="ml-5 text-lg">{TITLES_CREATE_NEW.newContact}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[calc(25vh-48px)]">
      <div
        className="h-1/2 flex items-center px-6 active:bg-slate-200"
        role="presentation"
        onClick={() => {}}
      >
        <div className="w-12 h-12 grid place-content-center rounded-full bg-teal-700">
          <img src={groupIcon} alt="add group" className="w-6 h-6" />
        </div>
        <span className="ml-5 text-lg">{TITLES_CREATE_NEW.newGroup}</span>
      </div>
      <div
        className="h-1/2 flex items-center px-6 active:bg-slate-200"
        role="presentation"
        onClick={() => {}}
      >
        <div className="w-12 h-12 grid place-content-center rounded-full bg-teal-700">
          <img src={contactIcon} alt="add group" className="w-8 h-8" />
        </div>
        <span className="ml-5 text-lg">{TITLES_CREATE_NEW.newContact}</span>
      </div>
    </div>
  );
}