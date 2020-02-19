import React, { Component } from 'react';
import axios from 'axios';

class ThemTaiKhoan extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            password: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "http://103.102.46.103:3000/users";
        e.preventDefault();
        console.log(this.state)
        axios.post(proxyurl + url, this.state).then(response => {
            console.log(response)
            alert('tao tai khoan thanh cong')
        }).catch(error => {
            console.log(error)
            alert('failed')
        })
    }


    render() {
        const { name, phone, password } = this.state;
        return (

            <div>
                <div className="container-right">
                    <form action="" onSubmit={this.submitHandler}>
                        <div className="row">
                            <span className="col-1">Tên: </span> <span className="col-2"><input type="text" name="name" value={name} onChange={this.changeHandler} placeholder="Tên người dùng" /> </span>
                        </div>
                        <div className="row">
                            <span className="col-1">SDT: </span> <span className="col-2"><input type="text" name="phone" value={phone} onChange={this.changeHandler} placeholder="SDt" /> </span>
                        </div>
                        <div className="row">
                            <span className="col-1">Password: </span> <span className="col-2"><input type="text" name="password" value={password} onChange={this.changeHandler} placeholder="password" /> </span>
                        </div>
                        <div className="row">
                            <span className="col-2"><input type="submit" value="Đăng kí" /></span>
                        </div>
                    </form>

                </div>

            </div>

        );
    }



}


export default ThemTaiKhoan;