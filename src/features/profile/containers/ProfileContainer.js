import React, { useEffect } from "react"
import ProfileSiteProfielView from '../components/ProfileSiteProfileView'
import ProfileInverterView from '../components/ProfileInverterView'
import ProfilePanelView from '../components/ProfilePanelView'

import { useSelector, useDispatch } from 'react-redux'
import * as Action from '../../../action'
import { useCookies } from 'react-cookie'
import * as route from '../../../config/route.config'

const ProfileContainer = props => {

    const siteProfileDataState = useSelector(state => state.siteProfileDataReducer)

    const dispatch = useDispatch()

    const [cookies] = useCookies(['user']);
    const money_unit = cookies.user.money

    const token = cookies.user.token

    const bodyData = { vendor_id: props.match.params.vendorId, site_id: props.match.params.siteId, token }

    // console.log('profile container')

    // if (siteProfileDataState.isLoading) {
    //     dispatch(Action.getSiteProfileData(bodyData))
    // }

    useEffect(() => {
        dispatch(Action.getSiteProfileData(bodyData))
        // console.log('profile container calling...')
    }, [siteProfileDataState.siteProfileData])

    const siteProfileData = siteProfileDataState.siteProfileDataRaw.length === 0 ?
        {
            vendorId: null, siteId: null, siteName: null,
            startDate: null, siteCapacity: null, priceSetup: null,
            inverters: [], panels: [], amtInverter: null, amtPanel: null
        } :
        siteProfileDataState.siteProfileDataRaw[0]

    // console.log(siteProfileData)

    // if(!Array.isArray(siteProfileData)) return null

    return (
        <div className="container-fluid p-0">
            {/* {
                siteProfileDataState.isLoading && (
                    <div className="text-center" style={{ position: "fixed", left: 0, top: "45%", right: 0, bottom: "45%", zIndex: 1 }}>
                        <span className="h3 font-weight-bold text-secondary">Loading...</span>
                    </div>
                )
            } */}
            <div className="row m-0">

                <div className="col-lg-5 px-1">
                    <ProfileSiteProfielView
                        startDate={siteProfileData.startDate}
                        priceSetup={siteProfileData.priceSetup}
                        capacity={siteProfileData.siteCapacity}
                        vendorId={bodyData.vendor_id}
                        siteId={bodyData.site_id}
                        money_unit={money_unit}
                    />
                </div>

                <div className="col-lg-7 p-0">
                    <div className="px-1 pb-1">
                        <ProfileInverterView
                            totalInverter={siteProfileData.amtInverter}
                            inverterDetailList={siteProfileData.inverters}
                        />
                    </div>
                    <div className="px-1 pt-1">
                        <ProfilePanelView
                            totalPanel={siteProfileData.amtPanel}
                            panelDetailList={siteProfileData.panels}
                        />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default ProfileContainer
