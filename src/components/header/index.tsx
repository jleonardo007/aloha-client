import { useContext } from 'react';
import { CurrentUserContext } from 'src/context/current-user';
import Menu from 'src/components/menu';
import { APP_TITLE } from 'src/constants/ui-constants';
import defaultAvatar from 'src/resources/images/default-avatar.svg';

export default function Header() {
  const { profilePicture, fullName } = useContext(CurrentUserContext);

  return (
    <header className="h-12 px-3 flex items-center bg-teal-700">
      <h1 className="grow text-xl text-slate-100">{APP_TITLE}</h1>
      <img
        className="w-9 h-9 rounded-full"
        src={profilePicture ? profilePicture : defaultAvatar}
        alt={`${fullName} avatar`}
      />
      <Menu />
    </header>
  );
}
