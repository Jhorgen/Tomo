import React, { Component } from 'react';
import { Image } from 'react-bootstrap'
import introLogo from '../assets/intro.png'
import { Link } from 'react-router-dom';


class IntroPage extends Component {
  constructor(props) {
    super(props)
      this.state= {
        tomoName: '',
        nameInput: '',
        createNameButton: '',
        tomoName: '',
        tomoForm: true,
        tomoNameProp: ''
      }
  }

  handleNameCreate = (e) => {
    this.setState({nameInput: <input type='text' name='tomoName' onChange={this.handleNameInput} /> })
  }

  submitName = (e) => {
    e.preventDefault()
    this.setState({tomoName: this.state.nameInput, tomoForm: false, tomoNameProp: this.state.tomoName})
    console.log(this.state.tomoName);
  }

  handleNameInput = (e) => {
    this.setState({[e.target.name]: e.target.value});
    if(this.state.tomoName.length >= 1){
      this.setState({createNameButton: <button>Create tomo</button>})
    }
  }

  render() {
const { tomoForm } = this.state;
    return(
      <div>
        <div className='landing'>
          <Link to={{
                  pathname: "/tomo",
                  state: { tomoName: this.state.tomoNameProp }
                }}>
            <img src={introLogo} rounded />
          </Link>
        </div>
        <div className='tomo'>
          <h1>Tomo</h1>
          <h3 onClick={() => this.handleNameCreate()}>Name your Tomo</h3>
        { tomoForm
      ? <form onSubmit={(e) => {
            this.submitName(e);
            }}>
          {this.state.nameInput}
          {this.state.createNameButton}
        </form>
        : null
        }
        </div>
      </div>
    );
  }
}

export default IntroPage;
