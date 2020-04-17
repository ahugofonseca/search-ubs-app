import React, { Component } from 'react'
import { Row, Col } from 'react-materialize';
import SearchUbs from './Search';
import Box from './Box';
import Paginator from './Paginator';
import './Boxes.scss'

class Boxes extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container-box">
        <div className="ubs-boxes" id="style-1">
          <Row>
            <Col m={12}>
              <SearchUbs findUbs={this.props.findUbs} />
            </Col>
            {this.props.ubsEntries.map((entry, index) => (
              <Col m={12} key={entry.id+'_'+index}>
                <Box
                  index={index}
                  ubs={entry}
                  activateMarker={this.props.activateMarker}
                  inactivateMarker={this.props.inactivateMarker}
                />
              </Col>
            ))}
              <Col m={12}>
                <Paginator
                  pagination={this.props.pagination}
                  lastCoordinates={this.props.lastCoordinates}
                  findUbs={this.props.findUbs}
                />
              </Col>
          </Row>
        </div>
      </div>
    )
  }
}
export default Boxes;
