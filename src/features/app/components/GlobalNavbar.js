import React from "react"
import { Link } from "react-router-dom"
import * as route from "../../../config/route.config"

const GlobalNavbar = props => {
    const { match } = props
    return(
        <div className="row">
            <div className="col-12 p-4 border ">
                <div className="d-flex align-item-center">
                    <div className="d-flex flex-column justify-content-center pl-4"> 
                        <div className="p-2" style={{ backgroundColor: "#ffffff", borderRadius: 4, cursor: "pointer" }}>
                            <i className="fas fa-bars fa-2x text-primary" />
                        </div>
                    </div>
                    <div className="d-flex flex-column justify-content-center pl-5"> 
                        <div className="" style={{ borderRadius: 4, cursor: "pointer" }}> 
                            <i className="fab fa-app-store-ios fa-5x text-primary"/>
                        </div>
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
                {/* <div className="p-3">  
                    <Link to={ `${match.url}/${route.map}` }>
                        Map
                    </Link>
                </div>
                <div className="p-3">
                    <Link to={`${match.url}/${route.list}`}>
                        List
                    </Link>
                </div> */}
            </div>
        </div>
    )
}

export default GlobalNavbar