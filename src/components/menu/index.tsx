import threeDots from 'src/resources/icons/three-dots-vertical.svg';

export function Menu() {
  return (
    <div className="cursor-pointer">
      <img src={threeDots} className="w-6 h-8" alt="three dots menu" />
    </div>
  );
}
