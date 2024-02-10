import { useEffect, useState } from "react";
import AboutNav from "../../components/Layouts/AboutNav";
import Experience from "../../components/Experience/Experience";
import Content from "../../components/File/Content";

const data = {
  about_me:
    "I am based in Indonesia and have 6+ years experience in design and freelance. I have worked as freelacer at Fiverr and Upwork. I had 100+ clients and reviews 4.9 reviews. 1 year remote work for Storya and 3 monthsfor Habilis Solution. In 2024 I started focus study frontend andbackend more deep such React js and Laravel.",
  skill:
    "I know 2 programming languages, js and php. I know about React Js, laravel and libraries like AlpineJs and TailwindCSS. I have also learned algorithms and data structures in programming. I am interested in new things about technology and science. So my future goal is to become a software programmer in a big company.",
  high_school: "sma_muhaamadiyah_1_taman: science at 2014 - 2017",
  university: "Papsi_ITS: system_information 2018-2019",
};

function AboutPage() {
  const [activeTab, setActiveTab] = useState("about_me");
  const [currentTab, setCurrentTab] = useState([]);

  const currentTabHandler = (value) => {
    setCurrentTab(value);
  };

  const activeTabHandler = (value) => {
    setActiveTab(value);
  };

  console.log(activeTab);

  return (
    <section className="w-full h-full flex justify-between">
      <AboutNav
        onCurrentTab={currentTabHandler}
        onActiveTab={activeTabHandler}
        className="w-1/4"
        data={["about_me", "skill", "high_school", "university"]}
      />
      <div className="flex flex-col w-[35%]">
        <div className="flex w-full overflow-x-scroll personal-tab flex-none">
          {currentTab.map((item, i) => (
            <div
              key={i}
              className="text-secondary-10 px-4 py-2 text-labels flex-none flex items-center justify-start gap-4 border border-lines-10 h-12 max-w-[1/4] overflow-hidden cursor-pointer"
              onClick={activeTabHandler.bind(null, item)}
            >
              <h2
                className={`text-ellipsis overflow-hidden ${
                  activeTab === item && "text-secondary-40"
                }`}
              >
                {item}
              </h2>
              <i className="ri-close-fill"></i>
            </div>
          ))}
        </div>
        {/* About Me */}
        {activeTab === "about_me" || activeTab === undefined ? (
          <div className="w-full border-t border-lines-10 overflow-y-scroll">
            <Content data={data["about_me"]} />
          </div>
        ) : (
          <Content data={data[activeTab]} />
        )}
      </div>
      <Experience className=" w-[40%]" />
    </section>
  );
}

export default AboutPage;
