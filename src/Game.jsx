import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import IntroPage from './components/Intro'
import Bar from './components/Bar'
import alive from './assets/alive.png'
import dead from './assets/dead.png'

var appStyle = {
  backgroundColor: 'lightcoral'
}

var style= {
  height: '300px',
  width: '300px'
}

var imgStyle = {
  textAlign: 'center'
}


var stats = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '70px'
}

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hunger: 50,
      happiness: 50,
      health: 100,
      status: 'Alive'
    };
    this.handleFeed = this.handleFeed.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleRest = this.handleRest.bind(this);
    this.updateHealth = this.updateHealth.bind(this);
    this.updateHappiness = this.updateHappiness.bind(this);
    this.updateHunger = this.updateHunger.bind(this);
  }

  componentDidMount() {
    this.healthUpdateTimer = setInterval(() => this.updateHealth(), 20);
    this.happinessUpdateTimer = setInterval(() => this.updateHappiness(), 1000);
    this.hungerUpdateTimer = setInterval(() => this.updateHunger(), 1000);

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
      this.setState({status: this.state.status = 'Dead'})
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

    let imageToRender = null;
    if (this.state.status === 'Alive') {
      imageToRender = <img style={style} src={alive} alt='tamagotchi'></img>
    }

    if (this.state.status === 'Dead') {
      imageToRender = <img style={style} src={dead} alt='tamagotchi'></img>
    }

    return (
      <div style={appStyle}>

        <h1 className='header'>Test</h1>
        <div style={stats}>

          <div className="Rest">
            <h4>Health: {this.state.health}</h4>
            <button onClick={this.handleRest}>Rest</button>
            <meter low={5} value={this.state.health + ''} min='0' low='50' max='100'></meter>
          </div>

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


        </div>

        <div style={imgStyle}>
          <h1></h1>
        {imageToRender}
      </div>

        <div className="Status">
          <h1 className='statusSymbol'>Status: {this.state.status}</h1>
        </div>

      </div>

    );
  }
}

export default Game;
