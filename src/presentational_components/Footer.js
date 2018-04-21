import React from "react";
import FilterLink from "../state_containers/FilterLink";
import { Filters } from "../actions";

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={Filters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={Filters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={Filters.SHOW_COMPLETED}>Completed</FilterLink>
  </div>
);

export default Footer;
