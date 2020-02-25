import React, { Component } from 'react';
import axios from 'axios';
import Popup from "reactjs-popup";

class AddCuaHang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: Math.random(),
            nameStore:'',
            phoneStore:'',
            addressStore:'',
            status:'',
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
        console.log(this.state)
    }
    submitHandler = (event) => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "http://103.102.46.103:3000/store/";
        event.preventDefault();
        console.log('====================================');
        console.log(this.state);
        console.log('====================================');
        axios.post(proxyurl + url, this.state).then((response) => {
            console.log(response);
            alert("Thêm Cửa Hàng thành công")
            window.location.reload();
        }).catch((error) => {
            console.log(error);
            alert("Thêm cửa hàng không thành công")
        })
    }


    render() {
        const { nameStore, phoneStore, addressStore, status } = this.state
        return (
            <div className="container-right">
                <header> <h1>Thêm cửa hàng</h1></header>
                <div className="row">
                    <span className="col-2">Tên cửa hàng:</span><span className="col-4"><input type="text" name="nameStore" value={nameStore} onChange={this.changeHandler} /></span>
                </div>

                <div className="row"> <span className="col-2">Số diện thoại:</span><span className="col-4"><input type="text" name="phoneStore" value={phoneStore}  onChange={this.changeHandler} /></span>
                </div>

                <div className="row"> <span className="col-2">Địa chỉ cửa hàng:</span><span className="col-4"><input type="text" name="addressStore" value={addressStore}  onChange={this.changeHandler} /></span>
                </div>

                <div className="row"> <span className="col-2">Trạng thái:</span><span className="col-4">
                    <select name="status" value={status} onChange={this.changeHandler} >
                        <option name="status" value="accepted" >Đã xét duyệt</option>
                        <option name="status" value="waiting" >Đang chờ</option>
                        <option name="status" value="denied" >Đã từ chối</option>
                    </select></span>
                </div>
                <br />
                <div className="row">
                    <span className="col-2"></span>
                    <span className="col-4"><button onClick={this.submitHandler}>Thêm cửa hàng</button></span>
                </div>
            </div>
        );
    }
}

export default AddCuaHang;