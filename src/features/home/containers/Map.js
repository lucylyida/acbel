import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import MapStyle from './MapStyle';

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        stores: [{ lat: 21.498556299, lng: 96.141844169 },
        { name: "Myanmar", latitude: 21.359423, longitude: 96.021071, site: "Organic Farmer's Association", PowerOutput: "320kW", online: "320kw" },
        { name: "Taung Gyi", latitude: 21.20521928, longitude: 96.988426208, site: "Natural Farmer's Association", PowerOutput: "320kW", online: "320kw" },
        { name: "SueLay Kone", latitude: 21.6307081, longitude: 96.1434325, site: "Solar Association", PowerOutput: "500kW", online: "500kW" },
        ]
    };


    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,

        });


    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    
    infoClick = () => {
        alert('OkoKOKOK')
    }

    render() {
        const icon = {
            anchor: new this.props.google.maps.Point(0, 0),
            url: 'data:image/svg+xml;utf-8, \<svg width="80" height="90" xmlns="http://www.w3.org/2000/svg" version="1.1">\
            <circle id="c1" cx="50" cy="35" r="10" fill="blue">\
                <animate id="c1Animation1" attributeName="r" attributeType="XML" begin="0s" dur="3000ms" from="10" to="20" repeatCount="indefinite" fill="gradient"></animate>\
                <animate id="c1Animation1" attributeName="r" attributeType="XML" begin="3s" dur="3000ms" values="20;10;20" repeatCount="indefinite" fill="red"></animate>\
            </circle>\
            </svg>',
            strokeWeight: 0,
            scale: 1
        }

        return (

            <div style={{ height: '100%', position: 'relative', bottom: '0', paddingBottom: '40%', paddingRight: '10', paddingLeft: '0%', overflow: 'hidden', margin: '0px' }}>
                <Map
                    initialCenter={{ lat: 21.359423, lng: 96.021071 }}
                    zoom={9}
                    styles={MapStyle}
                    google={this.props.google}
                    onClick={this.onMapClicked}>
                    {
                        this.state.stores.map((store, index) => (
                            <Marker
                                key={index} id={index}
                                position={{
                                    lat: store.latitude,
                                    lng: store.longitude
                                }}
                                icon={icon}
                                onClick={this.onMarkerClick}
                                name={store.name} />
                        ))
                    }
                    {
                        this.state.stores.map((store, index) => (
                            <InfoWindow
                                maxWidth={350}
                                marker={this.state.activeMarker}
                                visible={this.state.showingInfoWindow}
                            >
                                <div>
                                    <h4>{this.state.selectedPlace.name}</h4>
                                    <h5 style={{ color: 'blue' }}>Organic Farmer's Association</h5>
                                    <button onClick={this.infoClick}>Online</button>
                                    <div> <span>Power Output:: 147.45kW</span></div>
                                    <div><span>Online:: 320kW</span></div>
                                </div>
                            </InfoWindow>
                        ))}
                </Map>
            </div>
        )
    }
}


export default GoogleApiWrapper({
    apiKey: ('AIzaSyDjz91l2P3tnwy9phAWvqEU_V4VPEviW-I')
})(MapContainer)
