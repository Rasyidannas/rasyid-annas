import { useReducer } from "react";
import TabContext from "./tab-context";

const defaultTabState = {
  tabs: ["about_me"],
  activeTabs: "about_me",
};

const tabReducer = (state, action) => {
  if (action.type === "ADD") {
    const existValue = state.tabs.indexOf(action.value);

    //this is for value exist
    if (existValue >= 0) {
      return {
        tabs: state.tabs,
        activeTabs: state.activeTabs,
      };
    }

    const newTabs = state.tabs.concat(action.value);
    return {
      tabs: newTabs,
      activeTabs: state.activeTabs,
    };
  }

  if (action.type === "SET") {
    const newActiveTabs = action.value;

    return {
      tabs: state.tabs,
      activeTabs: newActiveTabs,
    };
  }

  if (action.type === "CLOSE") {
    const newTabs = state.tabs.filter((item) => item !== action.value);
    const lastTabs = newTabs[newTabs.length - 1];

    return {
      tabs: newTabs,
      activeTabs: lastTabs || null,
    };
  }
};

const TabProvider = ({ children }) => {
  const [tabState, dispatchTabAction] = useReducer(tabReducer, defaultTabState);

  const addTabHandler = (value) => {
    dispatchTabAction({ type: "ADD", value: value });
  };

  const setTabHandler = (value) => {
    dispatchTabAction({ type: "SET", value: value });
  };

  const closeTabHandler = (value) => {
    dispatchTabAction({ type: "CLOSE", value: value });
  };

  const tabContext = {
    tabs: tabState.tabs,
    activeTabs: tabState.activeTabs,
    addTab: addTabHandler,
    setTab: setTabHandler,
    closeTab: closeTabHandler,
  };

  return (
    <TabContext.Provider value={tabContext}>{children}</TabContext.Provider>
  );
};

export default TabProvider;
