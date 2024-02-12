import { useContext } from "react";
import Content from "../File/Content";
import TabContext from "../../store/tab-context";

const data = {
  about_me:
    "I am based in Indonesia and have 6+ years experience in design and freelance. I have worked as freelacer at Fiverr and Upwork. I had 100+ clients and reviews 4.9 reviews. 1 year remote work for Storya and 3 monthsfor Habilis Solution. In 2024 I started focus study frontend andbackend more deep such React js and Laravel.",
  skill:
    "I know 2 programming languages, js and php. I know about React Js, laravel and libraries like AlpineJs and TailwindCSS. I have also learned algorithms and data structures in programming. I am interested in new things about technology and science. So my future goal is to become a software programmer in a big company.",
  high_school: "sma_muhaamadiyah_1_taman: science at 2014 - 2017",
  university: "Papsi_ITS: system_information 2018-2019",
};

function AboutContent() {
  const tabCtx = useContext(TabContext);
  const activeTab = tabCtx.activeTabs;

  return activeTab ? (
    <Content text={data[activeTab]} className="border-t border-lines-10" />
  ) : (
    <p className="m-auto text-secondary-10">no file selected</p>
  );
}

export default AboutContent;
