import { connect } from "react-redux";
import { setFilter } from "../actions";
import Link from "../presentational_components/Link";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setFilter(ownProps.filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
