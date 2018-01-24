import React from "react";
import tama1 from "../../../public/tamagotchi1trans.png";
import "./style.css";

export class Tamagotchi extends React.Component {
  render() {
    const tama = this.props.radioSelect;
    if (tama === tamagotchi1) {
    }
    return <img src={tama1} className="sprite" />;
  }
}
