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

        this.state = {

            zoom: 7,
            stores: [],
            isClientToShow: false,
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            isShowInfoWindow: false,
            initialCenter: { lat: 20.444, lng: 96.176 },
            markerPosition: {},
            infoSiteData: {},
            vendor_id: -1,
            mapController: 0
        }
        this.mapRef = React.createRef()
    }

    componentDidMount() {
        const { clientLists, siteNameList } = this.props
        const { vendor_id } = this.state
        const mmap = this.mapRef.current
        mmap.map.addListener("zoom_changed", () => {
            this.setState({ showingInfoWindow: false })
        })
        mmap.map.addListener("bounds_changed", () => {
            const mapBound = mmap.map.getBounds()
            const clientLocs = this.props.clientLists
            const clientLocs2 = clientLocs.length >= 1 ? clientLocs : siteNameList
            // console.log(clientLocs.length, mmap.map.zoom)
            const listToShow = (clientLocs.length > 1 && mmap.map.zoom <= 10) ? clientLocs : clientLocs2.reduce((r, c) => {
                const sitesLocs = c.sites.map(v => v)
                return [...r, ...sitesLocs]
            }, [])

            this.setState({ stores: listToShow, isClientToShow: mmap.map.zoom <= 10 && (vendor_id > -1 || clientLocs.length > 0), isShowInfoWindow: clientLocs.lenght >= 1 })
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (!equal(this.props, nextProps) || !equal(this.state, nextState)) { return true; } else { return false; }
    }


    UNSAFE_componentWillUpdate(nextProps, nextState) {


        const mmap = this.mapRef.current
        const { stores } = this.state
        const { siteNameList, google, siteListRawLength } = nextProps
        const dd = siteNameList.map(v => ({ lat: v.latitude, lng: v.longitude }))
        const lat = siteNameList[0].latitude
        const lng = siteNameList[0].longitude
        this.setState({ asdasd: 2 })
        // mmap.map.setCenter(new google.maps.LatLng(lat, lng))

        const all_sites = siteNameList.length
        if (all_sites < siteListRawLength) { return mmap.map.setCenter(new google.maps.LatLng(lat, lng)) } else { return null }
    }

    _markerDisplay = () => {
        const { stores, isClientToShow } = this.state
        const { clientLists, siteNameList } = this.props

        const siteNameListLength = siteNameList.length
        const mmap = this.mapRef.current
        const icon = (isClientToShow) && (siteNameListLength !== 1) ? Animatedicon(this.props) : SolarPanelIcon

        return stores === undefined ? [] : isClientToShow ?

            clientLists.map((store, index) => {
                return < Marker
                    label={isClientToShow ? { text: `${store.sites.length}`, color: 'white' } : null}
                    title={store.city}
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
                    title={store.name}
                    key={index}
                    id={index}
                    position={{
                        lat: store.lat,
                        lng: store.lng,
                    }}
                    onClick={(props, marker, e) => { return this._onMarkerClick(props, marker, e, store) }} />
            })
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
        console.log(props)
        const mmap = this.mapRef.current
        mmap.map.setZoom(11);
        mmap.map.setCenter(marker.getPosition());
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
        const { infoSiteData } = this.state
        const online = infoSiteData.isOnline
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
                        <div style={{ fontSize: fsc(media, 13), cursor: "pointer" }} onClick={() => this.showDetails(this.state.infoSiteData)}>
                            <div style={{ color: 'blue' }}>{infoSiteData.site_name}</div>
                            <div className='py-1'>
                                <i className="fa fa-circle" style={{ fontSize: 10, color: online ? 'green' : 'red' }} /> {online ? "Online" : "Offline"}</div>
                            <div>Power Output : {infoSiteData.powerOutput}</div>
                            <div className='pt-0'>Capacity : {infoSiteData.capacity_kw}kW</div>
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

