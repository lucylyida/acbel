import React from "react"
import { Link } from "react-router-dom"
import * as route from "../../../config/route.config"
import { dec } from "../../../network-sec/cypher"
import DataTable from 'react-data-table-component';
import tableTheme from "./tableTheme"

const GlobalListContainer = props => {
    const { location } = props
    // const queryData = dec(querystring.parse(location.search).had)

    return (
        <div className="py-2">
            <div className="" style={{ fontSize: 20 }}>
                <Link to={`/${route.site}/${1}${location.search}`}>
                    Organic Farmer's Association
                </Link>
                <div className="py-2" style={{  }}>
                    <DataTable
                        columns={columns}
                        data={data}
                        keyField={"id"}
                        highlightOnHover={true}
                        style={{ borderRadius: 6  }}
                        customTheme = {tableTheme}
                        pagination={true}
                        // paginationComponentOptions={{ rowsPerPageText: 'Rows per page:', rangeSeparatorText: 'of' }}
                        paginationTotalRows={data.length}
                        paginationPerPage={6}
                    />
                </div>
            </div>
        </div>
    )
}

export default GlobalListContainer

const data = [
    { id: 1, site: '1 Conan the Barbarian', capacity: '1981', currentOutput: 23, efficiency: "Site1", siteStatus: "col21", more: "MORE INFO", },
    { id: 2, site: '2 Conan the Barbarian', capacity: '1982', currentOutput: 25, efficiency: "Site2", siteStatus: "col21", more: "MORE INFO", },
    { id: 3, site: '3 Conan the Barbarian', capacity: '1983', currentOutput: 43, efficiency: "Site3", siteStatus: "col21", more: "MORE INFO", },
    { id: 4, site: '4 Conan the Barbarian', capacity: '1984', currentOutput: 23, efficiency: "Site1", siteStatus: "col21", more: "MORE INFO", },
    { id: 5, site: '5 Conan the Barbarian', capacity: '1985', currentOutput: 25, efficiency: "Site2", siteStatus: "col21", more: "MORE INFO", },
    { id: 6, site: '6 Conan the Barbarian', capacity: '1983', currentOutput: 43, efficiency: "Site3", siteStatus: "col21", more: "MORE INFO", },
    { id: 7, site: '7 Conan the Barbarian', capacity: '1981', currentOutput: 23, efficiency: "Site1", siteStatus: "col21", more: "MORE INFO", },
    { id: 8, site: '8 Conan the Barbarian', capacity: '1982', currentOutput: 25, efficiency: "Site2", siteStatus: "col21", more: "MORE INFO", },
    { id: 9, site: '9 Conan the Barbarian', capacity: '1983', currentOutput: 43, efficiency: "Site3", siteStatus: "col21", more: "MORE INFO", },
    { id: 10, site: '10 Conan the Barbarian', capacity: '1984', currentOutput: 23, efficiency: "Site1", siteStatus: "col21", more: "MORE INFO", },
    { id: 11, site: '11 Conan the Barbarian', capacity: '1985', currentOutput: 25, efficiency: "Site2", siteStatus: "col21", more: "MORE INFO", },
    { id: 12, site: '12 Conan the Barbarian', capacity: '1983', currentOutput: 43, efficiency: "Site3", siteStatus: "col21", more: "MORE INFO", },
];
const columns = [
    {
        name: 'SITE',
        selector: 'site',
        sortable: true,
        grow: 2
    },
    {
        name: 'CAPACITY(kW)',
        selector: 'capacity',
        sortable: true,
        right: true,
    },
    {
        name: 'CURRENT OUTPUT(kW)',
        selector: 'currentOutput',
        sortable: true,
        right: true,
    },
    {
        name: 'EFFICIENCY(%)',
        selector: 'efficiency',
        sortable: true,
        right: true,
    },
    {
        name: 'SITE STATUS',
        selector: 'siteStatus',
        sortable: true,
        right: true,
    },
    {
        name: '',
        selector: 'more',
        right: true,
    },
];