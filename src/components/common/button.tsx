type ButtonProps = {
  type: 'button' | 'submit';
  label: string;
  disabled?: boolean;
  spinner?: string;
  isLoading?: boolean;
  onClick?: () => void;
};

function Button({ type, label, disabled, spinner, isLoading, onClick }: ButtonProps) {
  if (isLoading) {
    return (
      <button disabled>
        <span>{spinner}</span>
      </button>
    );
  }

  return (
    <button
      className="w-full h-full  capitalize rounded-[4px] bg-green-500 text-white"
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
