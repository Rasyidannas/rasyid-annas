import { useState } from "react";

function GroupFolder({ title, children }) {
  const [clicked, setClicked] = useState(true);
  const clickHandler = () => {
    setClicked((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col">
      <div
        className="cursor-pointer flex-none flex items-center gap-2 border-y border-lines-10 pl-2 pr-6 max-h-12 h-12 bg-lines-10 sm:bg-primary-20"
        onClick={clickHandler}
      >
        <i
          className={`ri-arrow-drop-down-fill text-[1.5rem] transition-all ${
            clicked ? "rotate-0" : "-rotate-90"
          }`}
        ></i>
        <h2 className="text-labels text-secondary-40">{title}</h2>
      </div>

      <div
        className={`transition-all origin-top bg-primary-20 ${
          clicked ? "scale-y-100 h-full" : "scale-y-0 h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default GroupFolder;
