import React, { Component } from 'react';
import Boxes from '../ubs/Boxes';
import L from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './Maps.scss'

export const unselectedIcon = new L.Icon({
  iconUrl: '/unselected-marker.png',
  iconSize: [50, 65]
})

export const selectedPoint = new L.Icon({
  iconUrl: '/selected-marker.png',
  iconSize: [50, 65]
})

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
        <Boxes />

        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={position} icon={unselectedIcon}>
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
