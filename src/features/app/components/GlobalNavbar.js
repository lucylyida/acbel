import React from "react"
import { Link } from "react-router-dom"
import * as route from "../../../config/route.config"

const GlobalNavbar = props => {
    const { match } = props
    return(
        <div>
            <div className="p-3 border d-flex flex-direction-row">
                <div className="p-3">  
                    <Link to={ `${match.url}/${route.map}` }>
                        Map
                    </Link>
                </div>
                <div className="p-3">
                    <Link to={`${match.url}/${route.list}`}>
                        List
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default GlobalNavbar