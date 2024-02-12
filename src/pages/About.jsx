import AboutNav from "../components/About/AboutNav";
import Experience from "../components/Experience/Experience";
import TabProvider from "../store/TabProvider";
import AboutTab from "../components/About/AboutTab";
import AboutContent from "../components/About/AboutContent";

function AboutPage() {
  return (
    <TabProvider>
      <section className="w-full h-full flex justify-between">
        <AboutNav
          className="w-1/4"
          data={["about_me", "skill", "high_school", "university"]}
        />
        <div className="flex flex-col w-[35%]">
          {/* Tab */}
          <AboutTab />

          {/* Content */}
          <AboutContent />
        </div>
        <Experience className=" w-[40%]" />
      </section>
    </TabProvider>
  );
}

export default AboutPage;