import React from "react";
import "./Modal.css";
import { connect } from "react-redux";
import ReactModal from "react-modal";
import {
  actionCloseStartModal,
  actionShowStartModal,
  actionShowDeadPlayerModal,
  actionShowDeadEnemyModal
} from "../../Config/Action";
import img from "../../dist/img/content/2.jpg";
import keyArrowImg from "../../dist/img/keyboard/keys-arrow-text-sign.png";
import keySpaceImg from "../../dist/img/keyboard/bar_keyboard_space_tutorial-512.png";

import "../../css/button.css";

ReactModal.defaultStyles.content.padding = 0;

export class Modal extends React.PureComponent {
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.enemyDeadCount === 3) {
      this.eventModalForEnd();
    }
  }

  renderDeadPlayerModal() {
    return (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          "align-items": "center",
          "justify-content": "center",
          backgroundColor: "red"
        }}
      >
        <div className="btn from-top" onClick={this.handleRestartGame}>
          RESTART
        </div>
      </div>
    );
  }

  handleRestartGame() {
    document.location.reload();
  }

  renderEndModal() {
    return (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          "align-items": "center",
          "justify-content": "center",
          backgroundColor: "black",
          flexDirection: "column"
        }}
      >
        <h1>Congratulations!!!</h1>
        <h2>All enemy is dead</h2>
        <div className="btn from-top" onClick={this.handleRestartGame}>
          PLAY AGAIN
        </div>
      </div>
    );
  }

  renderStartModal() {
    return (
      <div className="mainStart">
        <div className="imgBlock">
          <img src={img} className="img" />
        </div>
        <div className="contentBlock">
          <h1>WELCOME MY DEAR FRIEND!</h1>
          <div
            style={{
              width: "100%",
              display: "flex",
              padding: "20px 0",
              "align-items": "center",
              "justify-content": "space-around"
            }}
          >
            <div
              style={{
                width: 174,
                height: 122,
                display: "flex",
                "align-items": "flex-start",
                "justify-content": "start"
              }}
            >
              <img
                src={keyArrowImg}
                style={{
                  width: "100%",
                  height: "100%"
                }}
              />
            </div>
            <h2>MOVE</h2>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              padding: "20px 0",
              "align-items": "center",
              "justify-content": "space-around"
            }}
          >
            <div
              style={{
                width: 174,
                height: 122,
                display: "flex",
                "align-items": "flex-start",
                "justify-content": "start"
              }}
            >
              <img
                src={keySpaceImg}
                style={{
                  width: "100%",
                  height: "100%"
                }}
              />
            </div>
            <h2>SHOOT</h2>
          </div>
          <div className="btn from-top" onClick={this.handleCloseStartModal}>
            START
          </div>
        </div>
      </div>
    );
  }

  renderModal() {
    switch (this.props.modalAction) {
      case "SHOW_DEAD_PLAYER_MODAL":
        return this.renderDeadPlayerModal();
      case "SHOW_START_MODAL":
        return this.renderStartModal();
      case "SHOW_DEAD_ENEMY_MODAL":
        return this.renderEndModal();
    }
  }

  handleCloseStartModal = () => {
    this.props.eventCloseStartModal();
  };

  render() {
    return (
      <div>
        <ReactModal
          isOpen={
            this.props.modalForStart ||
            this.props.deadPlayerModal ||
            this.props.modalForEnd
          }
          contentLabel="START THE GAME"
          onRequestClose={this.handleCloseStartModal}
          shouldCloseOnOverlayClick={false}
          style={{
            overlay: {
              backgroundColor: "grey"
            },
            content: {
              zIndex: 1000,
              color: "green",
              backgroundColor: "black",
              border: "none"
            }
          }}
        >
          {this.renderModal()}
        </ReactModal>
      </div>
    );
  }
}

export default connect(
  state => ({
    enemyDeadCount: state.world.enemyDeadCount,
    modalForStart: state.modal.modalForStart,
    deadPlayerModal: state.modal.deadPlayerModal,
    modalForEnd: state.modal.modalForEnd
  }),
  dispatch => ({
    eventShowStartModal: () => dispatch(actionShowStartModal()),
    eventDeadPlayerModal: () => dispatch(actionShowDeadPlayerModal()),
    eventModalForEnd: () => dispatch(actionShowDeadEnemyModal()),
    eventCloseStartModal: () => dispatch(actionCloseStartModal())
  })
)(Modal);
