import { useContext } from "react";
import TabContext from "../../store/tab-context";

function AboutTab() {
  const tabCtx = useContext(TabContext);
  const activeTab = tabCtx.activeTabs;
  const currentTab = tabCtx.tabs;

  const activeTabHandler = (value) => {
    tabCtx.setTab(value);
  };

  const closeTabHandler = (value) => {
    tabCtx.closeTab(value);
  };

  return (
    <div className="flex flex-row w-full overflow-x-scroll overflow-y-hidden personal-tab flex-none border-t border-lines-10 h-12">
      {currentTab.map((item, i) => (
        <div
          key={i}
          className="text-secondary-10 px-4 text-labels flex-none flex items-center justify-start gap-4 border-r border-lines-10 h-12 sm:w-auto w-fit overflow-hidden cursor-pointer"
        >
          <h2
            className={`text-ellipsis overflow-hidden py-2 ${
              activeTab === item && "text-secondary-40"
            }`}
            onClick={activeTabHandler.bind(null, item)}
          >
            {item}
          </h2>
          <span onClick={closeTabHandler.bind(null, item)}>
            <i className="ri-close-fill"></i>
          </span>
        </div>
      ))}
    </div>
  );
}

export default AboutTab;
