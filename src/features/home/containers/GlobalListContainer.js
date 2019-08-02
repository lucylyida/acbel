import React from "react"
import { Link } from "react-router-dom"
import * as route from "../../../config/route.config"

const GlobalListContainer = props => {
    const siteId = 1
    return (
        <div className="p-3">
            <div className="p-3 border-bottom">Global List Container</div>
            <div className="p-3">
                <Link to={`/${route.site}/${siteId}`}>
                   Site A
                </Link>
            </div>
        </div>
    )
}

export default GlobalListContainer