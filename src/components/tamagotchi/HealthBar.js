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
    if (this.state.health <= 0) {
      return <div>GAME OVER!</div>;
    } else {
      return (
        <div className="healthbar__container">
          <div className="health">health: {this.state.health}</div>
          <button className="feedme" onClick={this.resetHealth.bind(this)}>
            Feed Me
          </button>
        </div>
      );
    }
  }
}
