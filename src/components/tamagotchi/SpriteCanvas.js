import React from "react";
import spritesheet1 from "../../../public/spritesheet1.png";
import spritesheet2 from "../../../public/spritesheet2.png";
import spritesheet3 from "../../../public/spritesheet3.png";

export default class SpriteCanvas extends React.Component {
  state = {
    frameIndex: 1
  };

  updateFrameIndex() {
    this.setState(prevState => ({
      frameIndex: prevState.frameIndex + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.updateFrameIndex(), 300);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  resetFrameIndex() {
    this.setState({ frameIndex: 1 });
  }

  componentDidUpdate() {
    this.animateCanvas();
  }

  animateCanvas() {
    let sprites;
    let numberOfFrames;

    switch (this.props.tamagotchi) {
      case "tamagotchi1":
        sprites = spritesheet1;
        numberOfFrames = 25;
        break;
      case "tamagotchi2":
        sprites = spritesheet2;
        numberOfFrames = 20;
        break;
      case "tamagotchi3":
        sprites = spritesheet3;
        numberOfFrames = 20;
        break;
    }

    const ctx = this.refs.canvas.getContext("2d");
    ctx.clearRect(0, 0, 600, 600);

    const img = new Image();
    img.src = sprites;
    img.onload = () => {
      const frameWidth = img.width / numberOfFrames;

      if (this.state.frameIndex >= numberOfFrames) {
        this.resetFrameIndex();
      }

      ctx.drawImage(
        img,
        this.state.frameIndex * frameWidth,
        0,
        frameWidth,
        img.height,
        0,
        0,
        frameWidth,
        img.height
      );
    };
  }

  render() {
    return (
      <div>
        <canvas className="spritecanvas" ref="canvas" />
      </div>
    );
  }
}
