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
          {this.props.index + 1}. UBS Jardim Europa
        </div>

        <div className="card-text">
          <p>Rua Pascal, 1382 - Jardim Europa - SP</p>

          <p className="ma-0"><b>Telefone</b></p>
          <p className="ma-0">011 4157-8945</p>
        </div>
      </CardPanel>
    )
  }
}

export default Box;
