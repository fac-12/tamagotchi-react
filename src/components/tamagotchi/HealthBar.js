import React from "react";

export default class HealthBar extends React.Component {
  state = {
    health: 100
  };

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
          {/* <button>START AGAIN</button> */}
        </div>
      );
    } else {
      return (
        <div className="healthbar__container">
          <div className="health" style={healthStyle} />

          <button onClick={this.resetHealth.bind(this)} class="feedme">
            Feed Me
          </button>
        </div>
      );
    }
  }
}
