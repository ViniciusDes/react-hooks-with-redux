import { Provider } from "react-redux";
import store from "./store";

import CourseList from "./Components/CourseList/index";

function App() {
  return (
    <Provider store={store}>
      <CourseList />
    </Provider>
  );
}

export default App;
