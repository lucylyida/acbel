import React, { useState } from "react"
// import moment from 'moment'
// import { Route, Link, Switch, Redirect, } from "react-router-dom"

import { fsc } from '../../../helper/fontColorHelper'
import { withMedia } from 'react-media-query-hoc'
import KmTable from '../../../kumocom/KmTable'
import { memoize } from 'react-data-table-component'
import tableTheme from "../../home/containers/tableTheme"

import Acbel_Logo from '../../../assets/icons/Acbel_Logo'
import SolarPanel_logo from '../../../assets/icons/solarpanel_icn'
import Power_icon from '../../../assets/icons/Power_icon'
import Money_Icon from '../../../assets/icons/Money_Icon'


const MaintenanceSideListContainer = props => {
    const { media, /*match*/ } = props

    return (
        <div className={`container-fluid py-2 ${media.mobile ? "px-1" : "px-4"}`}>
            <div className="py-3">
                <CollapseTable media={media} noSchedule={4} />
            </div>
            <div className="py-3">
                <CollapseTable media={media} noSchedule={5} />
            </div>   
        </div>
    )
}

export default withMedia(MaintenanceSideListContainer)

const data = [
    { id: 1, supplier: 'Taoyuan Xiwu-Dayang', siteicon: <Acbel_Logo />, type: 'WaterProofing Maintenance', startTime: '09:00AM', cost: "55,000", description: "Database and Maintenance", edit: " EDIT", },
    { id: 2, supplier: 'Organic Farmers Association', siteicon: <Power_icon />, type: 'Annual Maintenance', startTime: '11:00AM', cost: "8,020", description: "Database and Maintenance", edit: " EDIT", },
    { id: 3, supplier: 'SMD Site', siteicon: <Money_Icon />, type: 'WaterProofing Maintenance', startTime: '09:00AM ', cost: "55,000", description: "Inverter 003 check up", edit: " EDIT", },
    { id: 4, supplier: 'Rice Drying Field', siteicon: <SolarPanel_logo />, type: 'Annual Maintenance', startTime: '11:00AM', cost: "8,020", description: "Inverter 003 check up", edit: " EDIT", },
];

const columns = memoize((media, handleClick) => [
    {
        name: "SUPPLIER",
        selector: 'supplier',
        grow: 3,
        cell: row => <div className="d-flex justify-content-center align-items-center">
            <div className="p-2 rounded text-center">{row.siteicon}</div>
            <div className="px-2">{row.supplier} </div>
        </div>

    },
    {
        name: 'TYPE',
        selector: 'type',

    },
    {
        name: 'START TIME',
        selector: 'startTime',

    },
    {
        name: 'COST(NT$)',
        selector: 'cost',

    },
    {
        name: 'DESCRIPTION',
        selector: 'description',


    },
    {
        name: '',
        selector: 'edit',
        allowOverflow: true,
        cell: row => <div style={{ cursor: 'pointer', fontSize: fsc(media, 13), color: '#0B3D92' }}><span className="px-1"><i className="fas fa-pencil-alt" /></span> {row.edit}</div>
    }

])

const CollapseTable = ({media, noSchedule }) => {
    const [expand, setExpand] = useState(true)
    return (
        <div>
            <div className="d-flex justify-content-between">
                <div className="d-flex align-items-sm-center align-content-sm-center align-items-sm-start justify-content-sm-center">
                    <span  className="px-2">June 17 </span>
                    <div style={{ width: 35, height: 35, borderRadius: '50%', display:'inline-block',padding:3}} 
                        className="d-flex justify-content-center align-items-center bg-primary text-white ">{noSchedule}</div>
                    <span onClick={() => setExpand((!expand))} className="px-2" style={{ cursor: 'pointer' }}> <span ><i className={`fas ${expand ?`fa-sort-up` :`fa-sort-down` }`} /></span></span>
                </div>
                <div className="font-weight-bold " style={{ fontSize: fsc(media, 15) }}>{"Total Cost:NT$ 126,400.00"}</div>
            </div>
            <div className={`collapse show`}>
                <KmTable
                    columns={columns(media)}
                    data={data}
                    keyField={"id"}
                    defaultSortField={"id"}
                    highlightOnHover={true}
                    style={{ borderRadius: 6, whiteSpace: 'nowrap', }}
                    customTheme={tableTheme(media)}
                    pagination={false}
                    paginationDefaultPage={1}
                    paginationTotalRows={data.length}
                    paginationPerPage={5}
                    customPagination={true}
                />
            </div>
        </div>
    )
}

// export const CollapseTable2 = ({media}) =>{
//     const [expand, setExpand] = useState(true)
//     return(
//         <div>
//             <div className="d-flex justify-content-between pt-4">
//                 <div className="d-flex align-items-sm-center align-content-sm-center justify-content-sm-center">
//                     <span  className="px-2">June 18 </span>
//                     <span style={{ width: 35, height: 35, borderRadius: '50%',textAlign:'center', display:'inline-block',padding:3}} className="align-self-center align-self-sm-center bg-primary text-white ">{"5"}</span>
//                     <span onClick={() => setExpand((!expand))} className="px-2" style={{ cursor: 'pointer' }}> <span ><i className={`fas ${expand ?`fa-sort-up` :`fa-sort-down` }`} /></span></span>
//                 </div>
//                 <div className="font-weight-bold " style={{ fontSize: fsc(media, 15) }}>{"Total Cost:NT$ 126,400.00"}</div>
//             </div>
//             <div className={`collapse ${expand ? `show` : `none`}`}>
//                 <KmTable
//                     columns={columns(media)}
//                     data={data}
//                     keyField={"id"}
//                     defaultSortField={"id"}
//                     highlightOnHover={true}
//                     style={{ borderRadius: 6, whiteSpace: 'nowrap', }}
//                     customTheme={tableTheme(media)}
//                     pagination={false}
//                     paginationDefaultPage={1}
//                     paginationTotalRows={data.length}
//                     paginationPerPage={5}
//                     customPagination={true}
//                 />
//             </div>
//         </div>
//     )
// }