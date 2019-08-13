import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import InfoWindowEx from "../../dashboard/components/InfoWindowEx";
import MapStyle from '../../home/containers/MapStyle';
// import SiteIcon from '../../../assets/icons/solarpanel_icn';
import { fsc } from '../../../helper/fontColorHelper';
import { withMedia } from 'react-media-query-hoc';
import * as route from '../../../config/route.config';
import { withRouter } from 'react-router-dom'


const clientLists = [
    {
        name: "Mandalay",
        title: "Mandalay",
        lat: 21.954510,
        lng: 96.093292,
        id: 1,
        sites: [
            { name: "site 1", lat: 21.946744, lng: 96.09322787 },
            { name: "site 2", lat: 21.876744, lng: 96.09322787 },
            { name: "site 3", lat: 21.786744, lng: 96.09322787 },
            { name: "site 4", lat: 21.812367, lng: 96.09322787 }
        ]
    },
    {
        name: "Bankok",
        title: "Bankok",
        lat: 13.736717,
        lng: 100.523186,
        id: 2,
        sites: [
            { name: "site 1", lat: 13.946744, lng: 100.09322787 },
            { name: "site 2", lat: 13.876744, lng: 100.09322787 },
            { name: "site 3", lat: 13.786744, lng: 100.09322787 },
            { name: "site 4", lat: 13.812367, lng: 100.09322787 }
        ]
    },
    {
        name: "Singapore",
        title: "Singapore",
        lat: 1.351616,
        lng: 103.808053,
        id: 3,
        sites: [
            { name: "site 1", lat: 1.946744, lng: 103.09322787 },
            { name: "site 2", lat: 1.876744, lng: 103.09322787 },
            { name: "site 3", lat: 1.786744, lng: 103.09322787 },
            { name: "site 4", lat: 1.812367, lng: 103.09322787 }
        ]
    }
];
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

const UnAnimatedicon = props => ({
    anchor: new props.google.maps.Point(0, 0),
    url: 'data:image/svg+xml;utf-8, \<svg width="80" height="90" xmlns="http://www.w3.org/2000/svg" version="1.1">\
        <circle id="c1" cx="34" cy="23" r="10" fill="purple" >\
            <animate id="c1Animation1" attributeName="r" attributeType="XML" begin="0s" dur="0s" from="10" to="20"  fill="gradient"></animate>\
        </circle>\
        </svg>',
    strokeWeight: 0,
    scale: 1
})


export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

            stores: [],
            isClientToShow: false,
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            isShowInfoWindow: false
        }
        this.mapRef = React.createRef()
    }
    componentDidMount() {
        // console.log({ mapRef: this.mapRef.current })
        const mmap = this.mapRef.current
        mmap.map.addListener("zoom_changed", () => {
            // console.log({ zoom: mmap.map.getZoom() })
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
        return stores === undefined ? [] : stores.map((store, index) => {
           const icon = !isClientToShow ? UnAnimatedicon(this.props): Animatedicon(this.props)
            // console.log({ stores })
            return <Marker
                icon={icon}
                key={index}
                id={index}
                position={{
                    lat: store.lat,
                    lng: store.lng
                }}
                onClick={this._onMarkerClick} >
                    {/* <div key={1} id="nnhh" style={{ width: 100, height: 100, background: "red"}}></div> */}
            </Marker>
        })
    }
    _onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: !this.state.isClientToShow
        });
    };

    infoWindowClose = () => {
        this.setState({

            showingInfoWindow: false
        });
    }

    // initZoomControl(map) {
    //     document.querySelector('.zoom-control-in').onclick = function () {
    //         map.setZoom(map.getZoom() + 1);
    //     };
    //     document.querySelector('.zoom-control-out').onclick = function () {
    //         map.setZoom(map.getZoom() - 1);
    //     };
    //     map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(
    //         document.querySelector('.zoom-control'));
    // }

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
        const { isClientToShow } = this.state
        // console.log({ isClientToShow })
        return (
            <div  style={{ borderRadius: 4, border: '0.7px solid #cccccc', height: '400px', position: 'relative', bottom: '0', paddingBottom: '40%', paddingRight: '10', paddingLeft: '0%', overflow: 'hidden', margin: '0px' }}>
                <Map
                    
                    onZoomChanged={() => console.log("zoom changed")}
                    disableDefaultUI={true}
                    zoom={4}
                    zoomControl={true}
                    onReady={() => console.log("map ready")}
                    styles={MapStyle}
                    google={this.props.google}
                    ref={this.mapRef}
                    onClick={this.infoWindowClose}
                    // onZoomChanged={this._handleZoomChange}
                    initialCenter={{ lat: 21.444, lng: 96.176 }}
                >
                    {this._markerDisplay()}
                    {
                        !isClientToShow && clientLists.map((store, i) => {
                            return (
                                < InfoWindowEx
                                    key={i}
                                    marker={this.state.activeMarker}
                                    visible={this.state.showingInfoWindow}
                                    position={{ lat: store.lat, lng: store.lng }} >
                                    <div
                                        onClick={this.showDetails.bind(this, this.state.selectedPlace)}
                                        className="" style={{ fontSize: fsc(media, 16) }}>
                                        {/* <div>{this.state.selectedPlace.name}</div> */}
                                        <div style={{ color: 'blue' }}>Organic Farmars' Organization </div>
                                        <div className='py-1'>Online</div>
                                        <div>Power Output : 147.45kW</div>
                                        <div className='py-1'>Capacity : 147.45kW</div>

                                        <button
                                            type="button"
                                            onClick={this.showDetails.bind(this, this.state.selectedPlace)}
                                        >
                                            Show details
                                         </button>
                                    </div>
                                </InfoWindowEx>);
                        })}
                </Map>

            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDjz91l2P3tnwy9phAWvqEU_V4VPEviW-I"
})(withRouter(withMedia(MapContainer)));
