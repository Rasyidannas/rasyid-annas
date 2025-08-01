import BadgesCard from "../UI/BadgesCard";
import HackerNews from "../../assets/projects/hacker_news.jpg"

const ProjectItem = ({ item, num }) => {
  return (
    <>
      <h3 className=" text-labels text-secondary-30 font-bold flex flex-col">
        Project {num + 1}{" "}
        <span className=" font-normal text-secondary-10 text-code">
          // {item.title}
        </span>
      </h3>
      <div className="w-full h-full overflow-hidden bg-primary-30 rounded-2xl border border-lines-10 flex flex-col gap-6">
        {
          item.urlImg && item.pathImg 
          ?
          <figure className="w-full relative before:absolute before:block before:bg-primary-30 before:inset-0 before:opacity-20 before:hover:opacity-0 border border-lines-10">
            <img className="w-full" src={item.pathImg || item.urlImg}  alt={item.title}/>
            {/* icon badges */}
            <BadgesCard item={item} />
          </figure>
          :
          <div className="w-full relative before:absolute before:block before:bg-primary-30 before:inset-0 before:opacity-20 before:hover:opacity-0 border border-lines-10">
            <img src={HackerNews} alt= "Not Maintained" />
            <div className="absolute inset-0 bg-primary-30 flex items-center justify-center font-bold">Not Maintained</div>
          </div>
        }
        <div className="px-6 pb-6 h-full flex flex-col justify-between gap-6">
          <p className="text-labels text-secondary-10">{item.desc}</p>

          <a
            href={item.urlLive}
            className="py-2 px-4 bg-lines-10 rounded self-start inline-block text-secondary-10 hover:text-secondary-40 transition-all"
          >
            view-project
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
