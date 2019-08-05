import React from 'react'
import KmSearchbox from '../../../kumocom/KmSearchbox'
import KmButton from '../../../kumocom/KmButton'
import KmSelector from '../../../kumocom/KmSelector'

const HomefilterView = props => {
    return (
        <div className="container-fluid mt-3 py-3" style={{ backgroundColor: '#ffffff', borderRadius: 4 }}>
            <div className="py-2" style={{ color: '#FF8902',fontSize: 10 }}>FILTER</div>
            <div className="row flex-wrap pl-2" style={{ color: '#A3A3A3' }}>
                <div className=" flex-column p-2 ">
                    <div>SEARCH</div>
                    <div>
                        <KmSearchbox />
                    </div>
                </div>
                <div className="flex-column p-2">
                    <div>VENDOR</div>
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
                <div className=" flex-column p-2">
                    <div>COUNTRY</div>
                    <div>
                        <KmSelector
                            placeholder="Select Country"
                        />
                    </div>
                </div>
                <div className=" flex-column p-2 ">
                    <div>CITY</div>
                    <div>
                        <KmSelector
                            placeholder="Select City"
                        />
                    </div>
                </div>
                <div className=" flex-column p-2 ">
                    <div>SITE</div>
                    <div>
                        <KmSelector
                            placeholder="Select Site"
                        />
                    </div>
                </div>
                <div className="flex-column flex-grow-1 p-2">
                    <label></label>
                    <div>
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