import React from "react"
import KmTable from '../../../kumocom/KmTable'
import {memoize} from 'react-data-table-component'
import tableTheme from "../../home/containers/tableTheme"
import { withMedia } from 'react-media-query-hoc'
import { fsc, numberFormat } from '../../../helper/fontColorHelper'

const MaintenanceTableView = props => {
    const { media } = props
    return (
        <div className="container-fluid p-0">
            <div className="pb-2" style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>{"HISTORY"}</div>
            <div >
            <KmTable
                    columns={columns(media)}
                    data={data}
                    keyField={"id"}
                    defaultSortField={"id"}
                    highlightOnHover={true}
                    style={{ borderRadius: 6, whiteSpace: 'nowrap', }}
                    customTheme={tableTheme(media)}
                    pagination={true}
                    paginationDefaultPage={1}
                    paginationTotalRows={data.length}
                    paginationPerPage={5 }
                    customPagination={true}
                />
            </div>
        </div>
    )
}

export default withMedia(MaintenanceTableView)

const data = [
    { id: 1, typeofmaintenance: 'Ad-hoc Maintenance' ,  date: '06/16/19', supplier: 'Huakai Farmer', cost: "65,000",description:"Database and Maintenance" },
    { id: 2, typeofmaintenance: 'Waterproofing Maintenance' ,  date: '06/16/19', supplier: 'Evercom', cost: "129,475",description:"Database and Maintenance" },
    { id: 3, typeofmaintenance: 'Waterproofing Maintenance' ,  date: '06/14/19', supplier: 'SM ', cost: "1,205",description:"Inverter 003 check up" },
    { id: 4, typeofmaintenance: 'Ad-hoc Maintenance' ,  date: '06/10/19', supplier: 'Huakai Farmer', cost: "5,889.67",description:"Inverter 003 check up" },
    { id: 5, typeofmaintenance: 'Annual Maintenance' ,  date: '06/10/19', supplier: 'Huakai Farmer', cost: "907.65",description:"Database Maintenance" },
    
];

const columns = memoize((media, handleClick) => [
    {
        name: "TYPE OF MAINTENANCE",
        selector: 'typeofmaintenance',
        sortable: true,
        grow: 1,
       
    },
    {
        name: 'DATE',
        selector: 'date',
    },
    {
        name: 'SUPPLIER',
        selector: 'supplier',
        grow:1
    },
    {
        name: 'COST(NT$)',
        selector: 'cost',
        sortable: true,
    
    },
    {
        name: 'DESCRIPTION',
        selector: 'description',
        grow:3

    }
])


