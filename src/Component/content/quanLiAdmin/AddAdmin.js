import React, { Component } from 'react';
import axios from 'axios';

class AddAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            password: '',
            userAccount: '0',
            store: '0',
            banner: '0',
            notification: '0',
            message: '0',
            roles: '0'
        }
    }

    nameAdminChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state);

    }
    changeHandler = (event) => {
        let isChecked = event.target.checked;
        if (isChecked) {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    }

    submitHandler = (event) => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "http://103.102.46.103:3000/admin";
        axios.post(proxyurl + url, this.state).then(response => {
            alert("them admin thanh cong")
            console.log(response)
            window.location.reload();
        }).catch(error => {
            console.log(error)
        })
    }


    render() {
        const { name, phone, password } = this.state

        return (
            <div className="container-right">
                <div className="row">
                    <span className="col-3">tên Admin:</span><span className="col-4"><input type="text" name="name" onChange={this.nameAdminChangeHandler} value={name} id="" /></span>
                </div>
                <div className="row">
                    <span className="col-3">Số điện thoại</span><span className="col-4"><input type="text" name="phone" onChange={this.nameAdminChangeHandler} value={phone} id="" /></span>
                </div>
                <div className="row">
                    <span className="col-3">Mật khẩu</span><span className="col-4"><input type="text" name="password" onChange={this.nameAdminChangeHandler} value={password} id="" /></span>
                </div>
                <div className="row">
                    <span className="col-3">Quản lí tài khoản</span><span className="col-4"><input type="checkbox" name="userAccount" onChange={this.changeHandler} value="1" /></span>
                </div>
                <div className="row">
                    <span className="col-3">Quản lí Cửa hàng</span><span className="col-4"><input type="checkbox" name="store" onChange={this.changeHandler} value="1" /></span>
                </div>
                <div className="row">
                    <span className="col-3">Quản lí Quảng cáo</span><span className="col-4"><input type="checkbox" name="banner" onChange={this.changeHandler} value="1" /></span>
                </div>
                <div className="row">
                    <span className="col-3">Quản lí thông báo:</span><span className="col-4"><input type="checkbox" name="notification" onChange={this.changeHandler} value="1" /></span>
                </div>
                <div className="row">
                    <span className="col-3">Quản lí tin nhắn</span><span className="col-4"><input type="checkbox" name="message" onChange={this.changeHandler} value="1" /></span>
                </div>
                <div className="row">
                    <span className="col-3">Quản lí phân quyền</span><span className="col-4"><input type="checkbox" name="roles" onChange={this.changeHandler} value="1" /></span>
                </div>

                <div className="row">
                    <span className="col-3"></span><span className="col-4"><button onClick={this.submitHandler}>
                        Thêm admin</button></span></div>
            </div>
        );
    }
}

export default AddAdmin;