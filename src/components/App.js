import React from "react";
import { CharacterForm } from "./select-character-form";
import { Tamagotchi } from "./tamagotchi";

export default class App extends React.Component {
  state = {
    radioSelected: "tamagotchi1",
    showForm: true
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({ radioSelected: value });
  };

  handleSubmit = () => {
    this.setState({ showForm: false });
  };

  render() {
    if (this.state.showForm) {
      return (
        <div>
          <CharacterForm
            handleChange={this.handleChange.bind(this)}
            radioSelected={this.state.radioSelected}
            handleSubmit={this.handleSubmit.bind(this)}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Tamagotchi radioSelected={this.state.radioSelected} />
        </div>
      );
    }
  }
}
