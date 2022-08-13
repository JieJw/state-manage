const initState = {
  name: "wjj",
  age: 25,
  single: true,
  sex: "male",
};

const personalInfoReducer = (state = initState, action) => {
  switch (action.type) {
    case "Change_Name":
      return { ...state, ...{ name: action.payload.name } };
    default:
      return state;
  }
};

export default personalInfoReducer;
