import React, { useState } from "react"
import KmButton from "../../../kumocom/KmButton";
import KmInputBox from "../../../kumocom/KmInputBox"
import { withMedia } from "react-media-query-hoc"
import { fsc } from '../../../helper/fontColorHelper'
import * as route from '../../../config/route.config'
import { useSelector, useDispatch } from 'react-redux'
import { getLoginFromApi } from '../../../action'
import { useCookies } from 'react-cookie';

const Login = props => {

    const { media } = props
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)  
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const state = useSelector(state => state.accountReducer)
    const dispatch = useDispatch()


    if (state.loginDataRaw !== null) {
        if (cookies.user === undefined) {
            setCookie('user', state.loginDataRaw)
        }
    }
   
    state.loginDataRaw !== null && props.history.replace(`/${route.global}`) 

    const handleLogin = (e) => {
        e.preventDefault()
        removeCookie('user')
        if (username.length > 0 && password.length > 0) {
            dispatch(getLoginFromApi({ username, password }))
        }
    }

    return (
        <div className="container-fluid pt-5" >
            {
                state.loginLoading && (
                    <div className="text-center" style={{ position: "fixed", left: 0, top: "45%", right: 0, bottom: "45%", zIndex: 1 }}>
                        <span className="h3 font-weight-bold text-secondary">Loading...</span>
                    </div>
                )
            }
            <div className="row justify-content-center align-items-center py-4" >
                <div className="col-sm-12 col-md-10 col-lg-6 col-xl-4 py-4">
                    <div className="row justify-content-center" style={{ color: '#cccccc', fontSize: 48 }}>
                        <i className="fas fa-lock"></i>
                    </div>
                    <div className="row justify-content-center align-items-center py-5"
                        style={{ fontSize: fsc(media, 26), color: '#000000', fontWeight: 600 }}>Login To Your Account</div>
                    {/* <LoadingView isLoading={isLoading} /> */}
                    <form onSubmit={handleLogin}>
                        {/* <div className="text-danger text-center">{}</div> */}
                        <div className="form-group">
                            <label style={{ fontSize: 13, color: '#000000' }}>Username</label>
                            <KmInputBox
                                id={"loginEmail"}
                                type="text"
                                required
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username"
                                value={username}
                            />
                        </div>
                        <div className="form-group">
                            <label style={{ fontSize: 13, color: '#000000', }}>Password</label>
                            <KmInputBox
                                id={"loginPassword"}
                                required
                                type={show ? "text" : "password"}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                value={password}
                            />
                            <div className="position-relative float-right"
                                style={{ top: -27, paddingRight: '20px', cursor: 'pointer', fontWeight: 'bold', color: '#000000', fontSize: 14 }}>
                                <span onClick={() => setShow(!show)} style={{ color: "#666673" }}>
                                    {show ? <i className="far fa-eye-slash"></i> : <i className="far fa-eye"></i>}
                                </span>
                            </div>
                        </div>
                        <div className="form-group py-3 ">
                            <KmButton id={"login"} type="submit" text="Login" />
                        </div>
                    </form>
                </div>
            </div>

        </div >
    );
}

export default withMedia(Login);