import React, { Component } from 'react'
import './Search.scss'
import { CardPanel, TextInput, Navbar, Icon } from 'react-materialize'

class SearchUbs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ubsName: 'UBS Jardim Europa'
    }
  }

  render() {
    return (
      <nav class="black">
        <div class="nav-wrapper">
          <form>
            <div class="input-field col">

              <TextInput
                id="search-ubs-by-latlng"
                icon="search"
                label="Busca"
              />
            </div>
          </form>
        </div>
      </nav>
    )
  }
}

export default SearchUbs;
