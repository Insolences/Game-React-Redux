import { connect } from "react-redux";
import { World } from "./World";
import { actionIsInit } from "../../Config/Action";

function mapDispatchToProps(dispatch) {
  return {
    isInitEvent: () => dispatch(actionIsInit())
  };
}

function mapStateToProps(state) {
  return {
    isInit: state.app.isInit
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(World);
