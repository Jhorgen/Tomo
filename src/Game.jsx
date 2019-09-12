import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import IntroPage from './components/Intro'
import Bar from './components/Bar'

var appStyle = {
  backgroundColor: 'lightcoral'
}

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hunger: 50,
      happiness: 50,
      health: 100,
      status: 'alive'

    };

    this.handleFeed = this.handleFeed.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleRest = this.handleRest.bind(this);
    this.updateHealth = this.updateHealth.bind(this);
    this.updateHappiness = this.updateHappiness.bind(this);
    this.updateHunger = this.updateHunger.bind(this);

  }

  componentDidMount() {
    this.healthUpdateTimer = setInterval(() => this.updateHealth(), 100);
    this.happinessUpdateTimer = setInterval(() => this.updateHappiness(), 100);
    this.hungerUpdateTimer = setInterval(() => this.updateHunger(), 100);

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
    if (this.state.health >= 0) {
      this.setState({health: this.state.health - 1})
      console.log(this.state);
      console.log("hello world");
    } if (this.state.health < 0) {
      this.setState({status: this.state.status = 'dead'})
      console.log(this.state);
    this.componentWillUnmount();
  }
  }

  updateHappiness() {
    if (this.state.happiness > 0) {
      this.setState({happiness: this.state.happiness - 1})
    }
  }

  updateHunger() {
    if (this.state.hunger > 0) {
      this.setState({hunger: this.state.hunger - 1})
  }
}

  render() {

    return (

      <div style={appStyle}>


            <div className="Feed">
          <h4>Hunger: {this.state.hunger}</h4>
          <button onClick={this.handleFeed}>Feed</button>
          <meter low={5} value={this.state.hunger + ''} min='0' max='50'></meter>
        </div>

        <div className="Play">
          <h4>Happiness: {this.state.happiness}</h4>
          <button onClick={this.handlePlay}>Play</button>
          <meter low={5} value={this.state.happiness + ''} min='0' max='50'></meter>
        </div>

        <div className="Rest">
          <h4>Health: {this.state.health}</h4>
          <button onClick={this.handleRest}>Rest</button>
          <meter low={5} value={this.state.health + ''} min='0' max='100'></meter>
        </div>

        <div className="Rest">
          <h4>Status: {this.state.status}</h4>
        </div>




      </div>

    );
  }
}

export default Game;
