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
      health: 100

    };

    this.handleFeed = this.handleFeed.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleRest = this.handleRest.bind(this);

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


  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() => {

    if (this.state.health > 50) {
      this.setState({health: this.state.health - 1})

    } else if (this.state.health <= 50 && this.state.happiness > 20) {
      this.setState({happiness: this.state.happiness - 1})

    } else if (this.state.hunger > 0) {
      this.setState({hunger: this.state.hunger - 1})

    }

  }, 5);
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
