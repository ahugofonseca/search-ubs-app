import React, { Component } from 'react'
import './Search.scss'
import { CardPanel, TextInput, Navbar, Icon } from 'react-materialize'

class SearchUbs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      latLng: ''
    }

    this.submit = this.submit.bind(this)
  }

  submit(e) {
    e.preventDefault()

    this.sendRequest(this.resetDataFields)
  }

  sendRequest(resetSearchField) {
    this.props.findUbs(this.state.latLng.value)
  }

  resetSearchField() {
    this.setState({
      latLng: ''
    })
  }

  render() {
    return (
      <nav className="black">
        <div className="nav-wrapper">
          <form onSubmit={this.submit}>
            <div className="input-field col">

              <TextInput
                id="search-ubs-by-latlng"
                icon="search"
                label="Busca"
                ref={input => this.state.latLng = input}
              />
            </div>
          </form>
        </div>
      </nav>
    )
  }
}

export default SearchUbs;
