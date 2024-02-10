import potrait from "../assets/potrait.svg";

function HomePage() {
  return (
    <section className="flex px-12 justify-between w-full h-full">
      <div className="my-auto w-1/2">
        <h1 className="text-body">Hi there, I am</h1>
        <h2 className="text-headline">Rasyid Annas</h2>
        <div>
          <p className="text-subheadline text-secondary-30">
            &gt; Front-end developer
          </p>
          <p className="text-subheadline text-secondary-30">
            &gt; Product designer
          </p>
        </div>
        <div className="mt-12">
          <p className="text-labels text-secondary-10">
            <span>/</span>
            <span>/</span> you can also see it on my Github page
          </p>
          <p>
            <span className="text-secondary-30">const</span>{" "}
            <span className="text-accent-20">githubLink</span>
            <span> = </span>
            <span className=" text-accent-30">
              <a href="https://github.com/Rasyidannas">
                “https://github.com/Rasyidannas”
              </a>
            </span>
            ;
          </p>
        </div>
      </div>

      <div className="w-1/2 max-h-[80vh] flex items-center justify-center">
        <figure className="h-3/4 relative z-50">
          <img src={potrait} className="h-full" />
        </figure>
        {/* Background gradient */}
        <div className="bg-green"></div>
        <div className="bg-blue"></div>
      </div>
    </section>
  );
}

export default HomePage;
