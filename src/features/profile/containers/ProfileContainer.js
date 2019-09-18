import React from "react"
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
    const bodyData = { vendor_id: props.match.params.vendorId, site_id: props.match.params.siteId }

    const [cookies] = useCookies(['user']);
    cookies.user === undefined && props.history.replace(`/${route.login}`)

    if (siteProfileDataState.isLoading) {
        dispatch(Action.getSiteProfileData(bodyData))
    }
    if (siteProfileDataState.siteProfileDataRaw.length === 0) return null

    const siteProfileData = siteProfileDataState.siteProfileDataRaw[0]
    console.log({ siteProfileData })
    return (
        <div className="container-fluid p-0">
            <div className="row m-0">

                <div className="col-md-5 px-1">
                    <ProfileSiteProfielView
                        startDate={siteProfileData.startDate}
                        priceSetup={siteProfileData.priceSetup}
                        capacity={siteProfileData.siteCapacity}
                    />
                </div>

                <div className="col-md-7 p-0">
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
