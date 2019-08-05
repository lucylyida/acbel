import React from "react"
import { Link } from "react-router-dom"
import * as route from "../../../config/route.config"
import { enc } from "../../../network-sec/cypher"

const GlobalMapContainer = props => {
    const { location } = props
    return (
        <div className="p-3">
            <div className="p-3" style={{ fontSize: 18 }}>Global Map Container</div>
            <div className="p-3" style={{ fontSize: 20 }}>
                {/* <Link to={`/${route.site}/${siteData.siteId}${location.search}`}>
                    Organic Farmer's Association
                </Link> */}
            </div>
        </div>
    )
}

export default GlobalMapContainer