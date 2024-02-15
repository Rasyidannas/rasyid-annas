import { useContext } from "react";
import filterContext from "../../store/filter-context";

function ProjectsTab() {
  const filterCtx = useContext(filterContext);
  const activeFilter = filterCtx.filters;

  const closeHandler = () => {
    filterCtx.clearFilter();
  };

  return (
    <div className="flex flex-none w-fit h-12 text-labels border border-lines-10 items-center justify-start pl-4 pr-8">
      {!activeFilter.length && <h2>all_projects</h2>}
      {activeFilter.map((item, i) => (
        <h2 key={i}>{item};</h2>
      ))}
      <div
        className="pl-4 cursor-pointer text-secondary-10"
        onClick={closeHandler}
      >
        <i className="ri-close-fill"></i>
      </div>
    </div>
  );
}

export default ProjectsTab;
