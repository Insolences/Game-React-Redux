import { connect } from "react-redux";
import { Player } from "./Player";
import { actionIsInit } from "../../Config/Action";

function mapStateToProps(state) {
    return {
        isInit: state.player.isInit
    };
}

function mapDispatchToProps(dispatch) {
    return {
        isInitEvent: () => dispatch(actionIsInit())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Player);


// function handleMovement(player) {
//     window.addEventListener("keydown", )
// }
