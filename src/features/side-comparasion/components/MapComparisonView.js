import React, { Component } from "react"
import { withMedia } from 'react-media-query-hoc'
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import MapStyle from '../../home/containers/MapStyle'
import SolarPanelIcon from '../../../assets/images/solarPanel.png'

export class MapComprisonView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        };
    }
    render() {
        const { media } = this.props
        const stores = [

            {
                name: "Taiwan",
                title: "Taiwan",
                lat: 23.69781,
                lng: 120.960515,
                id: 1
            },
            {
                name: "Taipie",
                title: "Taipie",
                lat: 25.03335,
                lng: 121.56646730,
                id: 3,
            },
            
        ];
        return (

            <div style={{ height: '500px', position: 'relative', bottom: '0', paddingBottom: media.mobile ? "30%" : '58%', paddingRight: '10', paddingLeft: '0%', overflow: 'hidden', margin: '0px' }}>

                <Map
                    onClick={this.infoWindowClose}
                    styles={MapStyle}
                    google={this.props.google}
                    disableDefaultUI={true}
                    zoomControl={true}
                    zoom={8.7}
                    initialCenter={{
                        lat: 24.22781,
                        lng: 121.2,
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
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAcWK8WHabUh0BMDZuIIPo0qfWXWarBzoo"
})(withMedia(MapComprisonView));

const Animatedicon = props => ({
    anchor: new props.google.maps.Point(0, 0),
    url: 'data:image/svg+xml;utf-8, \<svg width="80" height="90" xmlns="http://www.w3.org/2000/svg" version="1.1">\
        <circle id="c1" cx="50" cy="35" r="10" fill="rgba(9, 91, 138, 0.9)" >\
            <animate id="c1Animation1" attributeName="r" attributeType="XML" begin="0s" dur="3000ms" from="5" to="20" repeatCount="indefinite" fill="gradient"></animate>\
            <animate id="c1Animation1" attributeName="r" attributeType="XML" begin="5s" dur="3000ms" values="20;5;20" repeatCount="indefinite" fill="red"></animate>\
        </circle>\
        <circle id="c1" cx="50" cy="35" r="10" fill="rgba(60, 143, 255, 0.8)" >\
        <animate id="c1Animation1" attributeName="r" attributeType="XML" begin="1s" dur="3000ms" from="15" to="30" repeatCount="indefinite" fill="gradient"></animate>\
        <animate id="c1Animation1" attributeName="r" attributeType="XML" begin="3s" dur="3000ms" values="30;15;30" repeatCount="indefinite" fill="red"></animate>\
    </circle>\
    <circle id="c1" cx="50" cy="35" r="10" fill="rgba(60, 143, 255, 0.6)" >\
    <animate id="c1Animation1" attributeName="r" attributeType="XML" begin="2s" dur="3000ms" from="5" to="15" repeatCount="indefinite" fill="gradient"></animate>\
    <animate id="c1Animation1" attributeName="r" attributeType="XML" begin="4s" dur="3000ms" values="15;5;15" repeatCount="indefinite" fill="red"></animate>\
    </circle>\
        </svg>',
    strokeWeight: 0,
    scale: 1
})

// const MapComprisonView = props => {
//     console.log(props)
//     return (
//         <div className="bg-white h-100 p-2" >
//             <div className="bg-white h-100 p-2 border border-dark">
//                 {/* <Map
//                     // onZoomChanged={() => console.log("zoom changed")}
//                     disableDefaultUI={true}
//                     zoom={8}
//                     zoomControl={true}
//                     // onReady={() => console.log("map ready")}
//                     styles={MapStyle}
//                     // google={google}
//                     // ref={this.mapRef}
//                     // onClick={this.infoWindowClose}
//                     initialCenter={{ lat: 24.000000, lng: 120.50505 }}

//                 /> */}

//             </div>

//         </div >
//     )
// }

// export default withMedia(MapComprisonView)