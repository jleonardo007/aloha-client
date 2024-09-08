import { useContext } from 'react';
import { ScreenContext } from 'src/context/app-screens';
import { Screens, ScreenActions } from 'src/reducers/app-screens';
import { ChatsList } from 'src/components/chats-list';
import { CallsList } from 'src/components/calls-list';
import { ContactsPanel } from 'src/components/contacts-panel';
import { Button } from 'src/components/ui/button';
import ChatsIcon from 'src/resources/icons/chats.svg';
import CallsIcon from 'src/resources/icons/calls.svg';
import ContactsIcon from 'src/resources/icons/contacts.svg';
import ConfigIcon from 'src/resources/icons/config.svg';

const SECTIONS = {
  CHATS: <ChatsList />,
  CALLS: <CallsList />,
  CONTACTS: <ContactsPanel />,
};

type SideBarButtonProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

function SideBarButton({ children, className, onClick }: SideBarButtonProps) {
  return (
    <Button type="button" className={`w-8 h-8 ${className}`} onClick={onClick}>
      {children}
    </Button>
  );
}

function SideBar() {
  const { changeScreen } = useContext(ScreenContext);

  function handleSection(section: Screens) {
    const sections = {
      CHATS: Screens.CHATS,
      CALLS: Screens.CALLS,
      CONTACTS: Screens.CONTACTS,
    };

    changeScreen({
      type: ScreenActions.GO_TO_NEXT_SCREEN,
      payload: {
        currentScreen: sections[section],
        prevScreen: Screens.CHATS,
      },
    });
  }

  return (
    <aside className="w-24 h-full flex gap-y-6 flex-col items-center py-9 bg-slate-100">
      <SideBarButton onClick={() => handleSection(Screens.CHATS)}>
        <img src={ChatsIcon} alt="chats" className="w-full h-full" />
      </SideBarButton>
      <SideBarButton onClick={() => handleSection(Screens.CALLS)}>
        <img src={CallsIcon} alt="calls" className="w-full h-full" />
      </SideBarButton>
      <SideBarButton onClick={() => handleSection(Screens.CONTACTS)}>
        <img src={ContactsIcon} alt="contacts" className="w-full h-full" />
      </SideBarButton>
      <SideBarButton className="mt-auto">
        <img src={ConfigIcon} alt="settings" className="w-full h-full" />
      </SideBarButton>
    </aside>
  );
}
export function DesktopLayout() {
  const { currentScreen } = useContext(ScreenContext);

  return (
    <section className="hidden h-screen bg-slate-100 md:flex">
      <SideBar />
      <div className="w-[500px] h-full border-l border-r border-gray-300">
        {SECTIONS[currentScreen]}
      </div>
      <div className="w-[calc(100vw-596px)] h-full"></div>
    </section>
  );
}
