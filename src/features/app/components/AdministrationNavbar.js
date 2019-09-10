import React from "react"
import querystring from "query-string"//To Know
import { withRouter } from "react-router-dom"//To Know
import { withMedia } from "react-media-query-hoc"
import * as route from "../../../config/route.config" //To Know
import KmLink from '../../../kumocom/KmLink'
import AcbelLogo from '../../../assets/icons/Acbel_Logo'
import { fsc } from "../../../helper/fontColorHelper"
import Navbar from "./Navbar"
import KmButton from "../../../kumocom/KmButton"

const MaintenanceNavbar = props => {
    const { match, location, history, media } = props
    const search = querystring.parse(location.search)//To Know
    const edit = search.e//To Know
    const pageName = match.params.pageName//To Know
    return (
        <Navbar {...props}>
            <div className={`d-flex flex-column justify-content-center ${media.mobile ? "pl-3 pr-1" : "px-4"}`} >
                <a className="" style={{ borderRadius: 4, cursor: "pointer" }} href={`/${route.global}${location.search}`}>
                    <AcbelLogo width={fsc(media, 40)} height={fsc(media, 40)} />{/*To Know*/}
                </a>
            </div>
            <div className="d-flex justify-content-center align-items-center pl-2">
                <div style={{ color: "#2244aa", fontSize: fsc(media, 28) }}>
                    { pageName===route.profile ? edit==="1" ? "Profile Edit" : "Profile" :pageName===route.userManagement ? "User Management" : "" }
                </div>
                {   pageName===route.profile && edit!=="1" && 
                    <div className="pl-4 pr-2">
                        <KmButton 
                            text="Edit Profile" 
                            style={{ background: "#ffffff33", border: "1px solid #2244aa" }} 
                            textColor="#2244aa" 
                            onClick={() => _handleClickedProfileEdit({ match, history, search })} />
                    </div>
                }
            </div>
            <div style={{ flex: 1 }} />
        </Navbar>
    )
}

const _handleClickedProfileEdit = ({ match, history, search, }) => {
    search.e = "1"
    return history.push(`${match.url}?${querystring.stringify(search)}`)//To Know
}

export default withRouter(withMedia(MaintenanceNavbar))