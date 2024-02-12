import { useContext } from "react";
import Checkbox from "../UI/Checkbox";
import GroupFolder from "../UI/GroupFolder";
import FilterContext from "../../store/filter-context";
import LaravelIcon from "../Icons/Laravel";

function ProjectsNav({ className }) {
  const filterCtx = useContext(FilterContext);
  const activeFilter = filterCtx.filters;

  const toggleFiltersHandler = (value) => {
    filterCtx.toggleFilter(value);
  };

  return (
    <div className={`${className} flex-none border-r border-lines-10`}>
      <GroupFolder title="projects">
        <div className="px-6 py-3 flex flex-col gap-2">
          <Checkbox
            id="html"
            labelText="HTML"
            icon="ri-html5-fill"
            onChange={toggleFiltersHandler.bind(null, "html")}
            checked={activeFilter.includes("html")}
          />
          <Checkbox
            id="css"
            labelText="CSS"
            icon="ri-css3-fill"
            onChange={toggleFiltersHandler.bind(null, "css")}
            checked={activeFilter.includes("css")}
          />
          <Checkbox
            id="react"
            labelText="React"
            icon="ri-reactjs-fill"
            onChange={toggleFiltersHandler.bind(null, "react")}
            checked={activeFilter.includes("react")}
          />
          <Checkbox
            id="laravel"
            labelText="Laravel"
            onChange={toggleFiltersHandler.bind(null, "laravel")}
            checked={activeFilter.includes("laravel")}
          >
            <LaravelIcon />
          </Checkbox>
        </div>
      </GroupFolder>
    </div>
  );
}

export default ProjectsNav;
