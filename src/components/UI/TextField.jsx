const TextField = ({
  label,
  id,
  value,
  onChange,
  onBlur,
  hasError,
  placeholder,
  required,
}) => {
  return (
    <div className="flex flex-col gap-2 text-secondary-10">
      <div className="flex justify-between items-center">
        <label htmlFor={id}>{label}</label>
        {hasError && (
          <p className=" text-[.75rem] text-accent-10">{id} is not valid!</p>
        )}
      </div>
      <input
        id={id}
        name={id}
        type="text"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="px-4 py-2 rounded-lg bg-primary-30 focus:outline-secondary-10 text-secondary-40 placeholder:text-secondary-10 placeholder:opacity-70"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default TextField;
