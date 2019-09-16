import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import InfoWindowEx from "../../dashboard/components/InfoWindowEx";
import MapStyle from '../../home/containers/MapStyle';
import { fsc } from '../../../helper/fontColorHelper';
import SolarPanelIcon from "../../../assets/images/solarPanel.png";
import { withMedia } from 'react-media-query-hoc';
import * as route from '../../../config/route.config';
import { withRouter } from 'react-router-dom'
import equal from "deep-equal";

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        const siteNameList = this.props
        this.state = {
            position: { lat: siteNameList.latitude, lng: siteNameList.longitude },

            zoom: 5,
            stores: [],
            isClientToShow: false,
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            isShowInfoWindow: false,
            initialCenter: { lat: 20.444, lng: 96.176 },
            markerPosition: {},
            infoSiteData: {},
        }
        this.mapRef = React.createRef()
    }
    componentDidMount() {
        const { clientLists, siteNameList } = this.props
        const mmap = this.mapRef.current
        mmap.map.addListener("zoom_changed", () => {
            this.setState({ showingInfoWindow: false })
        })

        mmap.map.addListener("bounds_changed", () => {
            const mapBound = mmap.map.getBounds()
            const clientLocs = clientLists.filter(v => mapBound.contains({ lat: v.lat, lng: v.lng }))
            const clientLocs2 = clientLocs.length >= 1 ? clientLocs : clientLists
            const listToShow = clientLocs.length > 1 ? clientLocs : clientLocs2.reduce((r, c) => {
                const sitesLocs = c.sites.map(v => v)
                return [...r, ...sitesLocs]
            }, [])
            this.setState({ stores: listToShow, isClientToShow: clientLocs.length > 1, isShowInfoWindow: clientLocs.lenght >= 1 })
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (!equal(this.props, nextProps) || !equal(this.state, nextState)) {
            return true;
        }
        else {
            return false;
        }
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {


        const mmap = this.mapRef.current
        const { siteNameList, google } = nextProps
        const { clientLists } = this.props

        // clientLists[2].lat = 25.0622
        // clientLists[2].lng = 121.4570
        // clientLists[3].lat = 22.6158
        // clientLists[3].lng = 120.7120
        // clientLists[4].lat = 25.0330
        // clientLists[4].lng = 121.4570
        // clientLists[1].sites[2].lat = 23.72767
        // clientLists[1].sites[2].lng = 121.417342
        // clientLists[2].sites[0].lat = 25.0632
        // clientLists[2].sites[0].lng = 121.457
        // clientLists[3].sites[0].lat = 22.6149
        // clientLists[3].sites[0].lng = 120.733
        // clientLists[4].sites[0].lat = 25.033
        // clientLists[4].sites[0].lng = 121.477
        // clientLists[4].sites[1].lat = 25.033
        // clientLists[4].sites[1].lng = 121.467
        // console.log(clientLists[4].lat, clientLists[4].lng)
        // console.log(clientLists[4].sites[0].lat, clientLists[4].sites[0].lng)
        // console.log(clientLists[4].sites[1].lat, clientLists[4].sites[1].lng)
        const dd = siteNameList.map(v => ({ lat: v.latitude, lng: v.longitude }))
        // console.log(dd)
        const lat = siteNameList[0].latitude
        const lng = siteNameList[0].longitude
        // mmap.map.setCenter(new google.maps.LatLng(lat, lng))
        const all_sites = siteNameList.length
        if (all_sites < 10) {
            return mmap.map.setCenter(new google.maps.LatLng(lat, lng))
        }
        else {
            return null
        }

    }

    _markerDisplay = () => {
        const { stores, isClientToShow } = this.state
        const { clientLists } = this.props
        const icon = !isClientToShow ? SolarPanelIcon : Animatedicon(this.props)
        return stores === undefined ? [] : isClientToShow ?
            clientLists.map((store, index) => {
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
                        return this._ClientSites(props, marker, e)
                    }}
                >
                </Marker>
            }) :
            stores.map((store, index) => {
                return < Marker
                    icon={icon}
                    key={index}
                    id={index}
                    position={{
                        lat: store.lat,
                        lng: store.lng,
                    }}
                    onClick={(props, marker, e) => {
                        return this._onMarkerClick(props, marker, e, store)
                    }}
                >
                </Marker>
            }

            )
    }
    _onMarkerClick = (props, marker, e, siteData) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,
            infoSiteData: siteData

        });
    };

    _ClientSites = (props, marker, e) => {
        const mmap = this.mapRef.current
        mmap.map.setZoom(12);
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

    showDetails = store => this.props.history.push(`/${route.site}/${store.vendor_id}/${store.hid}${this.props.location.search}`)
    

    render() {

        const { media } = this.props
        const { siteNameList } = this.props   
        return (
            <div style={{ borderRadius: 4, border: '0.7px solid #cccccc', height: '500px', position: 'relative', bottom: '0', paddingBottom: '40%', paddingRight: '10', paddingLeft: '0%', overflow: 'hidden', margin: '0px' }}>
                <Map

                    disableDefaultUI={true}
                    zoom={this.state.zoom}
                    zoomControl={true}
                    zoomControlOptions={{ position: this.props.google.maps.ControlPosition.RIGHT_TOP }}
                    styles={MapStyle}
                    google={this.props.google}
                    ref={this.mapRef}
                    onClick={this.infoWindowClose}
                    initialCenter={{ lat: siteNameList[0].latitude, lng: siteNameList[0].longitude }}
                >
                    {this._markerDisplay()}
                    <InfoWindowEx
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        initialCenter={this.state.position}
                    >
                        <div style={{ fontSize: fsc(media, 12), cursor: "pointer" }} onClick={() => this.showDetails(this.state.infoSiteData)}>
                            <div style={{ color: 'blue' }}>{this.state.infoSiteData.site_name}</div>
                            <div className='py-1'>
                                <i className="fa fa-circle" style={{ fontSize: 8, color: 'green' }} /> Online</div>
                            <div>Power Output : 147.45kW</div>
                            <div className='py-0'>Capacity : {this.state.infoSiteData.capacity_kw}kW</div>
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

