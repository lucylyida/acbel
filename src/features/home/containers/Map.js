import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import InfoWindowEx from "../../dashboard/components/InfoWindowEx";
import MapStyle from '../../home/containers/MapStyle';
import { fsc } from '../../../helper/fontColorHelper';
import SolarPanelIcon from "../../../assets/images/solarPanel.png";
// import ClientIcon from '../../../assets/images/ClientIcon.gif';
import { withMedia } from 'react-media-query-hoc';
import * as route from '../../../config/route.config';
import { withRouter } from 'react-router-dom'

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zoom: 6,
            stores: [],
            isClientToShow: false,
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            isShowInfoWindow: false,
            initialCenter: { lat: 20.444, lng: 96.176 },
            markerPosition: {},
            infoSiteData : {},
        }
        this.mapRef = React.createRef()
    }
    componentDidMount() {
        const { clientLists } = this.props
        // console.log({ mapRef: this.mapRef.current })
        const mmap = this.mapRef.current
        // console.log(mmap.props.google.maps.Marker.Cb)
        mmap.map.addListener("zoom_changed", () => {
            // console.log({ zoom: mmap.map.getZoom() })
            this.setState({ showingInfoWindow: false })
        })
        mmap.map.addListener("bounds_changed", () => {
            const mapBound = mmap.map.getBounds()
            // console.log({ contain: mapBound.contains({ lat: 21.444, lng: 96.176 }) })
            const clientLocs = clientLists.filter(v => mapBound.contains({ lat: v.lat, lng: v.lng }))
            // console.log({ clientLocs })
            const clientLocs2 = clientLocs.length >= 1 ? clientLocs : clientLists
            const listToShow = clientLocs.length > 1 ? clientLocs : clientLocs2.reduce((r, c) => {
                const sitesLocs = c.sites.map(v => v)
                return [...r, ...sitesLocs]
            }, [])
            this.setState({ stores: listToShow, isClientToShow: clientLocs.length > 1, isShowInfoWindow: clientLocs.lenght >= 1 })
        })
    }
    _markerDisplay = () => {
        const { stores, isClientToShow } = this.state
        const mmap = this.mapRef.current

        return stores === undefined ? [] : stores.map((store, index) => {
            const icon = !isClientToShow ? SolarPanelIcon : Animatedicon(this.props)
            return < Marker
                label={isClientToShow ? { text: `${store.sites.length}`, color: 'white' } : null}
                // title={{ text: `${store.sites.length}`, color: 'red' }}
                icon={icon}
                key={index}
                id={index}
                position={{
                    lat: store.lat,
                    lng: store.lng,
                }}
                onClick={(props, marker, e) => {
                    return !isClientToShow ? this._onMarkerClick(props ,marker, e, store) : this._ClientSites(props, marker, e)
                }}
            >
            </Marker>
        })
    }
    _onMarkerClick = (props, marker, e, siteData) => {
        console.log({ siteData })
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,
            infoSiteData : siteData 

        });
    };

    _ClientSites = (props, marker, e) => {
        const mmap = this.mapRef.current
        mmap.map.setZoom(9.5);
        mmap.map.setCenter(marker.getPosition());
        // marker.addListener('click', function () {
        //     mmap.map.setZoom(9.5);
        //     mmap.map.setCenter(marker.getPosition());
        // });
    }

    infoWindowClose = () => {
        this.setState({
            showingInfoWindow: false
        });
    }

    showDetails = store => {

        this.props.history.push(`/${route.site}/${1}${this.props.location.search}`)
    };

    render() {
        const { media } = this.props


        return (
            <div style={{ borderRadius: 4, border: '0.7px solid #cccccc', height: '500px', position: 'relative', bottom: '0', paddingBottom: '40%', paddingRight: '10', paddingLeft: '0%', overflow: 'hidden', margin: '0px' }}>
                <Map
                    // onZoomChanged={() => console.log("zoom changed")}
                    disableDefaultUI={true}
                    // disableDoubleClickZoom={false}
                    zoom={this.state.zoom}
                    zoomControl={true}
                    zoomControlOptions={{ position: this.props.google.maps.ControlPosition.RIGHT_TOP }}
                    // onReady={() => console.log("map ready")}
                    styles={MapStyle}
                    google={this.props.google}
                    ref={this.mapRef}
                    onClick={this.infoWindowClose}
                    initialCenter={{ lat: 24.000000, lng: 120.50505 }}

                >
                    {this._markerDisplay()}
                    <InfoWindowEx
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        initialCenter={this.state.position}
                    >
                        <div style={{ fontSize: fsc(media, 12), cursor: "pointer" }} onClick={this.showDetails.bind(this, this.state.selectedPlace)}>
                            {/* <div>{this.state.selectedPlace.name}</div> */}
                            <div style={{ color: 'blue' }}>{this.state.infoSiteData.site_name}</div>
                            <div className='py-1'>
                                <i className="fa fa-circle" style={{ fontSize: 8, color: 'green' }} /> Online</div>
                            <div>Power Output : 147.45kW</div>
                            <div className='py-0'>Capacity : {this.state.infoSiteData.capacity_kw}kW</div>
                            {/* <button
                                type="button"
                                onClick={this.showDetails.bind(this, this.state.selectedPlace)}
                            >
                                Show details
                                </button> */}
                        </div>
                    </InfoWindowEx>
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAcWK8WHabUh0BMDZuIIPo0qfWXWarBzoo"
})(withRouter(withMedia(MapContainer)));

