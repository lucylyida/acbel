import React from "react"
import { Link } from "react-router-dom"
import * as route from "../../../config/route.config"

const SiteNavbar = props => {
    const { match } = props
    return(
        <div>
            <div className="p-3 border  d-flex flex-direction-row">
                <div className="p-3 border" >
                    <Link to={`/${route.global}/${route.map}`}>
                        Global Map
                    </Link>
                </div>
                <div className="p-3">
                    <Link to={`${match.url}/${route.dashboard}`}>
                        Site Dashboard
                    </Link>
                </div>
                <div className="p-3">
                    <Link to={`${match.url}/${route.forecast}`}>
                        Site Forecast
                    </Link>
                </div>
                <div className="p-3">
                    <Link to={`${match.url}/${route.revenue}`}>
                        Site Revenue
                    </Link>
                </div>
                <div className="p-3">
                    <Link to={`${match.url}/${route.maintenance}`}>
                        Site Maintenance
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SiteNavbar