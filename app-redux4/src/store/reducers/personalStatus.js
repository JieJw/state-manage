const initState = {
  currentTab: 0,
  tabList: ["tab1", "tab2", "tab3", "tab4", "tab5"],
};

const personalStatusReducer = (state = initState, action) => {
  switch (action.type) {
    case "changeTab":
      return { ...state, ...{ currentTab: action.payload.currentTab } };
    default:
      return state;
  }
};

export default personalStatusReducer;