const clientLists1 = [
    {
        name: "Taiwan",
        title: "Taiwan",
        lat: 23.69781,
        lng: 120.960515,
        id: 1,
        sites: [
            { name: "site 1", lat: 23.345345, lng: 120.67866 },
            { name: "site 2", lat: 23.567567, lng: 120.97866 },
            { name: "site 3", lat: 23.57787, lng: 120.67645 },
            { name: "site 4", lat: 23.89877, lng: 120.789786 },

        ]
    },
    {
        name: "Hong Kong",
        title: "Hong Kong",
        lat: 22.4433,
        lng: 114.1234,
        id: 2,
        sites: [
            { name: "site 1", lat: 22.3245, lng: 114.2313 },
            { name: "site 2", lat: 22.6576, lng: 114.3322 },

        ]
    },
    {
        name: "Taipie",
        title: "Taipie",
        lat: 25.03335,
        lng: 121.56646730,
        id: 3,
        sites: [
            { name: "site 1", lat: 25.0456457, lng: 121.2342342 },
            { name: "site 2", lat: 25.0546464, lng: 121.3233333 },
            { name: "site 3", lat: 25.06789273, lng: 121.5454544 },
            { name: "site 4", lat: 25.073676, lng: 121.23254454 },
            { name: "site 5", lat: 25.02323, lng: 121.43254454 },
            { name: "site 6", lat: 25.031313, lng: 121.33254454 }
        ]
    },
    {
        name: "Xiamen",
        title: "Xiamen",
        lat: 24.4798,
        lng: 118.089,
        id: 4,
        sites: [
            { name: "site 1", lat: 24.5234, lng: 118.121 },
            { name: "site 2", lat: 24.5122, lng: 118.111 },
            { name: "site 3", lat: 24.3456, lng: 118.089 },
            { name: "site 4", lat: 24.4123, lng: 118.099 },
            { name: "site 4", lat: 24.473676, lng: 118.23254454 }
        ]
    }
];
const Animatedicon = props => ({
    anchor: new props.google.maps.Point(30, 30),
    url: 'data:image/svg+xml;utf-8, \<svg viewBox="-5 -5 100 -100"  width="70"  height="60" xmlns="http://www.w3.org/2000/svg" version="1.1">\
        <circle id="c1" cx="35" cy="30" r="10" fill="rgba(0, 0, 128, 0.2)" >\
            <animate id="c1Animation1" attributeName="r" attributeType="XML" begin="0s" dur="4000ms" from="15" to="20" repeatCount="indefinite" fill="gradient"></animate>\
            <animate id="c1Animation1" attributeName="r" attributeType="XML" begin="5s" dur="4000ms" values="10;5;20" repeatCount="indefinite" fill="red"></animate>\
        </circle>\
        <circle id="c1" cx="35" cy="30" r="10" fill="rgba(60, 143, 255, 0.8)" >\
        <animate id="c1Animation1" attributeName="r" attributeType="XML" begin="1s" dur="4000ms" from="15" to="20" repeatCount="indefinite" fill="gradient"></animate>\
        <animate id="c1Animation1" attributeName="r" attributeType="XML" begin="3s" dur="4000ms" values="20;10;20" repeatCount="indefinite" fill="red"></animate>\
    </circle>\
    <circle id="c1" cx="35" cy="30" r="10" fill="rgba(60, 143, 255, 0.6)" >\
    <animate id="c1Animation1" attributeName="r" attributeType="XML" begin="0s" dur="4000ms" from="10" to="20" repeatCount="indefinite" fill="gradient"></animate>\
    <animate id="c1Animation1" attributeName="r" attributeType="XML" begin="2s" dur="4000ms" values="10;15;30" repeatCount="indefinite" fill="red"></animate>\
    </circle>\
        </svg>',
    strokeWeight: 0,
    scale: 1
})

