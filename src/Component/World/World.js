import React from "react";
import Player from "../Player/Player";
import Map from "../Map/Map";
import Arrow from "../Arrow/Arrow";
import Enemy from "../Enemy/Enemy";
import { connect } from "react-redux";
import {
  actionIsInit,
  actionIsMoveEnemy,
  actionShowDeadEnemyModal
} from "../../Config/Action";
import { SpriteAnimation } from "../../otherComponents/SpriteAnimation";
import { Modal } from "../Modal";

class World extends React.PureComponent {
  componentDidMount() {
    this.props.init();
  }

  arrowFlight() {
    if (this.props.arrowInMap.length > 0) {
      return this.props.arrowInMap.map(el => <Arrow index={el} />);
    }
    return null;
  }

  moveEnemy = (id, enemySide) => {
    let tileMap = this.props.tileMap;
    this.props.movementEnemy(id, enemySide, tileMap);
    this.forceUpdate();
  };

  enemy() {
    if (this.props.enemyDeadCount === 3) {
      this.props.theEndEvent();
    }
    return this.props.enemyInMap.map((el, i) => (
      <Enemy
        id={el.id}
        key={i}
        position={el.position}
        name={el.name}
        life={el.life}
        stand={el.stand}
        side={el.side}
        animation={el.animation}
        steps={el.steps}
        movement={this.moveEnemy}
      />
    ));
  }

  renderDeathPlayer() {
    return (
      <div
        style={{
          position: "absolute",
          width: 64,
          height: 64,
          top: this.props.playerPosition[1],
          left: this.props.playerPosition[0]
        }}
      >
        <SpriteAnimation
          steps={6}
          animation="PLAYER_DEATH"
          loop={false}
          autoplay={true}
        />
      </div>
    );
  }
  render() {
    if (this.props.modal.deadPlayerModal || this.props.modal.modalForEnd) {
      return <Modal modalAction={this.props.modal.value} />;
    }
    return (
      <div
        style={{
          width: 1280,
          height: 780,
          position: "relative"
        }}
      >
        <Map />
        {this.props.lifePlayer ? <Player /> : this.renderDeathPlayer()}
        {this.arrowFlight()}
        {this.enemy()}
      </div>
    );
  }
}

export default connect(
  state => ({
    isInit: state.world.isInit,
    modal: state.modal,
    shoot: state.player.shoot,
    arrowInMap: state.world.arrowInMap,
    enemyInMap: state.world.enemyInMap,
    enemyDeadCount: state.world.enemyDeadCount,
    tileMap: state.map.tileMap,
    lifePlayer: state.player.life,
    playerPosition: state.player.position
  }),
  dispatch => ({
    init: () => dispatch(actionIsInit()),
    movementEnemy: (id, enemySide, tileMap) =>
      dispatch(actionIsMoveEnemy(id, enemySide, tileMap)),
    theEndEvent: () => dispatch(actionShowDeadEnemyModal())
  })
)(World);
