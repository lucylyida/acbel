import React from "react"
import { Link } from "react-router-dom"
import * as route from "../../../config/route.config"
import { enc } from "../../../network-sec/cypher"
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';
import MapView from './Map';

const GlobalMapContainer = props => {
    const { location } = props
    return (
            <MapView />
        // <div className="container-fluid">
        //     <MapView />
        //     <div className="p-3" style={{ fontSize: 20 }}>
        //         <Link to={`/${route.site}/${siteData.siteId}${location.search}`}>
        //             Organic Farmer's Association
        //         </Link>
        //     </div>
        // </div>
    )
}

export default GlobalMapContainer;