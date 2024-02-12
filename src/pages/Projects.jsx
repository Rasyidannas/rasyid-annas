import ProjectsTab from "../components/Projects/ProjectsTab";
import ProjectsContent from "../components/Projects/ProjectsContent";
import ProjectsNav from "../components/Projects/ProjectsNav";
import FilterProvider from "../store/FilterProvider";

function ProjectsPage() {
  return (
    <FilterProvider>
      <section className="flex w-full h-full">
        <ProjectsNav className="w-1/4" />
        <div className="flex flex-col w-full">
          <ProjectsTab />
          <ProjectsContent />
        </div>
      </section>
    </FilterProvider>
  );
}

export default ProjectsPage;
