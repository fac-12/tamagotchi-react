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
    return (
      <div class="box">
        <div class="egg">
          <div class="screen">
            {this.renderInside()}
            <div class="shadowline__l" />
            <div class="shadowline__inside__r" />
            <div class="shadowline__r" />
            <div class="shadowline__b" />
            <div class="screen__top" />
            <div class="screen__bottom" />
          </div>

          <div class="base-shadow" />
          <div class="egg__top" />
          <div class="egg__highlight" />

          <div class="button__container">
            <div class="button__left" />
            <div class="button__center" />
            <div class="button__right" />
          </div>
        </div>
      </div>
    );
  }

  renderInside() {
    console.log("render inside called");
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
