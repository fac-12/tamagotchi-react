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
      <div className="box">
        <div className="egg">
          <div className="screen">
            {this.renderInside()}
            <div className="shadowline__l" />
            <div className="shadowline__inside__r" />
            <div className="shadowline__r" />
            <div className="shadowline__b" />
            <div className="screen__top" />
            <div className="screen__bottom" />
          </div>
          <div className="screen_dynamic" />

          <div className="base-shadow" />
          <div className="egg__top" />
          <div className="egg__highlight" />

          <div className="button__container">
            <div className="button__left" />
            <div className="button__center" />
            <div className="button__right" />
          </div>
        </div>
      </div>
    );
  }

  renderInside() {
    if (this.state.showForm) {
      return (
        <div className="character__form">
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
