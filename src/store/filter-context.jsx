import { createContext } from "react";

const filterContext = createContext({
  filters: [],
  toggleFilter: (value) => {},
});

export default filterContext;
