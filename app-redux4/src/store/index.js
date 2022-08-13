import { createStore } from "./createStore";
import compose from "./compose";
import reducer from "./reducers";
import autoLogger from "./enhancer/autoLogger";
import autoLogger2 from "./enhancer/autoLogger2";

const enhancer = compose(autoLogger(), autoLogger2());

console.log("enhancer:23", enhancer);

const store = createStore(reducer, enhancer);

export default store;
