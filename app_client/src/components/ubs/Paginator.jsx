import React, { Component } from 'react';
import { Pagination, Icon } from 'react-materialize';
import './Paginator.scss'

class Paginator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activePage: 1
    }

    this.sendRequest = this.sendRequest.bind(this)
  }

  sendRequest(e) {
    this.props.findUbs(this.props.lastCoordinates, e)

    this.setState({
      activePage: e
    })
  }

  getLimitPages() {
    let calc = Math.ceil(this.props.pagination.total_entries/this.props.pagination.per_page)

    if (calc > 4) {
      return 4
    } else {
      return calc
    }
  }

  render() {
    return (
      <div className="black center">
        <Pagination
          onSelect={e => this.sendRequest(e)}
          activePage={this.state.activePage}
          items={this.props.pagination.total_entries}
          maxButtons={this.getLimitPages()}
          leftBtn={<Icon>chevron_left</Icon>}
          rightBtn={<Icon>chevron_right</Icon>}
        />
    </div>
    )
  }
}

export default Paginator;

// current_page
// per_page
// total_entries
