import React from "react"
import querystring from "query-string"
import { Link } from "react-router-dom"
import { withMedia } from "react-media-query-hoc"
import * as route from "../../../config/route.config"
import KmLink from '../../../kumocom/KmLink'
import KmDropdown from "../../../kumocom/KmDropdown"
import SgFlag from '../../../assets/icons/Flag_Singapore'
import ThaiFlag from '../../../assets/icons/Flag_Thailand'
import ThaiwanFlag from '../../../assets/icons/Flag_Thaiwan'
import Flag from '../../../assets/icons/Flag_Kingdom'
import AcbelLogo from '../../../assets/icons/Acbel_Logo'
import { fsc } from "../../../helper/fontColorHelper"

const GlobalNavbar = props => {
    const { match, location, history, media } = props
    
    return (
        <div className="container-fluid px-0 py-3">
            <div className="d-flex align-items-center">
                <div className="d-flex flex-column justify-content-center" onClick={() => _hadleMenuClick({ match, location, history })}>
                    <div 
                        style={{ 
                            backgroundColor: "#ffffff", 
                            borderRadius: 4, 
                            cursor: "pointer", 
                            paddingLeft: fsc(media, 12),
                            paddingRight: fsc(media, 12),
                            paddingTop: fsc(media, 6),
                            paddingBottom: fsc(media, 6)
                        }}>
                        <i className="fas fa-bars text-primary" />
                    </div>
                </div>
                <div className={`d-flex flex-column justify-content-center ${ media.mobile?"pl-3 pr-1": "px-4"}`} >
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
                <div className="d-flex justify-content-between align-items-center pr-2">
                    <KmDropdown
                        labelHide = {media.mobile}
                        onClick={() => console.log('click')}
                        selectedItem={{ icon: <Flag width={24} height={24} />, text: 'UK English' }}
                        data={[
                            { icon: <ThaiwanFlag width={24} height={24} />, text: 'TW ThaiWan' },
                            { icon: <ThaiFlag width={24} height={24} />, text: 'TH Thailand' },
                            { icon: <SgFlag width={24} height={24} />, text: 'Sg Singapore' },
                            { icon: <Flag width={24} height={24} />, text: 'UK English' }
                        ]}
                        style={{ backgroundColor: ' #e5e5e5' }}
                    />
                </div>
            </div>
        </div>
    )
}

export default withMedia(GlobalNavbar)

export const _hadleMenuClick = ({ history, match, location }) => {
    const qp = { ...querystring.parse(location.search) }
    const queryParams = { ...qp, lsb: qp.lsb === "true" ? false : true }
    history.push({
        pathname: location.pathname,
        search: `?${querystring.stringify(queryParams)}`
    })
}