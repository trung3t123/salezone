import React, { Component } from 'react';
import Axios from 'axios';
import {
    createBrowserHistory,
    createHashHistory,
    createMemoryHistory
} from 'history'
import { useHistory, Redirect } from "react-router-dom";
import HomePage from '../content/homePage/HomePage';
import salezoneIcon from '../../images/logo-salezone.png'
import topStick from '../../images/top-stick.png'


class DangNhap extends Component {


    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            password: '',
            loginError: '',
            loggedInStatus: false,
            user: []

        }

    }

    handleLogin(data) {
        this.setState({
            loggedInStatus: true,
            user: data
        });
        console.log( this.state.user.phone)
    }


    login = (event) => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "http://103.102.46.103:3000/admin_login/";
        // sau khi post số điện thoại và pass lên, so sánh và trả về object là user đăng nhập
        Axios.post(proxyurl + url, { phone: this.state.phone, password: this.state.password }).
            then(response => {
                console.log(response);
                if (response.data[0].phone === this.state.phone) {
                    this.handleLogin(response.data[0]);//nếu số điện thoại nhập và số điện thoại data giống nhau thì truyền data vào props Handlelogin ở App.js
                }
                alert("duoc roi day")
            }).catch(error => {
                console.log(error);
            })
    }

    keyPressed = (event) => {
        if (event.key === "Enter") {
            this.login();
        }
    }

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

        console.log(this.state)
    }


    render() {
        const { loggedInStatus, phone, password,user } = this.state
        if (loggedInStatus) {
            return (<HomePage data={user}></HomePage>)
        }
        return (
            <div className="background-login">
                <div className="container form_login_admin">
                    <div className="top-stick-image">
                        <img src={topStick}></img>
                    </div>

                    <div className="login-box">

                        <div className="header-dangnhap">
                            <span><img src={salezoneIcon}></img></span>
                        </div>

                        <div className="login_window_admin">
                            <div className="content-login-input">
                                <p className="Login_form">Login form</p>
                                <div><input className="Rounded_Rectangle_1_copy_4" placeholder="  Số điện thoại đăng nhập" type="text" onChange={this.onChangeHandler} name="phone" value={phone} /></div>
                                <br />
                                <div><input className="Rounded_Rectangle_1_copy_4" placeholder="  Mật khẩu" onChange={this.onChangeHandler} name="password" value={password} type="password" /></div>
                                <br></br>
                                <div><span className="col-6">
                                    <input className="remember_password" id="rememberPass" type="radio" value="nhớ mật khẩu"></input>
                                    <label htmlFor="rememberPass"> Nhớ mật khẩu</label></span>
                                    <span className="col-6 "><button className="login_button" onClick={this.login}>Đăng nhập</button></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DangNhap;