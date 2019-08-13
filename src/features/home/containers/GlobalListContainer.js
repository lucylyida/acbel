import React, { useState } from "react"
import { Link } from "react-router-dom"
import * as route from "../../../config/route.config"
import { dec } from "../../../network-sec/cypher"
import DataTable, { memoize } from 'react-data-table-component';
import tableTheme from "./tableTheme"

import { withMedia } from 'react-media-query-hoc'
import { fsc } from "../../../helper/fontColorHelper";

const GlobalListContainer = props => {
    const { location, media } = props
    const [page, setPage] = useState(1)
    // const queryData = dec(querystring.parse(location.search).had)
    const handleClick = () => props.history.push(`/${route.site}/${1}${location.search}`)
    return (
        <div className="py-2">
            <div className="">
                <div className="py-2" style={{}}>
                    <DataTable
                        columns={columns(media, handleClick)}
                        data={data}
                        keyField={"id"}
                        defaultSortField={"id"}
                        highlightOnHover={true}
                        style={{ borderRadius: 6, whiteSpace: 'nowrap', }}
                        customTheme={tableTheme(media)}
                        pagination={true}
                        paginationDefaultPage={1}
                        // paginationComponentOptions={{ rowsPerPageText: 'Rows per page:', rangeSeparatorText: 'of' }}
                        paginationTotalRows={data.length}
                        paginationPerPage={10}
                        paginationComponent={() => <CustomPagination media={media} setPage={setPage} />}                       
                    />
                </div>
            </div>
        </div>
    )
}

export default withMedia(GlobalListContainer)

const data = [
    { id: 1, site: '01 Conan the Barbarian', capacity: '1981', currentOutput: 23, efficiency: "Site1", siteStatus: "col21", more: "MORE INFO", },
    { id: 2, site: '02 Conan the Barbarian', capacity: '1982', currentOutput: 25, efficiency: "Site2", siteStatus: "col21", more: "MORE INFO", },
    { id: 3, site: '03 Conan the Barbarian', capacity: '1983', currentOutput: 43, efficiency: "Site3", siteStatus: "col21", more: "MORE INFO", },
    { id: 4, site: '04 Conan the Barbarian', capacity: '1984', currentOutput: 23, efficiency: "Site1", siteStatus: "col21", more: "MORE INFO", },
    { id: 5, site: '05 Conan the Barbarian', capacity: '1985', currentOutput: 25, efficiency: "Site2", siteStatus: "col21", more: "MORE INFO", },
    { id: 6, site: '06 Conan the Barbarian', capacity: '1983', currentOutput: 43, efficiency: "Site3", siteStatus: "col21", more: "MORE INFO", },
    { id: 7, site: '07 Conan the Barbarian', capacity: '1981', currentOutput: 23, efficiency: "Site1", siteStatus: "col21", more: "MORE INFO", },
    { id: 8, site: '08 Conan the Barbarian', capacity: '1982', currentOutput: 25, efficiency: "Site2", siteStatus: "col21", more: "MORE INFO", },
    { id: 9, site: '09 Conan the Barbarian', capacity: '1983', currentOutput: 43, efficiency: "Site3", siteStatus: "col21", more: "MORE INFO", },
    { id: 10, site: '10 Conan the Barbarian', capacity: '1984', currentOutput: 23, efficiency: "Site1", siteStatus: "col21", more: "MORE INFO", },
    { id: 11, site: '11 Conan the Barbarian', capacity: '1985', currentOutput: 25, efficiency: "Site2", siteStatus: "col21", more: "MORE INFO", },
    { id: 12, site: '12 Conan the Barbarian', capacity: '1983', currentOutput: 43, efficiency: "Site3", siteStatus: "col21", more: "MORE INFO", },
];
const columns = memoize((media, handleClick) => [
    {
        name: 'SITE',
        selector: 'site',
        sortable: true,
        grow: 2,
        cell: row => <div style={{ color: '#153784', fontWeight: 700 }}>{row.site}</div>
    },
    {
        name: 'CAPACITY(kW)',
        selector: 'capacity',
        sortable: true,
        right: true,
        minWidth: '120px',
    },
    {
        name: 'CURRENT OUTPUT(kW)',
        selector: 'currentOutput',
        sortable: true,
        right: true,
        minWidth: '170px'
    },
    {
        name: 'EFFICIENCY(%)',
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
        minWidth: '130px',
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        cell: row => <div onClick={handleClick} style={{ cursor: 'pointer', fontSize: fsc(media, 13), color: '#a3a3a2' }}>{row.more}<span className="pl-2"><i className="fa fa-caret-right" /></span></div>
    },
]);

const CustomPagination = props => {
    const { media, setPage } = props
    return (
        <div className={`w-100 d-flex align-items-center ${media.mobile ? 'justify-content-start' : 'justify-content-center'}`}>
            <div onClick={() => setPage(1)} className="px-1">
                <span className="p-2"
                    style={{ fontSize: 11, color: 'white', backgroundColor: "#153784", borderRadius: 4 }}
                >
                    {"1"}
                </span>
            </div>
            <div onClick={() => setPage(2)} className="px-1">
                <span className="p-2"
                    style={{ fontSize: 11, color: 'black', backgroundColor: "white", borderRadius: 4 }}
                >
                    {"2"}
                </span>
            </div>
            <div onClick={() => setPage(3)} className="px-1">
                <span className="p-2"
                    style={{ fontSize: 11, color: 'black', backgroundColor: "white", borderRadius: 4 }}
                >
                    {"3"}
                </span>
            </div>
            <div>{"..."}</div>
            <div onClick={() => setPage(10)} className="px-1">
                <span className="p-2"
                    style={{ fontSize: 11, color: 'black', backgroundColor: "white", borderRadius: 4 }}
                >
                    {"10"}
                </span>
            </div>
        </div>
    )
}