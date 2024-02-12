function Checkbox({ labelText, id, icon, onChange, children, checked }) {
  return (
    <div className="flex items-center gap-6 text-secondary-10 relative">
      <input
        type="checkbox"
        id={id}
        name={id}
        className="w-[1.125rem] h-[1.125rem] peer hidden"
        onChange={onChange}
        checked={checked}
      />
      {/* Custom box */}
      <label
        htmlFor={id}
        className=" w-[1.125rem] h-[1.125rem] border-2 border-secondary-10 relative z-50 rounded-sm"
      ></label>
      <i className="ri-check-fill text-code font-semibold text-secondary-40 absolute peer-checked:visible invisible peer-checked:bg-secondary-10 w-[1.125rem] h-[1.125rem] flex items-center justify-center rounded-sm "></i>

      <label
        htmlFor={id}
        className="flex items-center gap-2 text-labels peer-checked:text-secondary-40 opacity-70 peer-checked:opacity-100"
      >
        {children && (
          <div className="text-[1.5rem] w-6 h-9 flex items-center text-secondary-10">
            {children}
          </div>
        )}

        {icon && (
          <i className={`${icon} h-9 text-[1.5rem] text-secondary-10`}></i>
        )}
        {labelText}
      </label>
    </div>
  );
}

export default Checkbox;
