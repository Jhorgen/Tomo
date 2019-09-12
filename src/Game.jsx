import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import IntroPage from './components/Intro'

var appStyle = {
  backgroundColor: 'coral'
}

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hunger: 50,
      happiness: 50,
      health: 50

    };

    this.handleFeed = this.handleFeed.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleRest = this.handleRest.bind(this);
    this.updateHealth = this.updateHealth.bind(this);
    this.updateHappiness = this.updateHappiness.bind(this);
    this.updateHunger = this.updateHunger.bind(this);

  }

  componentDidMount() {
    this.healthUpdateTimer = setInterval(() => this.updateHealth(), 50);
    this.happinessUpdateTimer = setInterval(() => this.updateHappiness(), 50);
    this.hungerUpdateTimer = setInterval(() => this.updateHunger(), 50);

  }

  componentWillUnmount() {
    clearInterval(this.healthUpdateTimer);
    clearInterval(this.happinessUpdateTimer);
    clearInterval(this.hungerUpdateTimer);
  }

  handleFeed() {
    this.setState({hunger: this.state.hunger + 5});
  }


  handlePlay() {
    this.setState({happiness: this.state.happiness + 1});
  }

  handleRest() {
    this.setState({health: this.state.health + 15});
  }



  updateHealth() {
    if (this.state.health > 50) {
      this.setState({health: this.state.health - 1})
      console.log(this.state);
    }
  }

  updateHappiness() {
    if (this.state.happiness >= 50) {
      this.setState({health: this.state.happiness - 1})
    }
  }

  updateHunger() {
    if (this.state.hunger > 20) {
      this.setState({health: this.state.hunger - 1})
  }
}

  render() {

    return (

      <div style={appStyle}>

        <div className="Feed">
          <h4>Hunger: {this.state.hunger}</h4>
          <button onClick={this.handleFeed}>Feed</button>
        </div>

        <div className="Play">
          <h4>happiness: {this.state.happiness}</h4>
          <button onClick={this.handlePlay}>Play</button>
        </div>

        <div className="Rest">
          <h4>health: {this.state.health}</h4>
          <button onClick={this.handleRest}>Rest</button>
        </div>

      </div>

    );
  }
}

export default Game;
