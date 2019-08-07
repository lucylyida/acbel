import React from "react"
import { Link } from "react-router-dom"
import * as route from "../../../config/route.config"
import KmLink from '../../../kumocom/KmLink'
import KmDropdown from "../../../kumocom/KmDropdown"
import { withRouter } from "react-router-dom"
import SgFlag from '../../../assets/icons/Flag_Singapore'
import ThaiFlag from '../../../assets/icons/Flag_Thailand'
import ThaiwanFlag from '../../../assets/icons/Flag_Thaiwan'
import Flag from '../../../assets/icons/Flag_Kingdom'
import AcbelLogo from '../../../assets/icons/Acbel_Logo'

import { _hadleMenuClick } from "./GlobalNavbar"

const SiteNavbar = props => {
    const { match, location, history } = props
    const warning = 0
    const good = 14
    const bad = 35

    return (
        <div className="container-fluid px-1 py-3">
            <div className="d-flex">
                <div className="d-flex flex-column justify-content-center p-0" onClick={()=>_hadleMenuClick({ match, location, history })}>
                    <div className="px-3 py-2" style={{ backgroundColor: "#ffffff", borderRadius: 4, cursor: "pointer" }}>
                        <i className="fas fa-bars text-primary" />
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-center px-4">
                    <a className="" style={{ borderRadius: 4, cursor: "pointer" }} href={`/${route.global}${location.search}`}>
                        <AcbelLogo width={40} height={40} />
                    </a>
                </div>
                <div className="d-flex flex-column justify-content-center" style={{ lineHeight: '1.3' }}>
                    <div style={{ color: "#2244aa", fontSize: 28 }}>{"Organic Farmer's Association"}</div>
                    <div className="" style={{ color: "gray", fontSize: 16 }}>{"Hualien City, Taiwan"}</div>
                </div>
                <div style={{ flex: 1 }} />
                <div className="d-flex justify-content-between align-items-center pr-2">
                    <KmDropdown
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

            <div className="d-flex flex-row flex-wrap align-items-baseline pt-3 pr-2">
                <div className="py-1 d-flex flex-direction-row" style={{ overflowX: 'auto' }}>
                    <div className="pr-2"><KmLink text="Dashboard" to={`${match.url}/${route.dashboard}${location.search}`} currentLink={location.pathname + location.search} /></div>
                    <div className="pr-2"><KmLink text="Site Forecast" to={`${match.url}/${route.forecast}${location.search}`} currentLink={location.pathname + location.search} /></div>
                    <div className="pr-2"><KmLink text="Site Revenue" to={`${match.url}/${route.revenue}${location.search}`} currentLink={location.pathname + location.search} /></div>
                    <div className="pr-2"><KmLink text="Site Maintenance" to={`${match.url}/${route.maintenance}${location.search}`} currentLink={location.pathname + location.search} /></div>
                    <div className="pr-2"><KmLink text="Profile" to={`${match.url}/${route.profile}${location.search}`} currentLink={location.pathname + location.search} /></div>
                    <div className="pr-2"><KmLink text="Inverters" to={`${match.url}/${route.inverter}${location.search}`} currentLink={location.pathname + location.search} /></div>
                    <div className="pr-2"><KmLink text="Panels" to={`${match.url}/${route.panel}${location.search}`} currentLink={location.pathname + location.search} /></div>
                    <div className="pr-2"><KmLink text="Report" to={`${match.url}/${route.report}${location.search}`} currentLink={location.pathname + location.search} /></div>
                </div>
                <div style={{ flex: 1 }} />
                <div className="d-flex p-2">
                    <div style={{ fontSize: 16, color: 'gray' }}>{"Alerts"}</div>
                    <div className="d-flex align-items-center px-3 mx-1" style={{ backgroundColor: '#FDEDB2', borderRadius: 40, fontSize: 12 }}><i className="fa fa-circle pr-1" style={{ color: 'orange', fontSize: 10 }} />{warning}</div>
                    <div className="d-flex align-items-center px-3 mx-1" style={{ backgroundColor: '#FBD2B3', borderRadius: 40, fontSize: 12 }}><i className="fa fa-circle pr-1" style={{ color: 'red', fontSize: 10 }} />{bad}</div>
                    <div className="d-flex align-items-center px-3 mx-1" style={{ backgroundColor: '#DCEF93', borderRadius: 40, fontSize: 12 }}><i className="fa fa-circle pr-1" style={{ color: 'green', fontSize: 10 }} />{good}</div>
                    <i className="fa fa-caret-down pt-1 pl-1" />
                </div>
            </div>
        </div>
    )
}

export default withRouter(SiteNavbar)