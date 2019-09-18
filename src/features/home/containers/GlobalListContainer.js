import React from "react"
import * as route from "../../../config/route.config"
import { dec } from "../../../network-sec/cypher"
import { memoize } from 'react-data-table-component';
import tableTheme from "./tableTheme"

import { withMedia } from 'react-media-query-hoc'
import { fsc } from "../../../helper/fontColorHelper";
import KmTable from '../../../kumocom/KmTable'
import moment from "moment"

import { useSelector, useDispatch } from 'react-redux'

const GlobalListContainer = props => {
    const { location, media } = props
    // const queryData = dec(querystring.parse(location.search).had)   
    const handleClick = (row) => props.history.push(`/${route.site}/${row.vendor_id}/${row.siteid}${location.search}`)

    const state = useSelector(state => state.vendorReducer)
    const siteNameList = state.siteNameList
    const data = siteNameList.map(v => ({
        id: v.id, vendor_id: v.vendor_id, site: v.site_name, capacity: v.capacity_kw, siteid: v.hid,
        currentOutput: v.powerOutput, efficiency: v.efficiencyRa, siteStatus: v.isOnline === true ? "Online" : "Offline",
        more: "MORE INFO"
    }))
    // const sites = siteNameList.map(v => v.vendor_id)
    // console.log({sites})

    return (
        <div className="py-2">
            <div className="">
                <div className="py-2" style={{}}>
                    <KmTable
                        columns={columns(media, handleClick)}
                        data={data}
                        keyField={"id"}
                        defaultSortField={"id"}
                        highlightOnHover={true}
                        style={{ borderRadius: 6, whiteSpace: 'nowrap', }}
                        customTheme={tableTheme(media)}
                        pagination={true}
                        paginationDefaultPage={1}
                        paginationTotalRows={data.length}
                        paginationPerPage={6}
                        customPagination={true}
                    />
                </div>
            </div>
        </div>
    )
}
export default withMedia(GlobalListContainer)

// const data = [
//     { id: 1, site: '01 Conan the Barbarian', capacity: '1981', currentOutput: 23, efficiency: "Site1", siteStatus: "col21", more: "MORE INFO", },
//     { id: 2, site: '02 Conan the Barbarian', capacity: '1982', currentOutput: 25, efficiency: "Site2", siteStatus: "col21", more: "MORE INFO", },
//     { id: 3, site: '03 Conan the Barbarian', capacity: '1983', currentOutput: 43, efficiency: "Site3", siteStatus: "col21", more: "MORE INFO", },
//     { id: 4, site: '04 Conan the Barbarian', capacity: '1984', currentOutput: 23, efficiency: "Site1", siteStatus: "col21", more: "MORE INFO", },
//     { id: 5, site: '05 Conan the Barbarian', capacity: '1985', currentOutput: 25, efficiency: "Site2", siteStatus: "col21", more: "MORE INFO", },
//     { id: 6, site: '06 Conan the Barbarian', capacity: '1983', currentOutput: 43, efficiency: "Site3", siteStatus: "col21", more: "MORE INFO", },
//     { id: 7, site: '07 Conan the Barbarian', capacity: '1981', currentOutput: 23, efficiency: "Site1", siteStatus: "col21", more: "MORE INFO", },
//     { id: 8, site: '08 Conan the Barbarian', capacity: '1982', currentOutput: 25, efficiency: "Site2", siteStatus: "col21", more: "MORE INFO", },
//     { id: 9, site: '09 Conan the Barbarian', capacity: '1983', currentOutput: 43, efficiency: "Site3", siteStatus: "col21", more: "MORE INFO", },
//     { id: 10, site: '10 Conan the Barbarian', capacity: '1984', currentOutput: 23, efficiency: "Site1", siteStatus: "col21", more: "MORE INFO", },
//     { id: 11, site: '11 Conan the Barbarian', capacity: '1985', currentOutput: 25, efficiency: "Site2", siteStatus: "col21", more: "MORE INFO", },
//     { id: 12, site: '12 Conan the Barbarian', capacity: '1983', currentOutput: 43, efficiency: "Site3", siteStatus: "col21", more: "MORE INFO", },
//     { id: 13, site: '13 Conan the Barbarian', capacity: '1983', currentOutput: 43, efficiency: "Site3", siteStatus: "col21", more: "MORE INFO", },
//     { id: 14, site: '14 Conan the Barbarian', capacity: '1983', currentOutput: 43, efficiency: "Site3", siteStatus: "col21", more: "MORE INFO", },
//     { id: 15, site: '15 Conan the Barbarian', capacity: '1983', currentOutput: 43, efficiency: "Site3", siteStatus: "col21", more: "MORE INFO", },
//     { id: 16, site: '16 Conan the Barbarian', capacity: '1983', currentOutput: 43, efficiency: "Site3", siteStatus: "col21", more: "MORE INFO", },
//     { id: 17, site: '17 Conan the Barbarian', capacity: '1983', currentOutput: 43, efficiency: "Site3", siteStatus: "col21", more: "MORE INFO", },
//     { id: 18, site: '18 Conan the Barbarian', capacity: '1983', currentOutput: 43, efficiency: "Site3", siteStatus: "col21", more: "MORE INFO", },
//     { id: 19, site: '19 Conan the Barbarian', capacity: '1983', currentOutput: 43, efficiency: "Site3", siteStatus: "col21", more: "MORE INFO", },
// ];

const columns = memoize((media, handleClick) => [
    {
        name: 'SITE',
        selector: 'site',
        sortable: true,
        minWidth: '300px',
        cell: row => <div style={{ color: '#153784', fontWeight: 700, textAlign: 'center' }}>{row.site}</div>
    },
    {
        name: 'CAPACITY(kW)',
        selector: 'capacity',
        sortable: true,
        right: true,
        minWidth: '120px',
    },
    {
        name: 'POWER OUTPUT(kW)',
        selector: 'currentOutput',
        sortable: true,
        right: true,
        minWidth: '170px'
    },
    {
        name: 'EFFICIENCY (%)',
        selector: 'efficiency',
        sortable: true,
        right: true,
        minWidth: '130px'
    },
    {
        name: 'SITE STATUS',
        selector: 'siteStatus',
        sortable: true,
        right: true,
        minWidth: '110px'
    },
    {
        name: '',
        selector: 'more',
        right: true,
        minWidth: '110px',
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        cell: row => {
            return (
                <div onClick={() => handleClick(row)} style={{ textAlign: 'right', paddingRight: 5, cursor: 'pointer', fontSize: fsc(media, 13), color: '#a3a3a2' }}>{row.more}<span className="pl-2"><i className="fa fa-caret-right" /></span></div>
            )
        }
    },
]);