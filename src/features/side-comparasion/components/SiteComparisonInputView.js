import React from "react"
import { fsc } from '../../../helper/fontColorHelper'
import KmSelector from '../../../kumocom/KmSelector'
import KmButton from '../../../kumocom/KmButton'
import { withMedia } from 'react-media-query-hoc'
import querystring from "query-string"

// import * as route from "../../../config/route.config"
// import KmSearchbox from '../../../kumocom/KmSearchbox'

const SiteComparisonView = props => {
    // vendorNameList
    const { history, match, location, media ,} = props
    const search = location.search
    const cr = querystring.parse(search).cr
    return (        
        <div className="bg-white py-2 px-3 h-100 " style={{ borderRadius: 4 }}>
            <div className="pt-2 " style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>SELECT SITES</div>
            <div className="d-flex flex-column justify-content-start  " >
                <div className="py-4 flex-fill" style={{ borderBottom: '1px solid #999999' }}>
                    <div style={{ fontSize: fsc(media, 14), color: '#999999' }}>SEARCH FOR A SITE</div>
                    <div>
                        <KmSelector
                            icon={<i className="fas fa-search"></i>}
                            isSearch
                            placeholder="Search"
                            options={
                                [
                                    { value: 'chocolate_value', label: 'Fun Farm', type: '1' },
                                    { value: 'strawberry_value', label: 'Fung-Rung Farmers Association...', type: '2' },
                                    { value: 'vanilla_value', label: 'Funky Quarters', type: '3' }
                                ]
                            }
                            optionLabel='label'
                            style={{ indicator: 'none' }}
                        />
                    </div>
                </div>
                <div className="py-3 flex-fill">
                    <div style={{ fontSize: fsc(media, 14), color: '#999999' }}>VENDOR</div>
                    <div>
                        <KmSelector
                            icon={<i className="fas fa-sort-down"></i>}
                            placeholder="Select Vendor"
                            options={
                                
                                [
                                    { value: 'chocolate_value', label: 'Vendor 1', type: '1' },
                                    { value: 'strawberry_value', label: 'Vendor 2', type: '2' },
                                    { value: 'vanilla_value', label: 'Vendor 3', type: '3' }
                                ]
                            }
                            optionLabel='label'
                            style={{ indicator: 'none' }}
                        />
                    </div>
                </div>
                <div className="py-3 flex-fill">
                    <div style={{ fontSize: fsc(media, 14), color: '#999999' }}>COUNTRY</div>
                    <div>
                        <KmSelector
                            icon={<i className="fas fa-sort-down"></i>}
                            placeholder="Select Country"
                            options={
                                [
                                    { value: 'chocolate_value', label: 'Signapore', type: '1' },
                                    { value: 'strawberry_value', label: 'Taiwan', type: '2' },
                                    { value: 'vanilla_value', label: 'China', type: '3' }
                                ]
                            }
                            optionLabel='label'
                            style={{ indicator: 'none' }}
                        />
                    </div>
                </div>
                <div className="py-3 flex-fill">
                    <div style={{ fontSize: fsc(media, 14), color: '#999999' }}>CITY</div>
                    <div>
                        <KmSelector
                            icon={<i className="fas fa-sort-down"></i>}
                            placeholder="Select City"
                            options={
                                [
                                    { value: 'chocolate_value', label: 'Mandalay', type: '1' },
                                    { value: 'strawberry_value', label: 'City1', type: '2' },
                                    { value: 'vanilla_value', label: 'City2', type: '3' }
                                ]
                            }
                            optionLabel='label'
                            style={{ indicator: 'none' }}
                        />
                    </div>
                </div>
                <div className="py-3 flex-fill">
                    <div style={{ fontSize: fsc(media, 14), color: '#999999' }}>SITES</div>
                    <div>
                        <KmSelector
                            icon={<i className="fas fa-sort-down"></i>}
                            placeholder="Select Sites"
                            options={
                                [
                                    { value: 'chocolate_value', label: 'Site1', type: '1' },
                                    { value: 'strawberry_value', label: 'Site2', type: '2' },
                                    { value: 'vanilla_value', label: 'Site3', type: '3' }
                                ]
                            }
                            optionLabel='label'
                            style={{ indicator: 'none' }}
                        />
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-between py-3">
                <div style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>SITES SELECT FOR COMPARISON</div>
                <div style={{ fontSize: fsc(media, 14), color: '#999999' }}>{"RESET SELECTION"}</div>
            </div>
            <div>
                <KmBadge text="FUNG-RUNG FARMERS ASSOCIATION(FRFA)" style={{ fontSize: fsc(media, 12), backgroundColor: '#114194' }} />
                <KmBadge text="ORGANIC FARMERS ASSOCIATION" style={{ fontSize: fsc(media, 12), backgroundColor: '#114194' }} />
            </div>

            <div className="py-4">
                <KmButton text="START COMPARING" onClick={() => history.push(`${match.url}${search}${cr ? "" : "&cr=1"}`)} style={{ width: 200 }} />
            </div>
        </div>
    )
}

export default withMedia(SiteComparisonView)

const KmBadge = ({ text, style }) => {
    return (
        <div className="px-2 py-1">
            <div className="badge badge-pill py-2 text-white" style={style}>
                <span >{text} </span>
                <span className="px-2" style={{ cursor: 'pointer' }}> <i className="fas fa-times"></i></span>
            </div>
        </div>
    )
}