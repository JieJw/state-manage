import { Provider } from "react-redux";
import store from "./store";

import PersonalInfo from "./views/PersonalInfo";
import PersonalStatus from "./views/PersonalStatus";

function App() {
  return (
    <Provider store={store}>
      <h1>State:</h1>
      <PersonalInfo />
      <h1>Actions:</h1>
      <PersonalStatus />
    </Provider>
  );
}

export default App;
