import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import InfoWindowEx from "./InfoWindowEx";
import MapStyle from '../../home/containers/MapStyle';
import { fsc } from '../../../helper/fontColorHelper';
import { withMedia } from 'react-media-query-hoc';

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        };
    }

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props.place_,
            activeMarker: marker,
            showingInfoWindow: true
        });
    };

    infoWindowClose = () => {
        this.setState({
            showingInfoWindow: false
        });
    }

    showDetails = place => {
        alert(place);
    };

    render() {
        const { media } = this.props
        const stores = [
            {
                name: "Mandalay",
                title: "Mandalay",
                lat: 21.954510,
                lng: 96.093292,
                id: 1
            },
            {
                name: "Bankok",
                title: "Bankok",
                lat: 13.736717,
                lng: 100.523186,
                id: 2
            },
            {
                name: "Singapore",
                title: "Singapore",
                lat: 1.351616,
                lng: 103.808053,
                id: 3
            }
        ];
        return (

            <div style={{ height: '385px', position: 'relative', bottom: '0', paddingBottom: '40%', paddingRight: '10', paddingLeft: '0%', overflow: 'hidden', margin: '0px' }}>

                <Map
                    onClick={this.infoWindowClose}
                    styles={MapStyle}
                    google={this.props.google}
                    className={"map"}
                    zoom={3}
                    initialCenter={{
                        lat: 13.736717,
                        lng: 100.523186,
                    }}
                >
                    {stores.map((place, i) => {
                        return (
                            <Marker
                                onClick={this.onMarkerClick}
                                key={place.id}
                                place_={place}
                                position={{ lat: place.lat, lng: place.lng }}
                            />
                        );
                    })}
                    <InfoWindowEx
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                    >
                        <div style={{ fontSize: fsc(media, 16) }}>
                            <div>{this.state.selectedPlace.name}</div>
                            <button
                            className="btn btn-sm btn-primary"
                                type="button"
                                onClick={this.showDetails.bind(this, this.state.selectedPlace)}
                            >
                                Show details
                            </button>
                        </div>
                    </InfoWindowEx>
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDjz91l2P3tnwy9phAWvqEU_V4VPEviW-I"
})(withMedia(MapContainer));
