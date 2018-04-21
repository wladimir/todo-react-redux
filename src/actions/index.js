let nextId = 0;

export const addTodo = text => ({
  type: "ADD_TODO",
  id: nextId++,
  text
});

export const setFilter = filter => ({
  type: "SET_FILTER",
  filter
});

export const toggle = id => ({
  type: "TOGGLE",
  id
});

export const Filters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
