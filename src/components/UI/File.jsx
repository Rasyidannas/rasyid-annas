function File({ title, icon }) {
  return (
    <div className="flex gap-2 cursor-pointer">
      <span className="text-secondary-10 text-[1rem] opacity-0">
        <i className="ri-arrow-right-s-line"></i>
      </span>
      <span className=" text-secondary-10 text-[1rem]">
        <i className={icon}></i>
      </span>
      <p className="text-labels text-secondary-10">{title}</p>
    </div>
  );
}

export default File;
