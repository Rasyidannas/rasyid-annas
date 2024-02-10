import { useState } from "react";

function Folder({ title, icon, children }) {
  const [clicked, setClicked] = useState(true);

  const clickHandler = () => {
    setClicked((prevState) => !prevState);
  };

  return (
    <>
      <div className="flex gap-2 cursor-pointer" onClick={clickHandler}>
        <span
          className={`text-secondary-10 text-[1rem] transition-all ${
            clicked ? "rotate-90" : "rotate-0"
          }`}
        >
          <i className="ri-arrow-right-s-line"></i>
        </span>
        <span>
          <i className={icon}></i>
        </span>
        <p className="text-labels text-secondary-10">{title}</p>
      </div>
      <div
        className={`flex flex-col gap-2 transition-all origin-top ${
          clicked ? "scale-y-100 h-full" : "scale-y-0 h-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}

export default Folder;
