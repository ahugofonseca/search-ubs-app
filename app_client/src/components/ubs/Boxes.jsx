import React, { Component } from 'react'
import { Row, Col } from 'react-materialize';
import Box from './Box';
import SearchUbs from './Search';
import './Boxes.scss'

class Boxes extends Component {
  constructor(props) {
    super(props)

    this.state = {
      boxesCount: [0, 1, 2, 3, 4]
    }
  }

  render() {
    return (
      <div className="container-box">
        <div className="ubs-boxes" id="style-1">
          <Row>
            <Col m={12}>
              <SearchUbs />
            </Col>
            {this.state.boxesCount.map((field, index) => (
              <Col m={12}>
                <Box index={index} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    )
  }
}
export default Boxes;
