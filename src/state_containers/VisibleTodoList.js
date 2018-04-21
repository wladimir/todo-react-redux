import { connect } from "react-redux";
import { toggle } from "../actions";
import TodoList from "../presentational_components/TodoList";

const getTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed);
    case "SHOW_ALL":
    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  todos: getTodos(state.todos, state.filter)
});

const mapDispatchToProps = dispatch => ({
  toggle: id => dispatch(toggle(id))
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
