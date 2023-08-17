import Spinner from 'src/components/svg-icons/spinner';

type ButtonProps = {
  type: 'button' | 'submit';
  label: string;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
};

const loadingLabel = 'Processing...';

function Button({ type, label, disabled, isLoading, onClick }: ButtonProps) {
  if (isLoading) {
    return (
      <button className="w-full h-full capitalize rounded-[4px] bg-green-500 text-white" disabled>
        <Spinner className="h-5 w-5 inline-block mr-3" />
        {loadingLabel}
      </button>
    );
  }

  return (
    <button
      className="w-full h-full capitalize rounded-[4px] bg-green-500 text-white"
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
