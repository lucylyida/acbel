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
import { withMedia } from "react-media-query-hoc"
import { fsc } from "../../../helper/fontColorHelper"
import { _hadleMenuClick } from "./Navbar"
import { useSelector, useDispatch } from 'react-redux'
import * as Action from '../../../action'

const SiteNavbar = props => {
    const { match, location, history, media } = props
    const warning = 0
    const good = 14
    const bad = 35
    const vendorState = useSelector(state => state.vendorReducer)
    const bodyData = { vendor_id: props.match.params.vendorId, site_id: props.match.params.siteId }

    const selectSite = vendorState.siteNameList.reduce((r, c) =>
        c.vendor_id === parseInt(bodyData.vendor_id) && c.hid === bodyData.site_id ? c : r
        , null)

    const dispatch = useDispatch()

    if (vendorState.isLoading) {
        dispatch(Action.getSiteListFromApi({ vendor_id: bodyData.vendor_id, site_id: null }))
    }

    return (
        <div className="container-fluid px-0 py-3">
            <div className="d-flex align-items-center pl-1" style={{ whiteSpace: 'nowrap' }}>
                <div className="d-flex flex-column justify-content-center p-0" onClick={() => _hadleMenuClick({ match, location, history })}>
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
                        <i className="fa fa-bars text-primary" />
                    </div>
                </div>
                <div className={`d-flex flex-column justify-content-center ${media.mobile ? "pl-2 pr-1" : "px-4"}`}>
                    <a className="" style={{ borderRadius: 4, cursor: "pointer" }} href={`/${route.global}${location.search}`}>
                        <AcbelLogo width={fsc(media, 40)} height={fsc(media, 40)} />
                    </a>
                </div>
                <div className="d-flex flex-column justify-content-center pl-2" style={{ lineHeight: '1.3' }}>
                    <div style={{ color: "#2244aa", fontSize: fsc(media, 28) }}>{selectSite !== null && selectSite.site_name}</div>
                    <div style={{ color: "gray" }} >
                        {selectSite !== null && `${selectSite.location} City, ${selectSite.country}`}
                    </div>
                </div>
                <div style={{ flex: 1 }} />

                <div className="d-flex justify-content-center align-items-center pr-2" style={window.innerWidth <= 355 ? { position: 'absolute', right: 0, top: 35 } : {}}>
                    <div style={{ cursor: 'pointer' }}>
                        <Flag width={24} height={24} />
                        <span className="px-3 font-weight-bold">UK English</span>
                    </div>
                    {/* <KmDropdown
                        labelHide={media.mobile}
                        onClick={() => console.log('click')}
                        selectedItem={{ icon: <Flag width={24} height={24} />, text: 'UK English' }}
                        data={[
                            { icon: <ThaiwanFlag width={24} height={24} />, text: 'TW ThaiWan' },
                            { icon: <ThaiFlag width={24} height={24} />, text: 'TH Thailand' },
                            { icon: <SgFlag width={24} height={24} />, text: 'Sg Singapore' },
                            { icon: <Flag width={24} height={24} />, text: 'UK English' }
                        ]}
                        style={{ backgroundColor: '#e5e5e5' }}
                    /> */}
                </div>
            </div>

            <div className="d-flex flex-row flex-wrap align-items-baseline py-3 px-1">
                <div className="py-1 d-flex flex-direction-row" style={{ overflowX: 'auto' }}>
                    <div className="pr-3" style={{ opacity: 0.3 }}><KmLink text="Dashboard" currentLink={location.pathname + location.search} /></div>
                    <div className="pr-3" style={{ opacity: 0.3 }}><KmLink text="Forecast" currentLink={location.pathname + location.search} /></div>
                    <div className="pr-3" style={{ opacity: 0.3 }}><KmLink text="Revenue" currentLink={location.pathname + location.search} /></div>
                    <div className="pr-3" style={{ opacity: 0.3 }}><KmLink text="Maintenance" currentLink={location.pathname + location.search} /></div>
                    <div className="pr-3" ><KmLink text="Profile" to={`${match.url}/${route.profile}${location.search}`} currentLink={location.pathname + location.search} /></div>
                    <div className="pr-3" style={{ opacity: 0.3 }}><KmLink text="Inverters" currentLink={location.pathname + location.search} /></div>
                    <div className="pr-3" style={{ opacity: 0.3 }}><KmLink text="Panels" currentLink={location.pathname + location.search} /></div>
                    <div className="pr-3"><KmLink text="Report" to={`${match.url}/${route.report}${location.search}`} currentLink={location.pathname + location.search} /></div>
                </div>
                {/* <div className="py-1 d-flex flex-direction-row" style={{ overflowX: 'auto' }}>
                    <div className="pr-3"><KmLink text="Dashboard" to={`${match.url}/${route.dashboard}${location.search}`} currentLink={location.pathname + location.search} /></div>
                    <div className="pr-3"><KmLink text="Forecast" to={`${match.url}/${route.forecast}${location.search}`} currentLink={location.pathname + location.search} /></div>
                    <div className="pr-3"><KmLink text="Revenue" to={`${match.url}/${route.revenue}${location.search}`} currentLink={location.pathname + location.search} /></div>
                    <div className="pr-3"><KmLink text="Maintenance" to={`${match.url}/${route.maintenance}${location.search}`} currentLink={location.pathname + location.search} /></div>
                    <div className="pr-3"><KmLink text="Profile" to={`${match.url}/${route.profile}${location.search}`} currentLink={location.pathname + location.search} /></div>
                    <div className="pr-3"><KmLink text="Inverters" to={`${match.url}/${route.inverter}${location.search}`} currentLink={location.pathname + location.search} /></div>
                    <div className="pr-3"><KmLink text="Panels" to={`${match.url}/${route.panel}${location.search}`} currentLink={location.pathname + location.search} /></div>
                    <div className="pr-3"><KmLink text="Report" to={`${match.url}/${route.report}${location.search}`} currentLink={location.pathname + location.search} /></div>
                </div> */}
                <div style={{ flex: 1 }} />
                <KmDropdown
                    labelHide={true}
                    onClick={() => console.log('click')}
                    selectedItem={{ icon: <AlertsNavbar warning={warning} bad={bad} good={good} /> }}
                    data={[
                        { text: 'Alerts' },
                        { text: 'Rule Setup and Management' },
                    ]}
                    style={{ backgroundColor: ' #2244aa', color: '#ffffff' }}
                />
            </div>
        </div >
    )
}

