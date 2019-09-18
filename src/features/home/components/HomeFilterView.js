import React from 'react'


import KmSearchbox from '../../../kumocom/KmSearchbox'
import KmButton from '../../../kumocom/KmButton'
import KmSelector from '../../../kumocom/KmSelector'

import { withMedia } from 'react-media-query-hoc';
import { fsc } from '../../../helper/fontColorHelper';

// use in from GlobalContainer
const HomefilterView = props => {
    const {
        media,
        vendorNameList,
        siteNameList,
        countryNameList,
        cityNameList,
        selectedVendor,
        selectedCountry,
        selectedCity,
        selectedSite,
        onVendorChange,
        onCountryChange,
        onCityChange,
        onSiteChange,

    } = props // @nayhtet

    return (
        <div className="container-fluid mt-3 py-3" style={{ backgroundColor: '#ffffff', borderRadius: 4 }}>
            {/* <div className="py-2" style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>{"FILTER"}</div> */}
            <div className="row" style={{ color: '#A3A3A3' }}>

                {/* <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 py-1">
                    <div className="pb-1" style={{ fontSize: fsc(media, 14) }}>SEARCH</div>
                    <div>
                        <KmSearchbox placeholder="Search"
                            icon={<i className="fa fa-search" />}
                        />
                    </div>
                </div> */}

                <div className="col-lg-3  py-1">
                    <div className="pb-1" style={{ fontSize: fsc(media, 14) }}>VENDOR</div>
                    <div>
                        <KmSelector
                            value={selectedVendor}
                            onChange={onVendorChange}
                            placeholder="Select Vendor"
                            options={vendorNameList} // [ { value: 'chocolate_value', label: 'Vendor 1', type: '1' } ]
                            optionLabel='vendor_name'
                        />
                    </div>
                </div>

                {/* <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 py-1">
                    <div className="pb-1" style={{ fontSize: fsc(media, 14) }}>VENDOR</div>
                    <div>
                        <KmSelector
                            value={selectedVendor}
                            onChange={onVendorChange}
                            placeholder="Select Vendor"
                            options={vendorNameList} // [ { value: 'chocolate_value', label: 'Vendor 1', type: '1' } ]
                            optionLabel='vendor_name'
                        />
                    </div>
                </div> */}

                {/* <div className=" col-xl-2 col-lg-3 col-md-4 col-sm-6 py-1">
                    <div className="pb-1" style={{ fontSize: fsc(media, 14) }}>COUNTRY</div>
                    <div>
                        <KmSelector
                            value={selectedCountry}
                            onChange={onCountryChange}
                            placeholder="Select Country"
                            options={countryNameList} // [ { value: 'chocolate_value', label: 'Signapore', type: '1' },]
                            optionLabel={"name"}
                        />
                    </div>
                </div> */}
                {/* <div className=" col-xl-2 col-lg-3 col-md-4 col-sm-6 py-1">
                    <div className="pb-1" style={{ fontSize: fsc(media, 14) }}>CITY</div>
                    <div>
                        <KmSelector
                            value={selectedCity}
                            onChange={onCityChange}
                            placeholder="Select City"
                            options={cityNameList} // [ { value: 'chocolate_value', label: 'Mandalay', type: '1' }]
                            optionLabel='name'
                        />
                    </div>
                </div> */}

                <div className="col-lg-3  py-1">
                    <div className="pb-1" style={{ fontSize: fsc(media, 14) }}>SITE</div>
                    <div>
                        <KmSelector
                            value={selectedSite}
                            onChange={onSiteChange}
                            placeholder="Select Site"
                            options={siteNameList} // [ { value: 'chocolate_value', label: 'Site1', type: '1' }]

                            optionLabel='site_name'
                        />
                    </div>
                </div>
                {/* <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 py-1">
                    <div className="pb-1" style={{ fontSize: fsc(media, 14) }}>SITE</div>
                    <div>
                        <KmSelector
                            value={selectedSite}
                            onChange={onSiteChange}
                            placeholder="Select Site"
                            options={siteNameList} // [ { value: 'chocolate_value', label: 'Site1', type: '1' }]

                            optionLabel='site_name'
                        />
                    </div>
                </div> */}
                   <div className="col-lg-3  py-1">
                    <br />
                    <div>
                        <KmButton
                            text="FILTER"
                            className="px-3"
                        />
                    </div>
                </div>
                {/* <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 py-1">
                    <br />
                    <div>
                        <KmButton
                            text="FILTER"
                            className="px-3"
                        />
                    </div>
                </div> */}

            </div>
        </div>
    )
}

export default withMedia(HomefilterView);