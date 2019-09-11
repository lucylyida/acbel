import React, { useState } from "react"
import KmButton from "../../../kumocom/KmButton";
import KmInputBox from "../../../kumocom/KmInputBox"
import { withMedia } from "react-media-query-hoc"
import { fsc } from '../../../helper/fontColorHelper'
import * as route from '../../../config/route.config'

const Login = props => {

    const { media } = props
    const [email, setEmail] = useState('admin@gmail.com')
    const [password, setPassword] = useState('admin@1234')
    const [show, setShow] = useState(false)
    return (
        <div className="container-fluid pt-5" >
            {/* <div className="row pl-3">
                <div className="col login-nav py-4" style={{ height: 80, fontSize: font.heading2, }}>
                    <img src={`logo.${theme}.png`} alt="logo" height={25} />
                </div>
            </div> */}
            <div className="row justify-content-center align-items-center py-4" >
                <div className="col-sm-12 col-md-10 col-lg-6 col-xl-4 py-4">
                    <div className="row justify-content-center" style={{ color: '#cccccc', fontSize: 48 }}>
                        <i className="fas fa-lock"></i>
                    </div>
                    <div className="row justify-content-center align-items-center py-5"
                        style={{ fontSize: fsc(media, 26), color: '#000000', fontWeight: 600 }}>Login To Your Account</div>
                    {/* <LoadingView isLoading={isLoading} /> */}
                    <form onSubmit={() => props.history.replace(`/${route.global}`)}>
                        <div className="form-group">
                            <label style={{ fontSize: 13, color: '#000000' }}>Email Address</label>
                            <KmInputBox
                                id={"loginEmail"}
                                type="email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                value={email}
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
                        {/* <div
                            style={{ textAlign: 'center', cursor: 'pointer', }}
                            onMouseOver={e => { return (e.target.style.textDecoration = "none") }}//'#000000'}
                            onMouseOut={e => { return (e.target.style.textDecoration = "none") }}
                        >
                            <Link to="/reset-password-email" style={{ textDecoration: "none", color: '#000000' }}>Forget Password?</Link>
                        </div> */}
                    </form>
                </div>
            </div>

        </div >
    );
}

export default withMedia(Login);