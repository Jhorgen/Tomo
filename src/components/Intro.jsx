import React, { Component } from 'react';
import { Image } from 'react-bootstrap'
import introLogo from '../assets/intro.png'
import { Link } from 'react-router-dom';
import { Row, Button } from 'reactstrap';


class IntroPage extends Component {
  constructor(props) {
    super(props)
      this.state= {
        tomoName: '',
        nameInput: '',
        createNameButton: '',
        tomoName: '',
        tomoForm: true,
        tomoNameProp: '',
        createDisplay: '',
        linkDisplay: 'none'
      }
  }

  handleNameCreate = (e) => {
    this.setState({nameInput: <div><Row><h3 style={{color: 'black'}}>Enter a name for your tomo</h3></Row><Row><input type='text' name='tomoName' autocomplete="" onChange={this.handleNameInput} /></Row></div> })
    this.setState({createDisplay: 'none'})
  }

  submitName = (e) => {
    e.preventDefault()
    this.setState({tomoName: this.state.nameInput, tomoNameProp: this.state.tomoName})
    setTimeout( () => {
      this.setState({linkDisplay: '', tomoForm: false})
  }, 150);
  }

  handleNameInput = (e) => {
    this.setState({[e.target.name]: e.target.value});
    if(this.state.tomoName.length >= 1){
      this.setState({createNameButton: <button>Start</button>})
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
          <h3 style={{display: this.state.createDisplay}} className="create-tomo-button" onClick={() => this.handleNameCreate()}>Create your tomo</h3>
        { tomoForm
      ? <form autocomplete="" onSubmit={(e) => {
            this.submitName(e);
            }}>
          <Row>{this.state.nameInput}</Row>
          <Row className="justify-content-center">{this.state.createNameButton}</Row>
        </form>
        : null
        }
        </div>
        <div style={{display: this.state.linkDisplay, textAlign: 'center'}}>
          <Link  to={{
              pathname: "/tomo",
              state: { tomoName: this.state.tomoNameProp }
            }}><Button className="mt-3">Start</Button></Link>
          </div>
      </div>
    );
  }
}

export default IntroPage;
