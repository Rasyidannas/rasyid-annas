const LinkFile = ({ icon, text, children, link }) => {
  return (
    <>
      <span className="text-secondary-10 text-[1rem]">
        <i className={`${icon}`}></i>
        {children}
      </span>
      <a
        href={link}
        className="text-labels transition-all hover:!text-secondary-40 text-secondary-10"
      >
        {text}
      </a>
    </>
  );
};

export default LinkFile;
