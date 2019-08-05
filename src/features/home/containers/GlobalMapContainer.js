import React from "react"
import { Link } from "react-router-dom"
import * as route from "../../../config/route.config"
import { enc } from "../../../network-sec/cypher"
import MapView from './Map';

const GlobalMapContainer = props => {
    const { location } = props
    return (
        <div className="bg-dark"><MapView /></div>
    )
}

export default GlobalMapContainer;