import React, { useState } from 'react'
import { withRouter } from "react-router-dom"
import Capacity from '../../../assets/icons/CapacityIcon';
import HomeIcon from "../../../assets/icons/Home-Icon"
import querystring from "query-string"

import { withMedia } from 'react-media-query-hoc';
import { fsc } from '../../../helper/fontColorHelper';
import * as route from "../../../config/route.config"
import { _hadleMenuClick } from "./Navbar"
import { useCookies } from 'react-cookie'
import { useDispatch } from 'react-redux'
import ActionType from '../../../action/action'

const LeftSidebar = props => {
    const { online, offline, active, siteName, efficiency, capacity, location, match, history } = props
    const queryParams = querystring.parse(location.search)
    const leftSidebarVisible = queryParams.lsb
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const url = match.path
    const dispatch = useDispatch()
    const pageName = match.params.pageName   
    if (leftSidebarVisible === undefined || leftSidebarVisible === "false") return null
    else
        return (
            <div className="h-100 px-1">

                <div className="d-flex p-3 h-100 flex-column" style={{ background: '#193D91', borderRadius: 4, minWidth: 300 }}>


                    <div className="d-flex align-items-center justify-content-between">
                        <div style={{ color: 'white', fontWeight: 'bold' }}>{"Sites"}</div>
                        <div style={{ color: 'lightgray', fontSize: 30, cursor: "pointer" }} onClick={() => _hadleMenuClick({ history, match, location })}>&times;</div>
                    </div>
                    <div className="py-3">
                        <div className="p-2" style={{ background: '#00000033', borderRadius: 4 }}>
                            <div className="d-flex p-1">
                                <HomeIcon />
                                <div className="pl-2">
                                    <div style={{ color: 'white', fontSize: 13, fontWeight: "bold" }}>{"Global"}</div>
                                    <div className='d-flex' style={{ fontSize: 13 }}>
                                        <div style={{ color: 'lightgray', }}>{"Online:"}</div>
                                        <div className="px-1" style={{ color: 'white', fontWeight: "bold" }}>{online}</div>
                                        <div style={{ color: 'white', fontWeight: "bold" }}>{"Sites"}</div>
                                    </div>
                                    <div className='d-flex' style={{ fontSize: 13 }}>
                                        <div style={{ color: 'lightgray', }}>{"Offline:"}</div>
                                        <div className="px-1" style={{ color: 'white', fontWeight: "bold" }}>{offline}</div>
                                        <div style={{ color: 'white', fontWeight: "bold" }}>{"Sites"}</div>
                                    </div>
                                </div>
                            </div>

                            {
                                siteName &&
                                <div className="d-flex py-1">
                                    <div className='d-flex'>
                                        <Capacity />
                                        {
                                            active !== undefined ?
                                                <div style={{ background: 'white', borderRadius: '50%', width: 9, height: 9, paddingTop: 1, paddingLeft: 1, marginLeft: '-20%' }}>
                                                    <div style={{ borderRadius: '50%', width: 7, height: 7, background: active ? 'green' : 'grey' }} />
                                                </div>
                                                : null
                                        }
                                    </div>
                                    <div className={`${active !== undefined ? '' : 'pl-2'}`}>
                                        <div className="text-truncate" style={{ color: 'white', fontSize: 12, fontWeight: "bold", width: 200 }}>
                                            {siteName}
                                        </div>
                                        <div className='d-flex' style={{ fontSize: 12 }}>
                                            <div style={{ color: 'lightgray', }}>{"Current Capacity:"}</div>
                                            <div className="px-1" style={{ color: 'white', fontWeight: "bold" }}>{capacity}</div>
                                            <div style={{ color: 'white', fontWeight: "bold" }}>{"kW"}</div>
                                        </div>
                                        <div className='d-flex' style={{ fontSize: 12 }}>
                                            <div style={{ color: 'lightgray', }}>{"Efficiency:"}</div>
                                            <div className="px-1" style={{ color: 'white', fontWeight: "bold" }}>{efficiency}</div>
                                            <div style={{ color: 'white', fontWeight: "bold" }}>{"%"}</div>
                                        </div>
                                    </div>
                                </div>
                            }

                        </div>
                    </div>

                    <div className='d-flex justify-content-between py-2' style={{ color: 'white', cursor: "pointer" }} onClick={() => history.push(`/${route.comparison}${location.search}`)} >
                        <div style={{ fontWeight: 'bold' }}>{"Comparison"}</div>
                        <div><i className="fa fa-caret-right" /></div>
                    </div>

                    <div className='d-flex justify-content-between py-2' style={{ color: 'white', cursor: "pointer" }} onClick={() => history.push(`/${route.maintenance}/${route.list}${location.search}`)} >
                        <div style={{ fontWeight: 'bold' }}>{"Maintenance"}</div>
                        <div><i className="fa fa-caret-right" /></div>
                    </div>

                    <div className='d-flex justify-content-between py-2' style={{ color: 'white', cursor: "pointer" }} onClick={() => history.push(`/${route.report}${location.search}`)} >
                        <div style={{ fontWeight: 'bold' }}>{"Reports"}</div>
                        <div><i className="fa fa-caret-right" /></div>
                    </div>

                    <MenuItem
                        text={"Administration"}
                        url={url}
                        pageName={pageName}
                        history={history}
                        pageUrl={"/administration/:pageName"}
                        subItems={[
                            { text: "Profile Settings", clickRoute: `/${route.administration}/${route.profile}`, pageName: route.profile },
                            { text: "User Management", clickRoute: `/${route.administration}/${route.userManagement}`, pageName: route.userManagement }
                        ]}
                    />

                    <SidebarProfile
                        userName={cookies.user.username}
                        userProfile={require('../../../user-profile-image/chris-evans.jpg')}
                        Click={() => history.push(`/${route.administration}/${route.profile}`)}
                        removeCookie={() => {
                            removeCookie('user');
                            dispatch({ type: ActionType.GET_LOGOUT });
                            history.replace(`/${route.login}`);
                        }}
                    />

                </div>

            </div>
        )
}

