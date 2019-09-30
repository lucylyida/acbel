import React, { useState } from "react"
import { withMedia } from "react-media-query-hoc";
import querystring from "query-string"
// import * as route from "../../../config/route.config"
import KmButton from "../../../kumocom/KmButton"
import { fsc } from '../../../helper/fontColorHelper'
import KmInputBox from "../../../kumocom/KmInputBox";


const UserProfileView = props => {
    const { match, location, history, edit, media } = props
    const search = querystring.parse(location.search)
    const [oldpass, setOldpass] = useState('password')
    const [newpass, setNewpass] = useState('password')
    const [conpass, setConpass] = useState('password')

    return (
        <div className="container-fluid p-0">

            <div className="pb-3">
                <div className="bg-white p-3" style={{ borderRadius: 4 }}>
                    <div className='col-12 pt-2' style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>
                        {"ACCOUNT INFORMATION"}
                    </div>

                    <div className="row px-3">
                        <div className='col-12 col-sm-6 col-lg-4 col-xl-3 col-md-6 py-2'>
                            <label style={{ color: '#aaaaaa', fontSize: 14 }}>
                                {`FIRST NAME ${edit ? '*' : ''}`}
                            </label>
                            <KmInputBox id={"firstName"} value={"Chris"} disabled={!edit} style={{ color: edit ? '#000000' : '#aaaaaa' }} />
                        </div>
                        <div className='col-12 col-sm-6 col-lg-4 col-xl-3 col-md-6 py-2'>
                            <label style={{ color: '#aaaaaa', fontSize: 14 }}>
                                {`LAST NAME ${edit ? '*' : ''}`}
                            </label>
                            <KmInputBox id={"lastName"} value={"Evans"} disabled={!edit} style={{ color: edit ? '#000000' : '#aaaaaa' }} />
                        </div>
                    </div>

                    <div className="row px-3">
                        <div className='col-12 col-sm-6 col-lg-4 col-xl-3 col-md-6 py-2'>
                            <label style={{ color: '#aaaaaa', fontSize: 14 }}>
                                {`EMAIL ADDRESS ${edit ? '*' : ''}`}
                            </label>
                            <KmInputBox type='email' id={"email1"} value={"chris@evans.com"} disabled={!edit} style={{ color: edit ? '#000000' : '#aaaaaa' }} />
                        </div>
                        <div className='col-12 col-sm-6 col-lg-4 col-xl-3 col-md-6 py-2'>
                            <label style={{ color: '#aaaaaa', fontSize: 14 }}>
                                {`ROLE ${edit ? '*' : ''}`}
                            </label>
                            <KmInputBox id={"role"} value={"Administrator"} disabled={!edit} style={{ color: edit ? '#000000' : '#aaaaaa' }} />
                        </div>
                    </div>
                </div>
            </div>


            <div className="pb-3">
                <div className="bg-white p-3" style={{ borderRadius: 4 }}>
                    <div className='col-12 pt-2' style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>
                        {"PASSWORD"}
                    </div>

                    <div className="row px-3">
                        <div className='col-12 col-sm-6 col-lg-4  col-xl-3 py-2' >
                            <label style={{ color: '#aaaaaa', fontSize: 14 }}>
                                {`${edit ? 'OLD PASSWORD *' : 'PASSWORD'}`}
                            </label>
                            <KmInputBox id={"p1"} type={oldpass} onClick={() => setOldpass(oldpass === 'password' ? 'text' : 'password')} value={"PASSWORD"} disabled={!edit} style={{ color: edit ? '#000000' : '#aaaaaa' }} icon={<i className="fa fa-eye" />} />
                        </div>
                        <div className="offset-0 offset-sm-6  offset-lg-0 offset-xl-0" />
                        {
                            edit &&
                            <div className='col-12 col-sm-6 col-lg-4  col-xl-3 py-2' >
                                <label style={{ color: '#aaaaaa', fontSize: 14 }}>
                                    {"NEW PASSWORD"}
                                </label>
                                <KmInputBox id={"p2"} type={newpass} onClick={() => setNewpass(newpass === 'password' ? 'text' : 'password')} value={"NEW PASSWORD"} disabled={!edit} style={{ color: edit ? '#000000' : '#aaaaaa' }} icon={<i className="fa fa-eye" />} />
                            </div>
                        }
                        {
                            edit &&
                            <div className='col-12 col-sm-6 col-lg-4  col-xl-3 py-2' >
                                <label style={{ color: '#aaaaaa', fontSize: 14 }}>
                                    {"CONFIRM PASSWORD"}
                                </label>
                                <KmInputBox id={"p3"} type={conpass} onClick={() => setConpass(conpass === 'password' ? 'text' : 'password')} value={"CONFIRM PASSWORD"} disabled={!edit} style={{ color: edit ? '#000000' : '#aaaaaa' }} icon={<i className="fa fa-eye" />} />
                            </div>
                        }
                    </div>
                </div>
            </div>

            {
                edit &&
                <KmButton text="Save Profile"
                    onClick={() => _handleClickedProfileEditedSaved({ match, history, search })}
                    noMinWidth style={{ width: 250 }}
                />
            }

        </div>
    )
}

const _handleClickedProfileEditedSaved = ({ match, history, search, }) => {
    search.e = undefined
    return history.push(`${match.url}?${querystring.stringify(search)}`)
}

export default withMedia(UserProfileView)