import React from "react"
import querystring from "query-string"
import { withMedia } from "react-media-query-hoc"
import * as route from "../../../config/route.config"
import KmLink from '../../../kumocom/KmLink'
import AcbelLogo from '../../../assets/icons/Acbel_Logo'
import { fsc } from "../../../helper/fontColorHelper"
import Navbar from "./Navbar"

const ReportNavbar = props => {
    const { match, location, history, media } = props
    return (
        <Navbar {...props}>
            <div className={`d-flex flex-column justify-content-center ${media.mobile ? "pl-3 pr-1" : "px-4"}`} >
                <a className="" style={{ borderRadius: 4, cursor: "pointer" }} href={`/${route.global}${location.search}`}>
                    <AcbelLogo width={fsc(media, 40)} height={fsc(media, 40)} />
                </a>
            </div>
            <div className="d-flex justify-content-center align-items-center pl-2">
                <div style={{ color: "#2244aa", fontSize: fsc(media, 28) }}>Report</div>
                <div style={{ paddingLeft: fsc(media, 10) }}><KmLink text="List View" to={`${match.url}/${route.list}${location.search}`} currentLink={location.pathname + location.search} /></div>
                <div style={{ paddingLeft: fsc(media, 10) }}><KmLink text="Calendar View" to={`${match.url}/${route.calendar}${location.search}`} currentLink={location.pathname + location.search} /></div>
            </div>
            <div style={{ flex: 1 }} />
        </Navbar>
    )
}

export default withMedia(ReportNavbar)