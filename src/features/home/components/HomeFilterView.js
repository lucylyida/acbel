import React from 'react'
import KmSearchbox from '../../../kumocom/KmSearchbox'
import KmButton from '../../../kumocom/KmButton'
import KmSelector from '../../../kumocom/KmSelector'

const HomefilterView = props => {
    return (
        <div className="container-fluid mt-3 py-3" style={{ backgroundColor: '#ffffff', borderRadius: 4 }}>
            <div className="py-2" style={{ color: '#FF8902',fontSize: 10 }}>FILTER</div>
            <div className="d-flex align-items-baseline flex-wrap" style={{ color: '#A3A3A3' ,fontSize:10}}>

                <div className="flex-column p-2 flex-fill">
                    <div className="pb-1">SEARCH</div>
                    <div>
                        <KmSearchbox text="Search" />
                    </div>
                </div>

                <div className="flex-column p-2 flex-fill">
                    <div className="pb-1">VENDOR</div>
                    <div>
                        <KmSelector
                            placeholder="Select Vendor"
                            options={
                                [
                                    { value: 'chocolate_value', label: 'Chocolate', type: '1' },
                                    { value: 'strawberry_value', label: 'Strawberry', type: '2' },
                                    { value: 'vanilla_value', label: 'Vanilla', type: '3' }
                                ]
                            }
                            optionLabel='label'
                        />
                    </div>
                </div>

                <div className=" flex-column p-2 flex-fill">
                    <div className="pb-1">COUNTRY</div>
                    <div>
                        <KmSelector
                            placeholder="Select Country"
                        />
                    </div>
                </div>
                <div className=" flex-column p-2 flex-fill">
                    <div className="pb-1">CITY</div>
                    <div>
                        <KmSelector
                            placeholder="Select City"
                        />
                    </div>
                </div>
                <div className=" flex-column p-2 flex-fill">
                    <div className="pb-1">SITE</div>
                    <div>
                        <KmSelector
                            placeholder="Select Site"
                        />
                    </div>
                </div>
                <div className="flex-column p-2 flex-fill">   
                    <br />
                    <div className="pt-1">
                        <KmButton
                            text="FILTER"
                            className="px-3"
                            style={{ backgroundColor: 'blue' }}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomefilterView;