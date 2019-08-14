import React from 'react'
import moment from 'moment'

const MaintenanceItemCardView = props => {
    const { } = props
    const time = moment().format('hh:mm A')
    const date = moment().format('DD')
    const month = moment().format('MMM')
    const Supplier = 'Huakai Farmer Association'
    const MaintenanceType = 'Ad-Hoc'
    const Description = 'Database and Server Maintenance'
    const Width = 280
    const Edit = () => {
        alert('You Click Edit')
    }
    return (
        <div>

        </div>
    )
}

export default MaintenanceItemCardView;