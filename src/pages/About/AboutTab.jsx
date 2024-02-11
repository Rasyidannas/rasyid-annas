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

  console.log(currentTab, activeTab);
  return (
    <div className="flex w-full overflow-x-scroll personal-tab flex-none">
      {currentTab.map((item, i) => (
        <div
          key={i}
          className="text-secondary-10 px-4 text-labels flex-none flex items-center justify-start gap-4 border border-lines-10 h-12 w-auto overflow-hidden cursor-pointer"
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
