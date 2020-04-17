import React, { Component } from 'react'
import './Box.scss'
import { CardPanel } from 'react-materialize';

class Box extends Component {
  constructor(props) {
    super(props)

    this.handleOn = this.handleOn.bind(this);
    this.handleOff = this.handleOff.bind(this);
  }

  handleOn() {
    let element = document.getElementsByClassName('card-title')[this.props.index]
    element.style.textDecoration = 'underline';

    this.props.activateMarker(
      this.props.ubs.geocode, this.props.index + 1
    )
  }

  handleOff() {
    let element = document.getElementsByClassName('card-title')[this.props.index]
    element.style.textDecoration = 'none';

    this.props.inactivateMarker(
      this.props.ubs.geocode, this.props.index + 1
    )
  }

  render() {
    return (
      <CardPanel className="white mb-0" onMouseOver={this.handleOn} onMouseOut={this.handleOff}>
        <div className="card-title">
          {this.props.index + 1}. {this.props.ubs.name}
        </div>

        <div className="card-text">
          <p> {this.props.ubs.address} - {this.props.ubs.city} </p>

          <p className="ma-0"><b>Telefone</b></p>
          <p className="ma-0"> {this.props.ubs.phone} </p>
        </div>
      </CardPanel>
    )
  }
}

export default Box;
