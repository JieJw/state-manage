import { combineReducers } from "redux";
import personalInfoReducer from "./personalInfo";
import personalStatusReducer from "./personalStatus";

const reducer = combineReducers({
  personalInfo: personalInfoReducer,
  personalStatus: personalStatusReducer,
});

export default reducer;
