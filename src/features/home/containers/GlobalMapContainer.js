import React from "react"
import { Link } from "react-router-dom"
import * as route from "../../../config/route.config"
import { enc } from "../../../network-sec/cypher"
import MapView from './Map';

import { useSelector, useDispatch } from 'react-redux'
import { getvendorfromapi } from '../../../action'

const GlobalMapContainer = props => {
    const { location } = props
    return (
        <div className="mt-3">
            <MapView />
        </div>
    )
}

export default GlobalMapContainer;