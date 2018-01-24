import React from "react";
import sprites from "../../../public/sprites.png";

export default class Canvas extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext("2d");
    const img = new Image();
    img.src = sprites;
    img.onload = () => {
      this.animateSprite(ctx, img, 25);
    };
  }

  animateSprite(ctx, img, numberOfFrames) {
    const frameWidth = img.width / numberOfFrames;
    let frameIndex = 2;
    ctx.drawImage(
      img,
      frameIndex * frameWidth,
      0,
      frameWidth,
      img.height,
      0,
      0,
      frameWidth,
      img.height
    );
  }

  render() {
    return <canvas ref="canvas" width={300} height={300} />;
  }
}
