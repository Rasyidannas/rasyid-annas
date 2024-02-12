import { createContext } from "react";

const filterContext = createContext({
  filters: [],
  toggleFilter: (value) => {},
  clearFilter: () => {},
});

export default filterContext;
