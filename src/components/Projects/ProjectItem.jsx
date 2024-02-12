import LaravelIcon from "../Icons/Laravel";
import BadgesCard from "../UI/BadgesCard";

const ProjectItem = ({ item, num }) => {
  return (
    <>
      <h3 className=" text-labels text-secondary-30 font-bold flex flex-col">
        Project {num + 1}{" "}
        <span className=" font-normal text-secondary-10 text-code">
          // {item.title}
        </span>
      </h3>
      <div className="w-full h-full overflow-hidden bg-primary-30 rounded-2xl border border-lines-10">
        <figure className="w-full relative before:absolute before:block before:bg-primary-30 before:inset-0 before:opacity-20 before:hover:opacity-0 border border-lines-10">
          <img src={item.urlImg} />
          {/* icon badges */}
          <BadgesCard item={item} />
        </figure>
        <div className="p-6 flex flex-col gap-6">
          <p className="text-labels text-secondary-10">{item.desc}</p>
          <a
            href={item.urlLive}
            className="py-2 px-4 bg-lines-10 rounded self-start"
          >
            view-project
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
