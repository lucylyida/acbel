import React from "react"
import ProfileSiteProfielView from '../components/ProfileSiteProfileView'
import ProfileInverterView from '../components/ProfileInverterView'
import ProfilePanelView from '../components/ProfilePanelView'

const ProfileContainer = props => {
    return (
        <div className="container-fluid p-0">
            <div className="d-flex align-items-stretch flex-wrap">

                <div className="flex-grow-1 p-1 flex-fill">
                    <ProfileSiteProfielView />
                </div>

                <div className="flex-grow-1">
                    <div className="p-1">
                        <ProfileInverterView />
                    </div>
                    <div className="p-1">
                        <ProfilePanelView />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default ProfileContainer
