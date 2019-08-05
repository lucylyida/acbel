import React from 'react'
import Capacity from '../../../assets/icons/CapacityIcon';

const LeftSidebar = props => {
    const { online, offline, siteChoose, active, siteName, efficiency, capacity } = props
    return (
        <div className="px-3 pb-5" style={{ background: '#193D91', borderRadius: 4 }}>

            <div className="d-flex align-items-center justify-content-between">
                <div style={{ color: 'white', fontWeight: 'bold' }}>{"Sites"}</div>
                <div style={{ color: 'grey', fontSize: 30 }}>&times;</div>
            </div>

            <div className="p-2 my-2" style={{ background: '#153784', borderRadius: 4 }}>

                <div className="d-flex py-1">
                    <Capacity />
                    <div className="pl-2">
                        <div style={{ color: 'white', fontSize: 12, fontWeight: "bold" }}>{"Global"}</div>
                        <div className='d-flex' style={{ fontSize: 12 }}>
                            <div style={{ color: 'grey', }}>{"Online:"}</div>
                            <div className="px-1" style={{ color: 'white', fontWeight: "bold" }}>{online}</div>
                            <div style={{ color: 'white', fontWeight: "bold" }}>{"Sites"}</div>
                        </div>
                        <div className='d-flex' style={{ fontSize: 12 }}>
                            <div style={{ color: 'grey', }}>{"Offline:"}</div>
                            <div className="px-1" style={{ color: 'white', fontWeight: "bold" }}>{offline}</div>
                            <div style={{ color: 'white', fontWeight: "bold" }}>{"Sites"}</div>
                        </div>
                    </div>
                </div>

                {
                    siteChoose ?
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
                                <div className="text-truncate" style={{ color: 'white', fontSize: 12, fontWeight: "bold", width: 150 }}>
                                    {siteName}
                                </div>
                                <div className='d-flex' style={{ fontSize: 12 }}>
                                    <div style={{ color: 'grey', }}>{"Current Capacity:"}</div>
                                    <div className="px-1" style={{ color: 'white', fontWeight: "bold" }}>{capacity}</div>
                                    <div style={{ color: 'white', fontWeight: "bold" }}>{"kW"}</div>
                                </div>
                                <div className='d-flex' style={{ fontSize: 12 }}>
                                    <div style={{ color: 'grey', }}>{"Efficiency:"}</div>
                                    <div className="px-1" style={{ color: 'white', fontWeight: "bold" }}>{efficiency}</div>
                                    <div style={{ color: 'white', fontWeight: "bold" }}>{"%"}</div>
                                </div>
                            </div>
                        </div>
                        : null
                }

            </div>

            <div className='d-flex justify-content-between py-1' style={{ color: 'white' }}>
                <div style={{ fontWeight: 'bold' }}>{"Comparison"}</div>
                <div><i className="fa fa-caret-right" /></div>
            </div>

            <div className='d-flex justify-content-between py-1' style={{ color: 'white' }}>
                <div style={{ fontWeight: 'bold' }}>{"Maintenance"}</div>
                <div><i className="fa fa-caret-right" /></div>
            </div>

            <div className='d-flex justify-content-between py-1' style={{ color: 'white' }}>
                <div style={{ fontWeight: 'bold' }}>{"Reports"}</div>
                <div><i className="fa fa-caret-right" /></div>
            </div>

            <div className='d-flex justify-content-between py-1' style={{ color: 'white' }}>
                <div style={{ fontWeight: 'bold' }}>{"Adminstration"}</div>
                <div><i className="fa fa-caret-right" /></div>
            </div>

        </div>
    )
}

export default LeftSidebar;