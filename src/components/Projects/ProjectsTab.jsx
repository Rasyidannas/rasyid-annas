import { useContext } from "react";
import filterContext from "../../store/filter-context";

function ProjectsTab() {
  const filterCtx = useContext(filterContext);
  const activeFilter = filterCtx.filters;

  return (
    <div className="flex flex-none w-fit h-12 text-labels border border-lines-10 items-center justify-start pl-4 pr-8">
      {!activeFilter.length && <h2>all_projects</h2>}
      {activeFilter.map((item, i) => (
        <h2 key={i}>{item};</h2>
      ))}
      <a href="/projects" className="pl-4 cursor-pointer">
        <i className="ri-close-fill"></i>
      </a>
    </div>
  );
}

export default ProjectsTab;
