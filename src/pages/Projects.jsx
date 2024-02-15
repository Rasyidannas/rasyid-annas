import ProjectsTab from "../components/Projects/ProjectsTab";
import ProjectsContent from "../components/Projects/ProjectsContent";
import ProjectsNav from "../components/Projects/ProjectsNav";
import FilterProvider from "../store/FilterProvider";

function ProjectsPage() {
  return (
    <FilterProvider>
      <section className="flex flex-col sm:flex-row w-full h-full overflow-y-scroll sm:overflow-y-hidden">
        <ProjectsNav className="sm:w-1/3 lg:w-1/4" />
        <div className="flex flex-col w-full border-t border-r border-lines-10">
          <ProjectsTab />
          <ProjectsContent />
        </div>
      </section>
    </FilterProvider>
  );
}

export default ProjectsPage;
