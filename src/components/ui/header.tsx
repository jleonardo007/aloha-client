import { HeaderProps } from 'src/types/header';

export function Header({ backButton, title, subtitle, slot, menu }: HeaderProps) {
  return (
    <header className="h-12 px-3 flex items-center bg-teal-700">
      {backButton}
      <h1 className="grow text-xl text-slate-100">
        {title}
        {subtitle && <span className="block text-xs text-slate-100">{subtitle}</span>}
      </h1>
      {slot}
      {menu}
    </header>
  );
}
