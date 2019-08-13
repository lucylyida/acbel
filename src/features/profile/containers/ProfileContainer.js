import React from "react"
import ProfileSiteProfielView from '../components/ProfileSiteProfileView'
import ProfileInverterView from '../components/ProfileInverterView'
import ProfilePanelView from '../components/ProfilePanelView'

const ProfileContainer = props => {
    return (
        <div className="container-fluid p-3">
            <div className="d-flex flex-wrap ">
                <div className="flex-grow-1">
                    <ProfileSiteProfielView />
                </div>
                <div className="flex-grow-1 px-3">
                    <div className="pb-5"> <ProfileInverterView /> </div>
                    <div> <ProfilePanelView /></div>
                </div>
            </div>
        </div>

    )
}

export default ProfileContainer