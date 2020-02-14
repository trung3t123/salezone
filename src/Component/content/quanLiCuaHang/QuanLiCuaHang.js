import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import ChiTietCuaHang from './ChiTietCuaHang';



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
        const url = "http://103.102.46.103:3000/users";
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
                        <div className="add-user-bt add-tkch"><a href="#"><span>Thêm cửa hàng</span></a></div>
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
                                    <td></td>
                                    <td></td>
                                </tr>
                                    {items.map(item => (
                                        <tr key={item._id}>
                                            <td>{item.name}</td>
                                            <td >{item.phone}</td>
                                            <td>{item.history}</td>
                                            <td><button><Link to={"/ChiTietCuaHang/" + item._id}>Info</Link></button></td>
                                            <td><button>Delete</button></td>
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