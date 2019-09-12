import React from "react"
import ProfileSiteProfielView from '../components/ProfileSiteProfileView'
import ProfileInverterView from '../components/ProfileInverterView'
import ProfilePanelView from '../components/ProfilePanelView'

const ProfileContainer = props => {
    return (
        <div className="container-fluid p-0">
            <div className="row m-0">

                <div className="col-md-5 px-1">
                    <ProfileSiteProfielView />
                </div>

                <div className="col-md-7 p-0">
                    <div className="px-1 pb-1">
                        <ProfileInverterView />
                    </div>
                    <div className="px-1 pt-1">
                        <ProfilePanelView />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default ProfileContainer