export default withRouter(withMedia(SiteNavbar))

const AlertsNavbar = props => {
    const { warning, bad, good } = props
    return (
        <div className="d-flex align-items-center pr-2 pt-2">
            <div className="d-flex pl-3" style={{ fontSize: 16, color: 'gray' }}>{"Alerts"}</div>&nbsp;
            <div className="d-flex align-items-center py-1 px-3" style={{ backgroundColor: '#FDEDB2', borderRadius: 40, fontSize: 12 }}><i className="fa fa-circle pr-1" style={{ color: 'orange', fontSize: 10 }} />{warning}</div>&nbsp;
            <div className="d-flex align-items-center py-1 px-3" style={{ backgroundColor: '#FBD2B3', borderRadius: 40, fontSize: 12 }}><i className="fa fa-circle pr-1" style={{ color: 'red', fontSize: 10 }} />{bad}</div>&nbsp;
            <div className="d-flex align-items-center py-1 px-3" style={{ backgroundColor: '#DCEF93', borderRadius: 40, fontSize: 12 }}><i className="fa fa-circle pr-1" style={{ color: 'green', fontSize: 10 }} />{good}</div>
            <i className="fa fa-caret-down pl-2" style={{ fontSize: 18, color: 'gray' }} />
        </div>
    )
} 
