import React, { Component } from "react";
import "./Map.css"

import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
import "mapbox-gl/dist/mapbox-gl.css";

// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxlaXhiYWRpYSIsImEiOiJja20zYmI3emgyZzEzMm9vNng1dGE0ZHlnIn0.lns4HkC-kSmLr9YCZpiG3g";
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 2.154007,
      lat: 41.390205,
      zoom: 12,
    };
    this.mapContainer = React.createRef();
    
  }
  componentWillReceiveProps(props) {
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
      
    
        
    
      
          
      
    props.parties.forEach((party) => {
        let popup = new mapboxgl.Popup().setText(`${party.name}`).addTo(map);
        
      new mapboxgl.Marker({ color: "red" })
        .setLngLat([party.longitude, party.latitude])
        .addTo(map)
        .setPopup(popup);
    });
    
    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
  }
  render() {
    return (
      <div>
        <div ref={this.mapContainer} className="map-container" />
      </div>
    );
  }
}
export default Map;
