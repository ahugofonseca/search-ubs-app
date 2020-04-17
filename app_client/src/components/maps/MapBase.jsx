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
    this.flyToCoordinates = this.flyToCoordinates.bind(this)
  }

  componentDidMount() {
    this.getUserGeolocation(this.getData)
  }

  flyToCoordinates(coordinates) {
    let position

    if (coordinates instanceof Array) {
      position = L.latLng(parseFloat(coordinates[0]), parseFloat(coordinates[1]))
    } else {
      let splited = coordinates.split(', ')

      if (splited.lenght != 2) { splited = coordinates.split(',') }

      position = L.latLng(parseFloat(splited[0]), parseFloat(splited[1]))
    }

    // this.state.map.leafletElement.flyTo(position, 12)
    this.setState({
      lat: position.lat,
      lng: position.lng
    })
  }

  getData(coordinates, page = 1) {
    console.log(page);
    this.flyToCoordinates(coordinates)

    let url = '/api/v1/find_ubs?query='+coordinates+'&page='+page

    axios.get(url)
      .then(response => {
        this.setState({
          ubs: response.data
        })
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
          pagination={this.state.ubs}
          lastCoordinates={position}
          findUbs={this.getData}
          activateMarker={this.activateMarker}
          inactivateMarker={this.inactivateMarker}
        />

        <Map center={position} zoom={this.state.zoom} ref={(ref) => { this.state.map = ref; }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

            {this.state.ubs.entries.map((entry, index) => {
              return(
                <div key={entry.id}>
                  <Marker position={[entry.geocode.lat, entry.geocode.long]} icon={unselectedIcon(index+1)} key={entry.id}>
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
