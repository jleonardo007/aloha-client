type InputProps = {
  type: string;
  label: string;
  inputName: string;
  placeholder?: string;
  required?: boolean;
};

function Input({ type, label, inputName, placeholder, required }: InputProps) {
  return (
    <div className="w-full">
      <label className="block capitalize mb-1 text-sm text-gray-700" htmlFor={inputName}>
        {label}
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
