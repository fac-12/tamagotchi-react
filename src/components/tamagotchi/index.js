import React from "react";
import HealthBar from "./HealthBar";
import SpriteCanvas from "./SpriteCanvas";
import tama1 from "../../../public/tamagotchi1trans.png";
import "./style.css";

export class Tamagotchi extends React.Component {
  render() {
    return (
      <div>
        <HealthBar />
        <SpriteCanvas tamagotchi={this.props.radioSelected} />
      </div>
    );
  }
}
