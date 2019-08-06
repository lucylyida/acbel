import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';

export class DashMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stores: [{ lat: 22.498556299, lng: 34.141844169 },
            { name: "Myanmar", latitude: 21.359423, longitude: 34.021071 },
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
            return <Marker

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
            <div className="" style={{ height: '347px', position: 'relative', bottom: '0', paddingRight: '10', paddingLeft: '0%', overflow: 'hidden', margin: '0px' }}>
                <Map
                    style={{ height: '100%', width: '100%' }}
                    google={this.props.google}
                    zoom={5}
                    initialCenter={{ lat: 21.444, lng: 96.176 }} >
                    {this.displayMarkers()}
                </Map>
            </div>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyDjz91l2P3tnwy9phAWvqEU_V4VPEviW-I')
})(DashMap)

