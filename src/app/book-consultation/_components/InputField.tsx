interface InputFieldProps {
  type: string;
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
}

export function InputField({
  type,
  id,
  name,
  label,
  placeholder,
  className = "",
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={`${className} rounded-[8px] py-3 px-4`}
      />
    </div>
  );
}
