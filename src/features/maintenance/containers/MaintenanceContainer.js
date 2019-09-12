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
    const [filter, setFilter] = useState({ id: 1 })    
    const [width, setWidth] = useState(window.innerWidth)
    const move = 500

    const RightButton = () => {
        const elmt = document.getElementById('box')
        setLeft(false)
        elmt.scrollLeft += move
        if (elmt.scrollWidth - (elmt.scrollLeft + elmt.offsetWidth) <= move) setRight(true)
    }
    const LeftButton = () => {
        const elmt = document.getElementById('box')
        elmt.scrollLeft -= move
        if (elmt.scrollLeft <= move) setLeft(true)
        setRight(false)
    }

    const temp = filter.id === 2
        ? maintenanceData.filter(v => v.type === 'Ad-Hoc')
        : filter.id === 3
            ? maintenanceData.filter(v => v.type === 'Water Proofing')
            : filter.id === 4
                ? maintenanceData.filter(v => v.type === 'Annual')
                : maintenanceData

    const contentSize = 290 * temp.length

    const isShowArrow = contentSize < width - 55

    const slider = temp.map((v, k) =>
        <div key={k} style={{ paddingLeft: 5, paddingRight: 5 }}>
            <MaintenanceItemCardView type={v.type} desc={v.desc} date={v.date} time={v.time} supplier={v.supplier} />
        </div>
    )

    window.onresize = () => setWidth(window.innerWidth)

    return (
        <div className="container-fluid p-0">

            <MaintenanceInfoView filter={filter} setFilter={setFilter} contentSize={contentSize} />

            <div id="box" style={{ overflow: media.mobile ? 'auto' : 'hidden', scrollBehavior: 'smooth' }}>
                <div className="d-flex" >{slider}</div>
            </div>

            {
                !media.mobile &&
                <div className="d-flex justify-content-between" style={{ position: "relative", top: -140 }}>
                    <i id="rightArrow" className="fa fa-chevron-circle-left"
                        style={{
                            color: isShowArrow ? '#00000000' : left ? '#00000000' : '#00000055',
                            fontSize: 30,
                            cursor: isShowArrow ? null : left ? null : 'pointer'
                        }}
                        onClick={!isShowArrow ? LeftButton : null}
                        onMouseOver={e => document.getElementById('rightArrow').style.color = isShowArrow ? '#00000000' : left ? '#00000000' : '#000000'}
                        onMouseOut={e => document.getElementById('rightArrow').style.color = isShowArrow ? '#00000000' : left ? '#00000000' : '#00000055'}
                    />
                    <i id="leftArrow" className="fa fa-chevron-circle-right"
                        style={{
                            color: isShowArrow ? '#00000000' : right ? '#00000000' : '#00000055',
                            fontSize: 30,
                            cursor: isShowArrow ? null : right ? null : 'pointer'
                        }}
                        onClick={!isShowArrow ? RightButton : null}
                        onMouseOver={e => document.getElementById('leftArrow').style.color = isShowArrow ? '#00000000' : right ? '#00000000' : '#000000'}
                        onMouseOut={e => document.getElementById('leftArrow').style.color = isShowArrow ? '#00000000' : right ? '#00000000' : '#00000055'}
                    />
                </div>
            }

            <MaintenanceTableView />

        </div>
    )
}

export default withMedia(MaintenanceContainer)

const maintenanceData = [
    { id: 1, type: 'Ad-Hoc', desc: 'Database and Server Maintenance', date: '20 JUN', time: '09:00 AM', supplier: 'Huakai Farmer Association' },
    { id: 2, type: 'Annual', desc: 'Inverter 003 check up', date: '20 JUN', time: '01:30 PM', supplier: 'Huakai Farmer Association' },
    { id: 3, type: 'Water Proofing', desc: 'Database and Server Maintenance', date: '22 JUN', time: '06:45 PM', supplier: 'Evercomm' },
    { id: 4, type: 'Annual', desc: 'Database and Server Maintenance', date: '22 JUN', time: '01:30 PM', supplier: 'Evercomm' },
    { id: 5, type: 'Annual', desc: 'Database and Server Maintenance', date: '22 JUN', time: '01:30 PM', supplier: 'Huakai Farmer Association' },
    { id: 6, type: 'Water Proofing', desc: 'Inverter 003 check up', date: '23 JUN', time: '06:45 PM', supplier: 'Huakai Farmer Association' },
    { id: 7, type: 'Ad-Hoc', desc: 'Inverter 003 check up', date: '23 JUN', time: '06:45 PM', supplier: 'Evercomm' },
    { id: 8, type: 'Water Proofing', desc: 'Database and Server Maintenance', date: '24 JUN', time: '01:30 PM', supplier: 'Huakai Farmer Association' },
    { id: 9, type: 'Ad-Hoc', desc: 'Inverter 003 check up', date: '25 JUN', time: '01:30 PM', supplier: 'Huakai Farmer Association' },
    { id: 10, type: 'Annual', desc: 'Database and Server Maintenance', date: '25 JUN', time: '09:00 AM', supplier: 'Evercomm' },
]