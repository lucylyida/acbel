import React from "react"
import { Link } from "react-router-dom"
import * as route from "../../../config/route.config"

const SiteNavbar = props => {
    const { match, location } = props
    return(
        <div className="row">
            <div className="col-12 p-4 ">

                <div className="d-flex align-item-center">
                    <div className="d-flex flex-column justify-content-center pl-4"> 
                        <div className="p-2" style={{ backgroundColor: "#ffffff", borderRadius: 4, cursor: "pointer" }}>
                            <i className="fas fa-bars fa-2x text-primary" />
                        </div>
                    </div>
                    <div className="d-flex flex-column justify-content-center pl-5"> 
                        <a className="" style={{ borderRadius: 4, cursor: "pointer" }} href={`/${route.global}${location.search}`}> 
                            <i className="fab fa-app-store-ios fa-5x text-primary"/>
                        </a>
                    </div>
                    <div className="d-flex flex-column justify-content-center pl-5"> 
                        <div className="h2" style={{ color: "#2244aa", fontWeight: 900 }}>
                            Organic Farmer's Association
                        </div>
                        <div className="h5" style={{ color: "gray" }}>
                            Hualien City, Taiwan
                        </div>
                    </div>
                </div>

                <div className="p-3  d-flex flex-direction-row">
                    <div className="p-3">
                        <Link to={`${match.url}/${route.dashboard}${location.search}`}>
                            Site Dashboard
                        </Link>
                    </div>
                    <div className="p-3">
                        <Link to={`${match.url}/${route.forecast}${location.search}`}>
                            Site Forecast
                        </Link>
                    </div>
                    <div className="p-3">
                        <Link to={`${match.url}/${route.revenue}${location.search}`}>
                            Site Revenue
                        </Link>
                    </div>
                    <div className="p-3">
                        <Link to={`${match.url}/${route.maintenance}${location.search}`}>
                            Site Maintenance
                        </Link>
                    </div>
                    <div className="p-3">
                        <Link to={`${match.url}/${route.profile}${location.search}`}>
                            Profile
                        </Link>
                    </div>
                    <div className="p-3">
                        <Link to={`${match.url}/${route.inverter}${location.search}`}>
                            Inverters
                        </Link>
                    </div>
                    <div className="p-3">
                        <Link to={`${match.url}/${route.panel}${location.search}`}>
                            Panels
                        </Link>
                    </div>
                    <div className="p-3">
                        <Link to={`${match.url}/${route.report}${location.search}`}>
                            Report
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SiteNavbar