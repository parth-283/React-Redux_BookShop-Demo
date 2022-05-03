import "./App.css";
import BookContainer from "./component/BookContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HookBookContainer from "./component/HookBookContainer";

function App() {
  
  return (
    <Provider store={store}>
      <div className="App">
        <BookContainer />
        <HookBookContainer />
      </div>
    </Provider>
  );
}

export default App;
