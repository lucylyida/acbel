import React, { useState } from "react"
import moment from 'moment'
import { withMedia } from 'react-media-query-hoc'
import { fsc, numberFormat } from '../../../helper/fontColorHelper'
import MaintenanceInfoView from "../components/MaintenanceInfoView";
import MaintenanceItemCardView from "../components/MaintenanceItemCardView";
import MaintenanceTableView from "../components/MaintenanceTableView";

const MaintenanceContainer = props => {
    const { media } = props
    const [left, setLeft] = useState(true)
    const [right, setRight] = useState(false)
    const move = 500
    const RightButton = () => {
        const elmt = document.getElementById('box')
        setLeft(false)
        elmt.scrollLeft += move
        if (elmt.scrollWidth - (elmt.scrollLeft + elmt.offsetWidth) <= 500) setRight(true)
    }
    const LeftButton = () => {
        const elmt = document.getElementById('box')
        elmt.scrollLeft -= move
        if (elmt.scrollLeft <= move) setLeft(true)
        setRight(false)
    }
    return (
        <div className="container-fluid p-1">

            <MaintenanceInfoView />

            <div id="box" style={{ overflow: 'hidden', scrollBehavior: 'smooth' }}>
                <div className="d-flex" >
                    {
                        maintenanceData.map((v, k) =>
                            <div key={k} className={k === 0 ? 'pr-2' : k === maintenanceData.length - 1 ? 'pl-2' : 'px-2'}>
                                <MaintenanceItemCardView type={v.type} desc={v.desc} date={v.date} time={v.time} supplier={v.supplier} />
                            </div>
                        )
                    }
                </div>
            </div>

            {
                !media.mobile ?
                    <div className="d-flex justify-content-between" style={{ position: "relative", top: -140 }}>
                        <i id="rightArrow" className="fa fa-chevron-circle-left"
                            style={{
                                color: left ? '#00000000' : '#00000055', fontSize: 30,
                            }}
                            onClick={LeftButton}
                            onMouseOver={e => document.getElementById('rightArrow').style.color = left ? '#00000000' : '#000000'}
                            onMouseOut={e => document.getElementById('rightArrow').style.color = left ? '#00000000' : '#00000055'}
                        />
                        <i id="leftArrow" className="fa fa-chevron-circle-right"
                            style={{
                                color: right ? '#00000000' : '#00000055', fontSize: 30,
                            }}
                            onClick={RightButton}
                            onMouseOver={e => document.getElementById('leftArrow').style.color = right ? '#00000000' : '#000000'}
                            onMouseOut={e => document.getElementById('leftArrow').style.color = right ? '#00000000' : '#00000055'}
                        />
                    </div>
                    : null
            }

            <MaintenanceTableView />

        </div>
    )
}

export default withMedia(MaintenanceContainer)

const maintenanceData = [
    { id: 1, type: 'Ad-Hoc Maintenance', desc: 'Database and Server Maintenance', date: '20 JUN', time: '09:00 AM' },
    { id: 2, type: 'Ad-Hoc Maintenance', desc: 'Database and Server Maintenance', date: '20 JUN', time: '09:00 AM' },
    { id: 3, type: 'Ad-Hoc Maintenance', desc: 'Database and Server Maintenance', date: '20 JUN', time: '09:00 AM' },
    { id: 4, type: 'Ad-Hoc Maintenance', desc: 'Database and Server Maintenance', date: '20 JUN', time: '09:00 AM' },
    { id: 5, type: 'Ad-Hoc Maintenance', desc: 'Database and Server Maintenance', date: '20 JUN', time: '09:00 AM' },
    { id: 6, type: 'Ad-Hoc Maintenance', desc: 'Database and Server Maintenance', date: '20 JUN', time: '09:00 AM' },
    { id: 7, type: 'Ad-Hoc Maintenance', desc: 'Database and Server Maintenance', date: '20 JUN', time: '09:00 AM' },
    { id: 8, type: 'Ad-Hoc Maintenance', desc: 'Database and Server Maintenance', date: '20 JUN', time: '09:00 AM' },
    { id: 9, type: 'Ad-Hoc Maintenance', desc: 'Database and Server Maintenance', date: '20 JUN', time: '09:00 AM' },
    { id: 10, type: 'Ad-Hoc Maintenance', desc: 'Database and Server Maintenance', date: '20 JUN', time: '09:00 AM' },
]