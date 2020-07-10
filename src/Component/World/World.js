import React from "react";
import Player from "../Player/Player";
import Map from "../Map/Map";
import Arrow from "../Arrow/Arrow";
import Enemy from "../Enemy/Enemy";
import { connect } from "react-redux";
import { actionIsInit, actionIsMoveEnemy } from "../../Config/Action";
import { SpriteAnimation } from "../../otherComponents/SpriteAnimation";

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

  render() {
    return (
      <div
        style={{
          width: 1280,
          height: 780,
          position: "relative"
        }}
      >
        <Map />
        {this.props.lifePlayer ? (
          <Player />
        ) : (
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
        )}
        {this.arrowFlight()}
        {this.enemy()}
      </div>
    );
  }
}

export default connect(
  state => ({
    isInit: state.world.isInit,
    shoot: state.player.shoot,
    arrowInMap: state.world.arrowInMap,
    enemyInMap: state.world.enemyInMap,
    tileMap: state.map.tileMap,
    lifePlayer: state.player.life,
    playerPosition: state.player.position
  }),
  dispatch => ({
    init: () => dispatch(actionIsInit()),
    movementEnemy: (id, enemySide, tileMap) =>
      dispatch(actionIsMoveEnemy(id, enemySide, tileMap))
  })
)(World);
