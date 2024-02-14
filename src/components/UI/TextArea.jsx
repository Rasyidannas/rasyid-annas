function TextArea({
  id,
  label,
  onBlur,
  onChange,
  value,
  placeholder,
  rows,
  cols,
  required,
}) {
  return (
    <div className="flex flex-col gap-2 text-secondary-10">
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="px-4 py-2 rounded-lg bg-primary-30 focus:outline-secondary-10 text-secondary-40 placeholder:text-secondary-10 placeholder:opacity-70"
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        required={required}
      ></textarea>
    </div>
  );
}

export default TextArea;
