import { Contact } from 'src/graphql/types/contact';
import NoAvatar from 'src/resources/images/default-avatar.svg';

export function ContactCard({ name, user }: Contact) {
  return (
    <div className="h-20 mb-2 px-6 flex items-center">
      <div className="w-12 h-12 grid place-content-center">
        <img
          src={user?.profilePicture ? user.profilePicture : NoAvatar}
          alt="avatar"
          className={`w-full h-full border-2 rounded-full ${
            !user?.profilePicture && 'border-gray-300'
          }`}
        />
      </div>
      <div className="flex flex-col ml-2 w-[calc(80vw-48px)]">
        <span className="text-base font-black">{name}</span>
        <p className="text-sm text-gray-500 truncate">{user?.status}</p>
      </div>
    </div>
  );
}
