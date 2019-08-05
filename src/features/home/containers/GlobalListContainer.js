import React from "react"
import { Link } from "react-router-dom"
import * as route from "../../../config/route.config"
import { dec } from "../../../network-sec/cypher"
import querystring from "query-string"

const GlobalListContainer = props => {
    const { location } = props
    const queryData = dec(querystring.parse(location.search).had)

    return (
        <div className="p-3">
            <div className="p-3" style={{ fontSize: 18 }}>Global List Container</div>
            <div className="p-3" style={{ fontSize: 20 }}>
                <Link to={`/${route.site}/${queryData.siteId}${location.search}`}>
                    Organic Farmer's Association
                </Link>
            </div>
        </div>
    )
}

export default GlobalListContainer