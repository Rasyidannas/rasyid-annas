function File({ title, icon, className }) {
  return (
    <div className={`flex gap-2 cursor-pointer text-secondary-10 ${className}`}>
      <span className="text-[1rem] opacity-0">
        <i className="ri-arrow-right-s-line"></i>
      </span>
      <span className=" text-[1rem]">
        <i className={icon}></i>
      </span>
      <p className="text-labels hover:text-secondary-40 transition-all">
        {title}
      </p>
    </div>
  );
}

export default File;
