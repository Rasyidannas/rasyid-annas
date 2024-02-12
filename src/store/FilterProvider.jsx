import { useReducer } from "react";
import FilterContext from "./filter-context";

const defaultFilterState = {
  filters: [],
};

const filterReducer = (state, action) => {
  if (action.type === "TOGGLE") {
    const existValue = state.filters.indexOf(action.value);

    if (existValue >= 0) {
      const updateFilters = state.filters.filter(
        (item) => item !== action.value
      );
      return {
        filters: updateFilters,
      };
    }

    const newFilters = state.filters.concat(action.value);
    return {
      filters: newFilters,
    };
  }
};

const FilterProvider = ({ children }) => {
  const [filterState, dispatchFilterAction] = useReducer(
    filterReducer,
    defaultFilterState
  );

  const toggleFilterHandler = (value) => {
    dispatchFilterAction({ type: "TOGGLE", value: value });
  };

  const filterContext = {
    filters: filterState.filters,
    toggleFilter: toggleFilterHandler,
  };

  return (
    <FilterContext.Provider value={filterContext}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
