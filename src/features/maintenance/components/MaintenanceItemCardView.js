import React from 'react'
import moment from 'moment'
import EditIcon from '../../../assets/icons/Edit_Icon'

const MaintenanceItemCardView = props => {
    const { time, date, supplier, type, desc } = props
    const day = date.split(' ')[0]
    const month = date.split(' ')[1]

    const Edit = () => {
        alert('You Click Edit')
    }

    return (
        <div className="bg-white card rounded border" style={{ fontSize: '14px', padding: '10px', width: 280 }}>

            <div className="d-flex justify-content-between pt-1 pb-3">
                <div>
                    <h6 style={{ color: 'darkblue' }}>{type}<br />Maintenance</h6>
                </div>
                <div style={{
                    width: 45, height: 45, borderRadius: '50%', background: 'darkorange', textAlign: 'center',
                    fontSize: '9pt', color: 'white', fontWeight: 'bold', padding: 4
                }}>
                    {day}<br />{month}
                </div>
            </div>

            <div className='pb-2' style={{ whiteSpace: 'pre-wrap' }}>
                {desc}
            </div>
            <div className='pb-2'>
                {time}<br />
                <span style={{ color: '#aaaaaa' }}>TIME</span>
            </div>
            <div className='LineBreaker'>
                {supplier}<br />
                <span style={{ color: '#aaaaaa' }}>SUPPLIER</span>
            </div>
            <div className="d-flex justify-content-end pr-2 pt-4" onClick={Edit} style={{ cursor: 'pointer' }}>
                <EditIcon width={30} height={30} />
                <span style={{ color: '#aaaaaa' }}>EDIT</span>
            </div>
        </div>


    )
}

export default MaintenanceItemCardView;

{/* <MaintenanceItemCard 
MaintenanceType={'Ad-Hoc'} Time={time} Description={'Database and Server Maintenance'} Supplier={Supplier} Edit={Edit} Width={'280px'} Date={date} Month={month} /> */}