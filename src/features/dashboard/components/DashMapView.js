import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import InfoWindowEx from "./InfoWindowEx";
import MapStyle from '../../home/containers/MapStyle';
import { fsc } from '../../../helper/fontColorHelper';
import { withMedia } from 'react-media-query-hoc';
import SolarPanelIcon from '../../../assets/images/solarPanel.png'

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
        const { media, selectedSite } = this.props      
        const stores = [

            {
                name: "Taiwan",
                title: "Taiwan",
                lat: selectedSite ? selectedSite.latitude : 23.667567,
                lng: selectedSite ? selectedSite.longitude : 120.87866,
                id: 1
            }
        ];
        return (

            <div style={{ height: 385, position: 'relative', bottom: '0', paddingBottom: '40%', paddingRight: '10', paddingLeft: '0%', overflow: 'hidden', margin: '0px' }}>

                <Map
                    onClick={this.infoWindowClose}
                    styles={MapStyle}
                    google={this.props.google}
                    disableDefaultUI={true}
                    zoomControl={true}
                    zoom={15}
                    initialCenter={{
                        lat: stores[0].lat,
                        lng: stores[0].lng,
                    }}
                >
                    {stores.map((place, i) => {
                        return (
                            <Marker
                                icon={SolarPanelIcon}
                                onClick={this.onMarkerClick}
                                key={place.id}
                                place_={place}
                                position={{ lat: place.lat, lng: place.lng }}
                            />
                        );
                    })}
                    {/* <InfoWindowEx
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                    >
                        <div style={{ fontSize: fsc(media, 12) }}>
                            <div>{this.state.selectedPlace.name}</div>
                            <div style={{ color: 'blue' }}>Organic Farmars' Organization </div>
                            <div className='py-1'>
                                <i className="fa fa-circle" style={{ fontSize: 8, color: 'green' }} /> Online</div>
                            <div>Power Output : 147.45kW</div>
                            <div className='py-0'>Capacity : 147.45kW</div>
                        </div>
                    </InfoWindowEx> */}
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAcWK8WHabUh0BMDZuIIPo0qfWXWarBzoo"
})(withMedia(MapContainer));
