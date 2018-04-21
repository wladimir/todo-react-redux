import React from "react";
import Footer from "./Footer";
import AddTodo from "../state_containers/AddTodo";
import VisibleTodoList from "../state_containers/VisibleTodoList";

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
