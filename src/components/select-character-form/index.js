import React from "react";
import tama1 from "../../../public/tamagotchi1.png";
import tama2 from "../../../public/tamagotchi2.png";
import tama3 from "../../../public/tamagotchi3.png";

export class CharacterForm extends React.Component {
  render() {
    return (
      <div>
        <div className="start__message">
          <p className="choose">CHOOSE ONE</p>
        </div>
        <form onSubmit={this.props.handleSubmit}>
          <label htmlFor="tamagotchi1">
            <img src={tama1} />
          </label>
          <input
            type="radio"
            id="tamagotchi1"
            name="tamagotchi"
            value="tamagotchi1"
            checked={this.props.radioSelected === "tamagotchi1"}
            onChange={this.props.handleChange}
          />

          <label htmlFor="tamagotchi2">
            <img src={tama2} />
          </label>
          <input
            type="radio"
            id="tamagotchi2"
            name="tamagotchi"
            value="tamagotchi2"
            checked={this.props.radioSelected === "tamagotchi2"}
            onChange={this.props.handleChange}
          />

          <label htmlFor="tamagotchi3">
            <img src={tama3} />
          </label>
          <input
            type="radio"
            id="tamagotchi3"
            name="tamagotchi"
            value="tamagotchi3"
            checked={this.props.radioSelected === "tamagotchi3"}
            onChange={this.props.handleChange}
          />

          <button type="submit">ENTER</button>
        </form>
      </div>
    );
  }
}
