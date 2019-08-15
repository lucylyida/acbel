import React, { useState } from "react"
import moment from 'moment'
import { withMedia } from 'react-media-query-hoc'
import { fsc, numberFormat } from '../../../helper/fontColorHelper'
import MaintenanceInfoView from "../components/MaintenanceInfoView";
import MaintenanceItemCardView from "../components/MaintenanceItemCardView";
import MaintenanceTableView from "../components/MaintenanceTableView";

const MaintenanceContainer = props => {
    const { media } = props
    // const [left, setLeft] = useState(false)
    // const [right, setRight] = useState(false)
    const [left1, setLeft1] = useState(true)
    const [right1, setRight1] = useState(false)
    const [filter, setFilter] = useState({ id: 2 })
    const move = 500

    const RightButton = () => {
        const elmt = document.getElementById('box')
        setLeft1(false)
        elmt.scrollLeft += move
        if (elmt.scrollWidth - (elmt.scrollLeft + elmt.offsetWidth) <= move) setRight1(true)
    }
    const LeftButton = () => {
        const elmt = document.getElementById('box')
        elmt.scrollLeft -= move
        if (elmt.scrollLeft <= move) setLeft1(true)
        setRight1(false)
    }

    const temp = filter.id === 2
        ? maintenanceData.filter(v => v.type === 'Ad-Hoc')
        : filter.id === 3
            ? maintenanceData.filter(v => v.type === 'Water Proofing')
            : filter.id === 4
                ? maintenanceData.filter(v => v.type === 'Annual')
                : maintenanceData

    const contentSize = 290 * temp.length

    // const isArrowShow = () => {
    //     const cond = contentSize < window.innerWidth
    //     setLeft(cond)
    //     setRight(cond)
    // }

    // setLeft(contentSize < window.innerWidth)
    // setRight(contentSize < window.innerWidth)

    // window.onresize = isArrowShow
    
    const slider = temp.map((v, k) =>
        <div key={k} style={{ paddingLeft: 5, paddingRight: 5 }
        }>
            <MaintenanceItemCardView type={v.type} desc={v.desc} date={v.date} time={v.time} supplier={v.supplier} />
        </div>
    )


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
                            color: contentSize < window.innerWidth ? '#00000000' : left1 ? '#00000000' : '#00000055',
                            fontSize: 30,
                            cursor: contentSize < window.innerWidth ? null : left1 ? null : 'pointer'
                        }}
                        onClick={contentSize >= window.innerWidth ? LeftButton : null}
                        onMouseOver={e => document.getElementById('rightArrow').style.color = contentSize < window.innerWidth ? '#00000000' : left1 ? '#00000000' : '#000000'}
                        onMouseOut={e => document.getElementById('rightArrow').style.color = contentSize < window.innerWidth ? '#00000000' : left1 ? '#00000000' : '#00000055'}
                    />
                    <i id="leftArrow" className="fa fa-chevron-circle-right"
                        style={{
                            color: contentSize < window.innerWidth ? '#00000000' : right1 ? '#00000000' : '#00000055',
                            fontSize: 30,
                            cursor: contentSize < window.innerWidth ? null : right1 ? null : 'pointer'
                        }}
                        onClick={contentSize >= window.innerWidth ? RightButton : null}
                        onMouseOver={e => document.getElementById('leftArrow').style.color = contentSize < window.innerWidth ? '#00000000' : right1 ? '#00000000' : '#000000'}
                        onMouseOut={e => document.getElementById('leftArrow').style.color = contentSize < window.innerWidth ? '#00000000' : right1 ? '#00000000' : '#00000055'}
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