import React from "react";

export default class HealthBar extends React.Component {
  state = {
    health: 100
  };

  render() {
    const healthStyle = {
      background: "rgb(252, 50, 158)",
      display: "inline",
      width: `${this.state.health}%`,
      height: "15px",
      position: "absolute",
      display: "block",
      background: "#303732"
    };
    if (this.state.health <= 0) {
      return (
        <div>
          <div class="healthbar__container gameover">GAME OVER!</div>
        </div>
      );
    } else {
      return (
        <div className="healthbar__container">
          <div className="health" style={healthStyle} />
          <p className="healthbar__label">HUNGER</p>
          <button
            className="healthbar__button"
            onClick={this.resetHealth.bind(this)}
          >
            FEED ME!
          </button>
        </div>
      );
    }
  }

  countDown() {
    this.setState(prevState => ({
      health: prevState.health - 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.countDown(), 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  resetHealth() {
    this.setState({ health: 100 });
  }
}
