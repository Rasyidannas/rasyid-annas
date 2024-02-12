const BadgesCard = ({ item }) => {
  return (
    <div className="flex gap-2 absolute top-2 right-4">
      {item.tags.map((item, i) =>
        item === "html" ? (
          <div
            key={i}
            className=" w-6 h-6 flex items-center justify-center rounded-sm bg-secondary-20 text-secondary-40"
          >
            <i className="ri-html5-fill"></i>
          </div>
        ) : item === "css" ? (
          <div
            key={i}
            className=" w-6 h-6 flex items-center justify-center rounded-sm bg-secondary-20 text-secondary-40"
          >
            <i key={i} className="ri-css3-fill"></i>
          </div>
        ) : item === "react" ? (
          <div
            key={i}
            className=" w-6 h-6 flex items-center justify-center rounded-sm bg-secondary-20 text-secondary-40"
          >
            <i key={i} className="ri-reactjs-fill"></i>
          </div>
        ) : item === "laravel" ? (
          <div
            key={i}
            className=" w-6 h-6 flex items-center justify-center rounded-sm bg-secondary-20 text-secondary-40"
          >
            <LaravelIcon />
          </div>
        ) : null
      )}
    </div>
  );
};

export default BadgesCard;
