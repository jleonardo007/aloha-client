import { ReactNode } from 'react';
import Spinner from 'src/components/svg-icons/spinner';

type ButtonProps = {
  type: 'button' | 'submit';
  icon: string;
  label?: string;
  className: string;
  disabled?: boolean;
  isLoading?: boolean;
  children?: ReactNode;
  onClick?: () => void;
};

const loadingLabel = 'Processing...';

function Button({
  type,
  icon,
  label,
  className,
  disabled,
  isLoading,
  children,
  onClick,
}: ButtonProps) {
  if (icon) {
    return (
      <button className={className} type={type} disabled={disabled} onClick={onClick}>
        <img className="w-full h-full" src={icon} alt={'icon'} />
      </button>
    );
  }

  if (isLoading) {
    return (
      <button className={className} disabled>
        <Spinner className="h-5 w-5 inline-block mr-3" />
        {loadingLabel}
      </button>
    );
  }

  return (
    <button className={className} type={type} disabled={disabled} onClick={onClick}>
      {label}
      {children}
    </button>
  );
}

export default Button;
