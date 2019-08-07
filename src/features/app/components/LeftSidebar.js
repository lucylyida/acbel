import React from 'react'
import { withRouter } from "react-router-dom"
import Capacity from '../../../assets/icons/CapacityIcon';
import HomeIcon from "../../../assets/icons/Home-Icon"
import querystring from "query-string"

import { _hadleMenuClick } from "./GlobalNavbar"
const LeftSidebar = props => {
    const { online, offline, active, siteName, efficiency, capacity, location, match, history } = props
    const queryParams = querystring.parse(location.search)
    const leftSidebarVisible = queryParams.lsb

    if (leftSidebarVisible === undefined || leftSidebarVisible === "false") return null
    else
        return (
            <div className="pb-3 h-100 pr-2">
                <div className="p-3 h-100" style={{ background: '#193D91', borderRadius: 4, minWidth: 300 }}>

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

                    <div className='d-flex justify-content-between py-2' style={{ color: 'white', cursor: "pointer" }}>
                        <div style={{ fontWeight: 'bold' }}>{"Comparison"}</div>
                        <div><i className="fa fa-caret-right" /></div>
                    </div>

                    <div className='d-flex justify-content-between py-2' style={{ color: 'white', cursor: "pointer" }}>
                        <div style={{ fontWeight: 'bold' }}>{"Maintenance"}</div>
                        <div><i className="fa fa-caret-right" /></div>
                    </div>

                    <div className='d-flex justify-content-between py-2' style={{ color: 'white', cursor: "pointer" }}>
                        <div style={{ fontWeight: 'bold' }}>{"Reports"}</div>
                        <div><i className="fa fa-caret-right" /></div>
                    </div>

                    <div className='d-flex justify-content-between py-2' style={{ color: 'white' }}>
                        <div style={{ fontWeight: 'bold' }}>{"Adminstration"}</div>
                        <div><i className="fa fa-caret-right" /></div>
                    </div>

                </div>
            </div>
        )
}

export default withRouter(LeftSidebar);