import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import ChiTietCuaHang from './ChiTietCuaHang';
import axios from 'axios';



class QuanLiCuaHang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isloaded: false,
        }
    }

    componentDidMount() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "http://103.102.46.103:3000/stores";
        fetch(proxyurl + url)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    isloaded: true,
                    items: data,
                })
            })
            .catch(console.log)
    }

    deleteCuaHang = (event) => {
        console.log(event.target.id);
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "http://103.102.46.103:3000/store/" + event.target.id;
        axios.delete(proxyurl + url).then(
            respone => {
                alert("Xóa Cửa hàng thành công")
                window.location.reload();
            }
            
        )
    }

    render() {


        var { isloaded, items } = this.state;
        if (!isloaded) {
            return <div>Loading...</div>;
        } else {
            return (

                <div className="container-right">
                    <div className="content-top">
                        <div className="title-left quanlych">Quản lý tài khoản cửa hàng
      <select><option>Đã xét duyệt</option>
                                <option>Chưa xét duyệt</option>
                                <option>Đang chờ</option>
                            </select>
                        </div>
                        <div className="add-user-bt add-tkch"><Link to="/AddCuaHang"><span>Thêm cửa hàng</span></Link></div>
                    </div>
                    <div className="content-center">
                        <div className="search-box">
                            <form id="searchid" method="get">
                                <input type="search" id="search-input" name="s" defaultValue placeholder="Nhập tên, số điện thoại" />
                                <input type="submit" id="search-submit" className="button" defaultValue="Tìm kiếm" />
                            </form></div>
                        <div className="list-table">
                            <table width="100%">
                                <tbody><tr className="row1-tab">
                                    <td>Tên cửa hàng</td>
                                    <td>Địa chỉ</td>
                                    <td>SĐT</td>
                                    <td>status</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                    {items.map(item => (
                                        <tr key={item._id}>
                                            <td>{item.nameStore}</td>
                                            <td >{item.addressStore}</td>
                                            <td>{item.phoneStore}</td>
                                            <td>{item.status}</td>
                                            <td><button><Link to={"/ChiTietCuaHang/" + item._id}>Info</Link></button></td>
                                            <td><button id={item._id} onClick={this.deleteCuaHang}>Delete</button></td>
                                        </tr>
                                    ))}
                                </tbody></table>
                        </div>
                    </div>
                </div>
            );
        }

    }

}

export default QuanLiCuaHang;