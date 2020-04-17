import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

class MapBase extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lat: -23.5873460769646,
      lng: -46.6855430603014,
      zoom: 13,
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng]

    return (
      <div>
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
      </div>
    )
  }
}

export default MapBase;
