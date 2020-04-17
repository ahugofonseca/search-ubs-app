import React, { Component } from 'react';
import axios from 'axios';
import Boxes from '../ubs/Boxes';
import L from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
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
      lat: -23.5505199,
      lng: -46.6333094,
      zoom: 12,
      map: null
    }

    this.getData = this.getData.bind(this)
    this.activateMarker = this.activateMarker.bind(this)
    this.inactivateMarker = this.inactivateMarker.bind(this)
    this.toggleMarkerStatus = this.toggleMarkerStatus.bind(this)
  }

  componentDidMount() {
    this.getUserGeolocation(this.getData)
  }

  getData(coordenates) {
    let url = '/api/v1/find_ubs?query='+coordenates

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

  toggleMarkerStatus(geocode, index, action) {
    this.state.map.leafletElement.eachLayer(function(layer) {

      if (layer instanceof L.Marker) {
        let latitude = layer.getLatLng().lat
        let longitude = layer.getLatLng().lng

        if (latitude == geocode.lat && longitude == geocode.long) {
          layer.setIcon(action(index))
        }
      }

    })
  }

  activateMarker(geocode, index) {
    this.toggleMarkerStatus(geocode, index, selectedIcon)
  }

  inactivateMarker(geocode, index) {
    this.toggleMarkerStatus(geocode, index, unselectedIcon)
  }

  render() {
    const position = [this.state.lat, this.state.lng]

    return (
      <div>
        <Boxes
          ubsEntries={this.state.ubs.entries}
          activateMarker={this.activateMarker}
          inactivateMarker={this.inactivateMarker}
        />

        <Map center={position} zoom={this.state.zoom} ref={(ref) => { this.state.map = ref; }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

            {this.state.ubs.entries.map((entry, index) => {
              return(
                <div id={index+1}>
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
                </div>
              )
            })}

        </Map>
      </div>
    )
  }
}

export default MapBase;
