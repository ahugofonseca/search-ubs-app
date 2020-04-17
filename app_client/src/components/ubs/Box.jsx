import React, { Component } from 'react'
import './Box.scss'
import { CardPanel } from 'react-materialize';

class Box extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ubsName: '',
      ubsFullAddress: '',
      ubsPhone: '',
    }
  }

  render() {
    return (
      <CardPanel className="white mb-0">
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
