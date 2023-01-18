import React from "react";
// import { store } from "./store";
// import { Provider } from "react-redux";
// import Counter from "./pages/Counter";
import AddTodoForm from "./toolkit/AddTodoForm";
import Todolist from "./toolkit/Todolist";
import TotalCompleteItems from "./toolkit/TotalCompleteItems";
import { Provider } from "react-redux";
import store from "./toolkit/store";

function App() {
  return (
    <div className="App">
      {/* <Provider store={store}> */}
      {/* <Counter /> */}
      <Provider store={store}>
        <AddTodoForm />
        <Todolist />
        <TotalCompleteItems />
      </Provider>
      {/* </Provider> */}
    </div>
  );
}

export default App;
