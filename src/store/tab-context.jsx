import { createContext } from "react";

const TabContext = createContext({
  tabs: [],
  activeTabs: "",
  addTab: (value) => {},
  setTab: (value) => {},
  closeTab: (value) => {},
});

export default TabContext;
