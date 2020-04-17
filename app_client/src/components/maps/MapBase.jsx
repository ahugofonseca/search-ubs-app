import React, { Component } from 'react';
import axios from 'axios';
import Boxes from '../ubs/Boxes';
import L from 'leaflet'
import { Map, TileLayer, Marker, Tooltip, Popup } from 'react-leaflet';
import './Maps.scss'

export const unselectedIcon = (index)=> {
  return(
    new L.DivIcon({
        className: 'my-div-icon',
        html: '<img class="marker-icon" src="/unselected-marker.png" height="75" />'+
              '<span class="marker-label">'+index+'</span>'
    })
  )
}

export const selectedIcon = (index) => {
  return (
    new L.DivIcon({
        className: 'my-div-icon',
        html: '<img class="marker-icon" src="/selected-marker.png" height="75" />'+
              '<span class="marker-label">'+index+'</span>'
    })
  )
}

class MapBase extends Component<{}, State> {
  constructor(props) {
    super(props)

    this.state = {
      ubs: {
        entries: []
      },
      lat: 51.5,
      lng: -0.1,
      zoom: 12
    }

    this.getData = this.getData.bind(this)
  }

  componentDidMount() {
    this.getUserGeolocation(this.getData)
  }

  getData(coordenates) {
    let url = '/api/v1/find_ubs?query='+coordenates
    console.log(url);

    axios.get(url)
      .then(response => {
        this.setState({
          ubs: response.data
        })

        console.log(response.data);
      })
      .catch(error =>
        console.error(error)
      )
  }

  getUserGeolocation(getData) {
    let geo = navigator.geolocation

    if (geo) {
      geo.getCurrentPosition((position) => {
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })

        getData([position.coords.latitude, position.coords.longitude])
      })
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng]

    return (
      <div>
        <Boxes ubsEntries={this.state.ubs.entries} ref="Boxes"/>

        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

            {this.state.ubs.entries.map((entry, index) => {
              return(
                <Marker position={[entry.geocode.lat, entry.geocode.long]} icon={unselectedIcon(index+1)}>
                  <Popup className="custom-popup">
                    <div className="popup-title">
                      <span><b> {entry.name} </b></span>
                    </div>

                    <div className="popup-text">
                      <span> {entry.address} - {entry.city} </span>
                    </div>
                  </Popup>
                </Marker>
              )
            })}

        </Map>
      </div>
    )
  }
}

export default MapBase;
