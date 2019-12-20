import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import IntroPage from './components/Intro'
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

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hunger: 50,
      happiness: 50,
      health: 100,
      status: 'Alive',
      level: 0
    };
  }

  componentDidMount() {
    this.handleLevelTimer = setInterval(() => this.handleLevel(), 10000)
    this.healthUpdateTimer = setInterval(() => this.updateHealth(), 2000);
    this.happinessUpdateTimer = setInterval(() => this.updateHappiness(), 2500);
    this.hungerUpdateTimer = setInterval(() => this.updateHunger(), 2500);
  }

  componentWillUnmount() {
    clearInterval(this.healthUpdateTimer);
    clearInterval(this.happinessUpdateTimer);
    clearInterval(this.hungerUpdateTimer);
  }

  handleLevel = () => {
   this.setState({level: this.state.level + 1})
   console.log('test');
   console.log(this.state.level);
  }

  handleFeed = () => {
    if(this.state.hunger < 35) {
    this.setState({hunger: this.state.hunger + 5});
  } else if(this.state.hunger > 45) {
    this.setState({hunger: 50})
  }
  }


  handlePlay = () => {
    if(this.state.happiness < 35) {
    this.setState({happiness: this.state.happiness + 1});
  } else if(this.state.happiness > 45) {
    this.setState({happiness: 50});
  }
  }

  handleRest = () => {
    if(this.state.health < 85) {
    this.setState({health: this.state.health + 15});
  } else if(this.state.health > 85) {
    this.setState({health: 100});
  }
  }

  updateHealth = () => {
    if (this.state.health >= 0) {
      this.setState({health: this.state.health - 1})
    } if (this.state.health < 0) {
      this.setState({status: this.state.status = 'Dead'})
      this.componentWillUnmount();
    }
  }

  updateHappiness = () => {
    if (this.state.happiness > 0) {
      this.setState({happiness: this.state.happiness - 1})
    }
  }

  updateHunger = () => {
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
        <div style={{ background: 'coral', border: '.4px solid black', borderRadius: '5px'}}>
        <h1 className='header' style={{marginTop: '.5rem'}}>{this.props.location.state.tomoName}</h1>
        <h3 style={{textAlign: 'center'}}>Level: {this.state.level}</h3>
        </div>
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
