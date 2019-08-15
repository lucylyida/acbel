import React from 'react'
import KmButton from '../../../kumocom/KmButton'
import KmSelector from '../../../kumocom/KmSelector'
import KmDatePicker from '../../../kumocom/KmDatePicker'
import KmTable from '../../../kumocom/KmTable'
import { memoize } from 'react-data-table-component'
import tableTheme from "../../home/containers/tableTheme"
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontColorHelper'

import Acbel_Logo from '../../../assets/icons/Acbel_Logo'
import SolarPanel_logo from '../../../assets/icons/solarpanel_icn'
import Power_icon from '../../../assets/icons/Power_icon'
import Money_Icon from '../../../assets/icons/Money_Icon'



const ReportGeneratorView = props => {
    const { media } = props
    return (
        <div>
            <div className="pt-3 py-2" style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>REPORT GENERATION</div>
            <div className="d-flex flex-lg-nowrap flex-wrap">
                <div className="px-1 py-2 flex-fill ">
                    <div style={{ fontSize: fsc(media, 13), color: '#999999' }}>GENERATE FORM</div>
                    <div><KmButton text="SELECT" /></div>
                </div>
                <div className=" px-1 py-2 flex-fill ">
                    <div style={{ fontSize: fsc(media, 13), color: '#999999' }}>TYPE OF REPORT</div>
                    <KmSelector
                        style={{ indicator: 'none' }}
                        placeholder="Select Type"
                        options={
                            [
                                { label: 'Report1', type: '1' },
                                { label: 'Report2', type: '2' },
                                { label: 'Report3', type: '3' }
                            ]
                        }
                        optionLabel='label'
                    />
                </div>
                <div className=" d-flex flex-wrap ">
                    <div className="px-1 py-2 flex-fill ">
                        <div style={{ fontSize: fsc(media, 13), color: '#999999' }}>FROM</div>
                        <div><KmDatePicker /></div>
                    </div>
                    <div className="px-1 py-2 flex-fill">
                        <div style={{ fontSize: fsc(media, 13), color: '#999999' }}>TO</div>
                        <div><KmDatePicker /></div>
                    </div>
                </div>
                <div className="  flex-fill px-1 py-2">
                    <div style={{ fontSize: fsc(media, 13), color: '#999999' }}>EXPORT REPORT AS</div>
                    <div className="d-flex">
                        <div > <KmButton text="PDF" noMinWidth style={{ width: 80 }} /></div>
                        <div className="px-2"><KmButton text="PRINT" noMinWidth style={{ width: 80 }} /> </div>
                    </div>
                </div>
            </div>
  {/* =================================================================================================================================================== */}
            <div className="py-4">
                <div style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>HISTORY</div>
                <div className="pt-2">
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
                        paginationPerPage={4}
                        customPagination={true}
                    />
                </div>

            </div>

        </div>
    )
}

export default withMedia(ReportGeneratorView)

const data = [
    { id: 1, sites: 'Organic Farmers Association', siteicon: <Acbel_Logo />, from: '01/12/19', to: '06/12/19', created: "06/12/19", view: "VIEW", export: " EXPORT", remove: "REMOVE" },
    { id: 2, sites: 'Rice Drying Field', siteicon: <SolarPanel_logo />, from: '01/12/19', to: '06/12/19', created: "06/12/19", view: "VIEW", export: " EXPORT", remove: "REMOVE" },
    { id: 3, sites: 'Taoyuan Xiwu-Dayang', siteicon: <Power_icon />, from: '01/12/19', to: '06/12/19', created: "06/12/19", view: "VIEW", export: " EXPORT", remove: "REMOVE" },
    { id: 4, sites: 'SMD Site', siteicon: <Money_Icon />, from: '01/12/19', to: '06/12/19', created: "06/12/19", view: "VIEW", export: " EXPORT", remove: "REMOVE" },

];


const columns = memoize((media, handleClick) => [
    {
        name: "SITES",
        selector: 'sites',
        sortable: true,
        grow: 5,
        cell: row => <div className="d-flex justify-content-center align-items-center">
            <div className=" p-2 text-center  bg-transparent ">{row.siteicon}</div>
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
        cell: row => <div style={{ cursor: 'pointer', fontSize: fsc(media, 13), color: '#0B3D92' }}><span className="px-1"><i class="far fa-eye" /></span> {row.view}</div>

    },
    {
        name: '',
        selector: 'export',
        sortable: true,
        cell: row => <div style={{ cursor: 'pointer', fontSize: fsc(media, 13), color: '#0B3D92' }}><span className="px-1"><i class="fas fa-external-link-alt" /></span> {row.export}</div>
    },
    {
        name: '',
        selector: 'remove',
        cell: row => <div style={{ cursor: 'pointer', fontSize: fsc(media, 13), color: '#999999' }}><span className="px-1"><i class="fas fa-times" /></span> {row.remove}</div>

    }
])

