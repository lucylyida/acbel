import React from "react"
import { Link } from "react-router-dom"
import * as route from "../../../config/route.config"

const GlobalMapContainer = props => {
    const siteId = 1
    return (
        <div className="p-3">
            <div className="p-3 border-bottom">Global Map Container</div>
            <div className="p-3">
                <Link to={`/${route.site}/${siteId}`}>
                   Site A
                </Link>
            </div>
        </div>
    )
}

export default GlobalMapContainer