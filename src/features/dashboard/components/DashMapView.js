import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import MapStyle from '../../home/containers/MapStyle';
import SolarPanelIcon from '../../../assets/icons/solarpanel_icn';
export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };


    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    render() {
        // var icon = {

        //     path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
        //     fillColor: '#FF0000',
        //     fillOpacity: .6,
        //     anchor: new this.props.google.maps.Point(0, 0),
        //     strokeWeight: 0,
        //     scale: 1
        // }

        const icon = {
            anchor: new this.props.google.maps.Point(0, 0),
            url: 'data:image/svg+xml;utf-8, \<svg width="80" height="90" xmlns="http://www.w3.org/2000/svg" version="1.1">\
            <circle id="c1" cx="50" cy="35" r="10" fill="yellow">\
                <animate id="c1Animation1" attributeName="r" attributeType="XML" begin="0s" dur="3000ms" from="10" to="20" repeatCount="indefinite" fill="gradient"></animate>\
                <animate id="c1Animation1" attributeName="r" attributeType="XML" begin="3s" dur="3000ms" values="20;10;20" repeatCount="indefinite" fill="red"></animate>\
            </circle>\
            </svg>',
            strokeWeight: 0,
            scale: 1
        }
        return (

            <div className="" style={{ height: '375px', position: 'relative', bottom: '0', paddingRight: '10', paddingLeft: '0%', overflow: 'hidden', margin: '0px' }}>
                <Map
                    style={{ height: '100%', width: '100%' }}
                    zoom={9}
                    google={this.props.google}
                    onClick={this.onMapClicked}>
                    <Marker
                        icon={icon}
                        onClick={this.onMarkerClick}
                        name={'Current location'} />

                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            <h5>{this.state.selectedPlace.name}</h5>
                            <span>Online</span>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        )
    }
}


export default GoogleApiWrapper({
    apiKey: ('AIzaSyDjz91l2P3tnwy9phAWvqEU_V4VPEviW-I')
})(MapContainer)