export default withRouter(withMedia(LeftSidebar));

const MenuItem = props => {
    const { text, history, url, pageName, subItems, pageUrl } = props
    const [collapse, setCollapse] = useState(url !== pageUrl)
    const subItemsView = subItems.map((v, k) => (
        <div key={k} className="pl-4 py-2"
            style={{ color: url === pageUrl && pageName === v.pageName ? "#ffffff" : "#ffffff55" }}
            onClick={() => history.push(v.clickRoute)}>
            <b>{v.text}</b>
        </div>
    ))
    return (
        <div className='' style={{ color: 'white', cursor: "pointer" }}  >
            <div className="d-flex justify-content-between py-2" onClick={() => setCollapse(url !== pageUrl && !collapse)}>
                <div style={{ fontWeight: 'bold' }}>{text}</div>
                <div><i className={`fa fa-caret-${collapse ? "right" : "down"}`} /></div>
            </div>
            <div className={`collapse ${(url === pageUrl || !collapse) && "show"}`}>
                {subItemsView}

            </div>
        </div>
    )
}


const SidebarProfile = (props) => {
    const { userName, userProfile, Click, removeCookie } = props
    return (
        <div className='d-flex text-light mt-auto pt-3 justify-content-between' style={{ borderTop: '1px solid #00000033', fontWeight: 'bold' }}>
            <div style={{ cursor: 'pointer' }} onClick={Click}>
                <img style={{ width: 45, height: 45, marginRight: 10 }} src={userProfile} alt="UserProfile" />
                {userName}
            </div>
            <div style={{ cursor: 'pointer', color: '#B6B6B6', paddingTop: '4px' }}
                onClick={removeCookie}
            >
                <span className='font-weight-light'>Log Out</span>
                <i className="fa fa-sign-out-alt fa-1x p-2"></i>
            </div>
        </div>
    )
}