import React from "react"
import { Link } from "react-router-dom"
import * as route from "../../../config/route.config"
import KmLink from '../../../kumocom/KmLink'

import AcbelLogo from '../../../assets/icons/Acbel_Logo'

const SiteNavbar = props => {
    const { match, location } = props
    return (
        <div className="container-fluid pt-4">
            <div className="d-flex align-items-center pl-3">
                <div className="d-flex flex-column justify-content-center">
                    <div className="px-3 py-2" style={{ backgroundColor: "#ffffff", borderRadius: 4, cursor: "pointer" }}>
                        <i className="fas fa-bars text-primary" />
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-center px-4">
                    <a className="" style={{ borderRadius: 4, cursor: "pointer" }} href={`/${route.global}${location.search}`}>
                        <AcbelLogo width={40} height={40} />
                    </a>
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <div className="h5" style={{ color: "#2244aa", fontWeight: 900 }}>
                        Organic Farmer's Association
                        </div>
                    <div className="" style={{ color: "gray", fontSize: 12 }}>
                        Hualien City, Taiwan
                        </div>
                </div>
            </div>

            <div className="pt-4 d-flex flex-direction-row">  
                <KmLink text="Dashboard" to={`${match.url}/${route.dashboard}${location.search}`} currentLink={location.pathname+location.search}  />
                <KmLink text="Site Forecast" to={`${match.url}/${route.forecast}${location.search}`} currentLink={location.pathname+location.search}  />
                <KmLink text="Site Revenue" to={`${match.url}/${route.revenue}${location.search}`} currentLink={location.pathname+location.search} />
                <KmLink text="Site Maintenance" to={`${match.url}/${route.maintenance}${location.search}`} currentLink={location.pathname+location.search} />
                <KmLink text="Profile" to={`${match.url}/${route.profile}${location.search}`} currentLink={location.pathname+location.search} />
                <KmLink text="Inverters" to={`${match.url}/${route.inverter}${location.search}`} currentLink={location.pathname+location.search} />
                <KmLink text="Panels" to={`${match.url}/${route.panel}${location.search}`} currentLink={location.pathname+location.search} />
                <KmLink text="Report" to={`${match.url}/${route.report}${location.search}`} currentLink={location.pathname+location.search} />
            </div>
        </div>
    )
}

export default SiteNavbar