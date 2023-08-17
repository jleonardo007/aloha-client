type InputProps = {
  type: string;
  label: string;
  inputName: string;
  placeholder?: string;
  required?: boolean;
  errorMessage?: string;
};

function Input({ type, label, inputName, placeholder, required, errorMessage }: InputProps) {
  return (
    <div className="w-full">
      <label className="block  mb-1 text-sm text-gray-700" htmlFor={inputName}>
        <span className="capitalize">{label}</span>
        {errorMessage && (
          <span className="ml-2 text-xs text-red-600 inline-block first-letter:uppercase">
            {errorMessage}
          </span>
        )}
      </label>
      <input
        className="w-full h-[35px] pl-2 border border-gray-300 rounded-md focus:outline-green-500 text-sm"
        type={type}
        name={inputName}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

export default Input;
