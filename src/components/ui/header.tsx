import { HeaderProps } from 'src/types/header';

export function Header({ backButton, title, subtitle, slot, menu }: HeaderProps) {
  return (
    <header className="h-12 px-3 flex items-center bg-teal-700 md:bg-slate-100 md:border-b md:border-gray-300">
      <div className="md:hidden">{backButton}</div>
      <h1 className="grow text-xl text-slate-100 md:text-inherit">
        {title}
        {subtitle && (
          <span className="block text-xs text-slate-100 md:text-inherit">{subtitle}</span>
        )}
      </h1>
      <div className="flex items-center md:hidden">
        {slot}
        {menu}
      </div>
    </header>
  );
}
