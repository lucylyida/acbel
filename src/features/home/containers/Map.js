import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';
// import MapStyle from './MapStyle';



export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

            stores: [{ lat: 21.498556299, lng: 96.141844169 },
            { name: "Myanmar", latitude: 21.359423, longitude: 96.021071 },
            { name: "Myanmar", latitude: 21.20521928, longitude: 96.988426208 },
            { name: "Myanmar", latitude: 21.6307081, longitude: 96.1434325 },
            ]
        }
    }


    _onMarkerClick = () => {
        alert('clicked me!')
    }


    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
            const icon = {
                anchor: new this.props.google.maps.Point(0, 0),
                url: 'data:image/svg+xml;utf-8, \<svg width="80" height="90" xmlns="http://www.w3.org/2000/svg" version="1.1">\
                <circle id="c1" cx="50" cy="35" r="10" fill="green">\
                    <animate id="c1Animation1" attributeName="r" attributeType="XML" begin="0s" dur="3000ms" from="10" to="20" repeatCount="indefinite" fill="blue"></animate>\
                    <animate id="c1Animation1" attributeName="r" attributeType="XML" begin="3s" dur="3000ms" values="20;10;20" repeatCount="indefinite" fill="red"></animate>\
                </circle>\
                </svg>',
                strokeWeight: 0,
                scale: 1
            }
            return <Marker
                icon={icon}
                key={index} id={index} position={{
                    lat: store.latitude,
                    lng: store.longitude
                }}
                onClick={() => this._onMarkerClick()} >
            </Marker>

        })
    }

    render() {

        return (
            <div>
                <Map
                    // styles={MapStyle}
                    google={this.props.google}
                    zoom={8}
                    initialCenter={{ lat: 21.444, lng: 96.176 }} >
                    {this.displayMarkers()}
                </Map>
            </div>
        );
    }
}
export default GoogleApiWrapper({

    apiKey: ('AIzaSyDjz91l2P3tnwy9phAWvqEU_V4VPEviW-I')

})(MapContainer)

