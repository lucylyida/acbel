import React from "react"
import moment from 'moment'
import { Route, Link, Switch, Redirect, } from "react-router-dom"
import { withMedia } from 'react-media-query-hoc'
import { fsc, numberFormat } from '../../../helper/fontColorHelper'
import KmSearchbox from '../../../kumocom/KmSearchbox'
import KmTable from '../../../kumocom/KmTable'
import tableTheme from "../../home/containers/tableTheme"
import { memoize } from 'react-data-table-component';


const MaintenanceSideCalendarContainer = props => {
    const { media, match } = props

    return (
        <div className={`container-fluid py-2 ${media.mobile ? "px-1" : "px-4"}`}>
        <div className="d-flex justify-content-between align-items-center align-items-sm-center flex-wrap py-1  " >
                <div > <KmSearchbox placeholder="Search User" /> </div>
                <div style={{fontSize:fsc(media,14)}}> Showing 1 to 10 of 100 entries</div>
            </div>
            <div className="pt-3">
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
                    paginationPerPage={10}
                    customPagination={true}
                />
            </div>
        </div>
    )
}

export default withMedia(MaintenanceSideCalendarContainer)

const data = [
    { id: 1, name: 'Chris Evans', shortName: 'CE', userId: 'chrisevans', email: 'chris@evan.com', client: "Acbel", userRole: "Administrator", edit: " EDIT", },
    { id: 2, name: 'Nasos Kouroupis', shortName: 'NK', userId: 'nasoku', email: 'nasos@melewi.net', client: "Acbel", userRole: "Administrator", edit: "EDIT", },
    { id: 3, name: 'Peach MCAndrew', shortName: 'PM', userId: 'peachypiemcandrew', email: 'peachmcandrew@yahoo.com', client: "Huaka", userRole: "Administrator", edit: "EDIT", },
    { id: 4, name: 'Rumen Manev', shortName: 'RM', userId: 'room_n', email: 'rumenmanev@gmail.com', client: "Acbe;", userRole: "User", edit: "EDIT", },
    { id: 5, name: 'Rikke Gantzel', shortName: 'RG', userId: 'riga82', email: 'rikke@melewi.net', client: "Acbel", userRole: "User ", edit: "EDIT", },
    { id: 6, name: 'Marynyriene Silvestre', shortName: 'MS', userId: 'marysilvestre', email: 'mary@marysilvestre.com', client: "Huaka", userRole: "User ", edit: "EDIT", },
    { id: 7, name: 'Peach MCAndrew', shortName: 'PM', userId: 'peachypiemcandrew', email: 'peachmcandrew@yahoo.com', client: "Huaka", userRole: "Administrator", edit: "EDIT", },
    { id: 8, name: 'Rumen Manev', shortName: 'RM', userId: 'room_n', email: 'rumenmanev@gmail.com', client: "Acbe;", userRole: "User", edit: "EDIT", },
    { id: 9, name: 'Rikke Gantzel', shortName: 'RG', userId: 'riga82', email: 'rikke@melewi.net', client: "Acbel", userRole: "User ", edit: "EDIT", },
    { id: 10, name: 'Marynyriene Silvestre', shortName: 'MS', userId: 'marysilvestre', email: 'mary@marysilvestre.com', client: "Huaka", userRole: "User ", edit: "EDIT", },
];

const columns = memoize((media, handleClick) => [
    {
        name: "NAME",
        selector: 'name',
        sortable: true,
        grow: 2,
        cell: row => <div className="d-flex justify-content-center align-items-center">
            <div className="p-2 rounded text-center" style={{ backgroundColor: '#DCEF93' }}>{row.shortName}</div>
            <div className="px-2">{row.name} </div>
        </div>
    },
    {
        name: 'USER ID',
        selector: 'userId',
        sortable: true,

    },
    {
        name: 'EMAIL ADDRESSS',
        selector: 'email',
        sortable: true,

    },
    {
        name: 'CLIENT',
        selector: 'client',
        sortable: true,

    },
    {
        name: 'USER ROLES',
        selector: 'userRole',
        sortable: true,

    },
    {
        name: '',
        selector: 'edit',
        allowOverflow: true,
        cell: row => <div style={{ cursor: 'pointer', fontSize: fsc(media, 13), color: '#0B3D92' }}><span className="px-1"><i class="fas fa-pencil-alt" /></span> {row.edit}</div>

    }
])