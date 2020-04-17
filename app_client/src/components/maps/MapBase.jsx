import React, { Component } from 'react';
import Boxes from '../ubs/Boxes';
import L from 'leaflet'
import { Map, TileLayer, Marker, Tooltip, Popup } from 'react-leaflet';
import './Maps.scss'

export const unselectedIcon = new L.DivIcon({
    className: 'my-div-icon',
    html: '<img class="marker-icon" src="/unselected-marker.png" height="75" />'+
          '<span class="marker-label">1</span>'
})

export const selectedPoint = new L.DivIcon({
    className: 'my-div-icon',
    html: '<img class="marker-icon" src="/selected-marker.png" height="75" />'+
          '<span class="marker-label">1</span>'
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

          <Marker position={position} icon={unselectedIcon} alt="1">
            <Popup className="custom-popup">
              <div className="popup-title">
                <span><b> UBS Jardim Europa </b></span>
              </div>

              <div className="popup-text">
                <span> Rua Pascal, 1382 - Jardim Europa - SP </span>
              </div>
            </Popup>
          </Marker>
        </Map>
      </div>
    )
  }
}

export default MapBase;
