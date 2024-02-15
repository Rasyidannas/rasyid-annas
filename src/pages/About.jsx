import AboutNav from "../components/About/AboutNav";
import Experience from "../components/Experience/Experience";
import TabProvider from "../store/TabProvider";
import AboutTab from "../components/About/AboutTab";
import AboutContent from "../components/About/AboutContent";

function AboutPage() {
  return (
    <TabProvider>
      <section className="w-full h-full flex flex-col sm:flex-row justify-between overflow-y-scroll sm:overflow-y-hidden">
        {/* About Nav Desktop */}
        <AboutNav
          className="w-full sm:w-1/3 lg:w-1/4"
          data={["about_me", "skill", "high_school", "university"]}
        />
        <div className="flex flex-col w-full sm:w-2/3 lg:w-[35%] border-r border-lines-10">
          {/* Tab */}
          <AboutTab />

          {/* Content */}
          <AboutContent />
        </div>
        <Experience className="w-full sm:w-[40%]" />
      </section>
    </TabProvider>
  );
}

export default AboutPage;
