import React from "react"
import { withMedia } from "react-media-query-hoc"
import * as route from "../../../config/route.config"
import KmLink from '../../../kumocom/KmLink'
import AcbelLogo from '../../../assets/icons/Acbel_Logo'
import { fsc } from "../../../helper/fontColorHelper"
import Navbar from "./Navbar"
// import querystring from "query-string"
// import KmDropdown from "../../../kumocom/KmDropdown"
// import SgFlag from '../../../assets/icons/Flag_Singapore'
// import ThaiFlag from '../../../assets/icons/Flag_Thailand'
// import ThaiwanFlag from '../../../assets/icons/Flag_Thaiwan'
// import Flag from '../../../assets/icons/Flag_Kingdom'


const GlobalNavbar = props => {
    const { match, location, media ,/*history,*/ } = props
    return (
        <Navbar {...props}>
            <div className={`d-flex flex-column justify-content-center ${media.mobile ? "pl-3 pr-1" : "px-4"}`} >
                <a className="" style={{ borderRadius: 4, cursor: "pointer" }} href={`/${route.global}${location.search}`}>
                    <AcbelLogo width={fsc(media, 40)} height={fsc(media, 40)} />
                </a>
            </div>
            <div className="d-flex justify-content-center align-items-center pl-2">
                <div style={{ color: "#2244aa", fontSize: fsc(media, 28) }}>Global</div>
                <div style={{ paddingLeft: fsc(media, 10) }}><KmLink text="Map View" to={`${match.url}/${route.map}${location.search}`} currentLink={location.pathname + location.search} /></div>
                <div style={{ paddingLeft: fsc(media, 10) }}><KmLink text="List View" to={`${match.url}/${route.list}${location.search}`} currentLink={location.pathname + location.search} /></div>
            </div>
            <div style={{ flex: 1 }} />
        </Navbar>
    )
}

export default withMedia(GlobalNavbar)