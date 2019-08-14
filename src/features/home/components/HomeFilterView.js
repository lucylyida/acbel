import React from 'react'
import KmSearchbox from '../../../kumocom/KmSearchbox'
import KmButton from '../../../kumocom/KmButton'
import KmSelector from '../../../kumocom/KmSelector'

import { withMedia } from 'react-media-query-hoc';
import { fsc } from '../../../helper/fontColorHelper';


const HomefilterView = props => {
    const { media } = props
    return (
        <div className="container-fluid mt-3 py-3" style={{ backgroundColor: '#ffffff', borderRadius: 4 }}>
            <div className="py-2" style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>{"FILTER"}</div>
            <div className="d-flex align-items-baseline flex-wrap" style={{ color: '#A3A3A3' }}>

                <div className="flex-column p-2 flex-fill">
                    <div className="pb-1" style={{ fontSize: fsc(media, 14) }}>SEARCH</div>
                    <div>
                        <KmSearchbox placeholder="Search" />
                    </div>
                </div>

                <div className="flex-column p-2 flex-fill">
                    <div className="pb-1" style={{ fontSize: fsc(media, 14) }}>VENDOR</div>
                    <div>
                        <KmSelector
                            placeholder="Select Vendor"
                            options={
                                [
                                    { value: 'chocolate_value', label: 'Vendor 1', type: '1' },
                                    { value: 'strawberry_value', label: 'Vendor 2', type: '2' },
                                    { value: 'vanilla_value', label: 'Vendor 3', type: '3' }
                                ]
                            }
                            optionLabel='label'
                        />
                    </div>
                </div>

                <div className=" flex-column p-2 flex-fill">
                    <div className="pb-1" style={{ fontSize: fsc(media, 14) }}>COUNTRY</div>
                    <div>
                        <KmSelector
                            placeholder="Select Country"
                            options={
                                [
                                    { value: 'chocolate_value', label: 'Signapore', type: '1' },
                                    { value: 'strawberry_value', label: 'Taiwan', type: '2' },
                                    { value: 'vanilla_value', label: 'China', type: '3' }
                                ]
                            }
                            optionLabel='label'
                        />
                    </div>
                </div>
                <div className=" flex-column p-2 flex-fill">
                    <div className="pb-1" style={{ fontSize: fsc(media, 14) }}>CITY</div>
                    <div>
                        <KmSelector
                            placeholder="Select City"
                            options={
                                [
                                    { value: 'chocolate_value', label: 'Mandalay', type: '1' },
                                    { value: 'strawberry_value', label: 'City1', type: '2' },
                                    { value: 'vanilla_value', label: 'City2', type: '3' }
                                ]
                            }
                            optionLabel='label'
                        />
                    </div>
                </div>
                <div className=" flex-column p-2 flex-fill">
                    <div className="pb-1" style={{ fontSize: fsc(media, 14) }}>SITE</div>
                    <div>
                        <KmSelector
                            placeholder="Select Site"
                            options={
                                [
                                    { value: 'chocolate_value', label: 'Site1', type: '1' },
                                    { value: 'strawberry_value', label: 'Site2', type: '2' },
                                    { value: 'vanilla_value', label: 'Site3', type: '3' }
                                ]
                            }
                            optionLabel='label'
                        />
                    </div>
                </div>
                <div className="flex-column p-2 flex-fill flex-grow-1 ">
                    <br />
                    <div className="pt-1">
                        <KmButton
                            text="FILTER"
                            className="px-3"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default withMedia(HomefilterView);