import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, NavLink
} from "react-router-dom";
import QuanLiTaiKhoan from '../content/quanLiTaiKhoan/QuanLiTaiKhoan';
import QuanLiCuaHang from '../content/quanLiCuaHang/QuanLiCuaHang';
import ChiTietCuaHang from '../content/quanLiCuaHang/ChiTietCuaHang';
// import QuanLiCuaHang from '../content/quanLiCuaHang/QuanLiCuaHang';
// import QuanLiCuaHang from '../content/quanLiCuaHang/QuanLiCuaHang';
// import QuanLiCuaHang from '../content/quanLiCuaHang/QuanLiCuaHang';
// import QuanLiCuaHang from '../content/quanLiCuaHang/QuanLiCuaHang';

function Home() {
    return <h2> Xin chào Admin</h2>;
}

class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: "active"
        }
    }
    
    // changeHandler = (e) => {
    //     this.setState({
    //         [e.target.className]: "active"
    //     })
    // }
    render() {

        return (
            <div className="sidebar-left">
                <div className="user-info">
                    <img src="https://scontent.fhan5-1.fna.fbcdn.net/v/t1.0-0/p640x640/78873116_2482866802037227_8658325400658640896_o.jpg?_nc_cat=109&_nc_ohc=AMIcv0EAfHwAX-lgMtk&_nc_ht=scontent.fhan5-1.fna&_nc_tp=6&oh=4b585311e6568be215771b650e03b2f6&oe=5ECD715F" width={50} height={50} />
                    <p className="name-user"><span>HƯNG BARCA</span></p>
                </div>
                <div className="list-menu">
                    <ul>
                        <li className="manage-user-acount">
                            <div className="topdiv"><Link to="/TaiKhoan">Quản lí tài khoản</Link></div>
                        </li>
                        <li className="manage-user-store active">
                            <div className="topdiv"><Link to="/CuaHang"> quản lí cửa hàng</Link></div>
                        </li>
                        <li className="manage-aboutus-banner">
                            <div className="topdiv"><Link to="/QuangCao">quản lí quảng cáo</Link></div>
                        </li>
                        <li className="manage-notification">
                            <div className="topdiv"><Link to="/ThongBao">gửi thông báo</Link></div>
                        </li>
                        <li className="manage-chat">
                            <div className="topdiv"><Link to="/QuanLiTinNhan">Quản lí tin nhắn</Link></div>
                        </li>
                        <li className="manage-decentralization">
                            <div className="topdiv"><Link to="/PhanQuyen">phân quyền/ thêm sub admin</Link></div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideMenu;