import React from 'react'
import KmTable from '../../../kumocom/KmTable'
import { memoize } from 'react-data-table-component'
import tableTheme from "../../home/containers/tableTheme"
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontColorHelper'

const ReportGenerateHistoryView = props => {
    const { media } = props
    return (
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
            paginationPerPage={5}
            customPagination={true}
        />
    )
}

export default withMedia(ReportGenerateHistoryView)

const data = [
    { id: 1, typeofReport: 'Portfolio Report', from: '01/12/19', to: '06/12/19', created: "06/12/19", view: "VIEW", export: " EXPORT", remove: "REMOVE" },
    { id: 2, typeofReport: 'Performance Report', from: '01/12/19', to: '06/12/19', created: "06/12/19", view: "VIEW", export: " EXPORT", remove: "REMOVE" },
    { id: 3, typeofReport: 'Peak Sun Report', from: '01/12/19', to: '06/12/19', created: "06/12/19", view: "VIEW", export: " EXPORT", remove: "REMOVE" },
    { id: 4, typeofReport: 'Target VS Current Complete Construct Capacity', from: '01/12/19', to: '06/12/19', created: "06/12/19", view: "VIEW", export: " EXPORT", remove: "REMOVE" },
    { id: 5, typeofReport: 'Target VS Current Complete Construct Capacity', from: '01/12/19', to: '06/12/19', created: "06/12/19", view: "VIEW", export: " EXPORT", remove: "REMOVE" },

];


const columns = memoize((media, handleClick) => [
    {
        name: "TYPE OF REPORT",
        selector: 'typeofReport',
        sortable: true,
        grow: 3,
        cell: row => <div className="d-flex justify-content-center align-items-center">
            <div className="  text-center  bg-transparent ">{row.typeofReport}</div>
            <div className="px-2 ">{row.sites} </div>
        </div>
    },
    {
        name: 'FROM',
        selector: 'from',
    },
    {
        name: 'TO',
        selector: 'to',
    },
    {
        name: 'CREATED',
        selector: 'created',
        sortable: true,

    },
    {
        name: '',
        selector: 'view',
        sortable: true,
        cell: row => <div style={{  fontSize: fsc(media, 13), color: '#0B3D92' }}><span className="px-1"><i className="far fa-eye" /></span> {row.view}</div>

    },
    {
        name: '',
        selector: 'export',
        sortable: true,
        cell: row => <div  style={{ cursor: 'pointer', fontSize: fsc(media, 13), color: '#0B3D92' }}><span  className="px-1"><i className="fas fa-external-link-alt" /></span> {row.export}</div>
    },
    {
        name: '',
        selector: 'remove',
        cell: row => <div style={{ cursor: 'pointer', fontSize: fsc(media, 13), color: '#999999' }}><span className="px-1"><i className="fas fa-times" /></span> {row.remove}</div>

    }
])
