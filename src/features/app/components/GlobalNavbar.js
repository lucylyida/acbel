import React from "react"
import { Link } from "react-router-dom"
import * as route from "../../../config/route.config"

const GlobalNavbar = props => {
    const { match, location } = props
    return (
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
                    <div className="d-flex justify-content-center pl-5 align-items-center">
                        <div className="h2" style={{ color: "#2244aa", fontWeight: 900 }}>Global</div>
                        <Link to={`${match.url}/${route.map}${location.search}`} className="h6 ml-3 pt-2">Map View</Link>
                        <Link to={`${match.url}/${route.list}${location.search}`} className="h6 ml-3 pt-2">List View</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GlobalNavbar
