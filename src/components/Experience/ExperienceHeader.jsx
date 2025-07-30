import Button from "../UI/Button";

function ExperienceHeader({ client, onRunning }) {
  const runningHandler = () => {
    onRunning(true);
  };

  return (
    <div className="flex justify-between gap-2">
      <div className="flex gap-3">
        <div>
          <p className="text-code font-bold text-secondary-30">
            @{client.name}
          </p>
          <p className="text-[.75rem] text-secondary-10">{client.date}</p>
        </div>
      </div>
      <div className="flex gap-6">
        <Button
          onClick={runningHandler}
          className="transition-all hover:!text-secondary-40"
        >
          <i className="ri-play-circle-line hover:text-secondary-40"></i>
          running
        </Button>
        <div className="text-code text-secondary-10 flex gap-1">
          <i className="ri-star-fill"></i>
          <p>{client.stars} stars</p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceHeader;
