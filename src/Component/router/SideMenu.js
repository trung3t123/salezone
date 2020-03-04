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


class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
    }



    clickHandler = (e) => {

    }


    render() {

        return (
            <div className="sidebar-left">
                <div className="user-info">
                    <img src="https://scontent.fhan5-1.fna.fbcdn.net/v/t1.0-0/p640x640/78873116_2482866802037227_8658325400658640896_o.jpg?_nc_cat=109&_nc_ohc=AMIcv0EAfHwAX-lgMtk&_nc_ht=scontent.fhan5-1.fna&_nc_tp=6&oh=4b585311e6568be215771b650e03b2f6&oe=5ECD715F" width={50} height={50} />
                    <p className="name-user"><span>HƯNG BARCA</span></p>
                </div>
                <div className="list-menu">
                    <ul>
                        <li onClick={this.clickHandler} name="userAccount" className={`manage-user-acount ${this.state.userAccount[0] === 1 ? '' : 'hidden'}`}>
                            <div className="topdiv"><Link to="/TaiKhoan">Quản lí tài khoản</Link></div>
                        </li>
                        <li onClick={this.clickHandler} name="store" className={`manage-user-store  ${this.state.store[0] === 1 ? '' : 'hidden'}`}>
                            <div className="topdiv"><Link to="/CuaHang"> quản lí cửa hàng</Link></div>
                        </li>
                        <li onClick={this.clickHandler} name="banner" className={`manage-aboutus-banner  ${this.state.banner[0] === 1  ? '' : 'hidden'}`}>
                            <div className="topdiv"><Link to="/QuangCao">quản lí quảng cáo</Link></div>
                        </li>
                        <li onClick={this.clickHandler} name="notification" className={`manage-notification  ${this.state.notification[0] === 1  ? '' : 'hidden'}`}>
                            <div className="topdiv"><Link to="/ThongBao">gửi thông báo</Link></div>
                        </li>
                        <li onClick={this.clickHandler} name="message" className={`manage-chat  ${this.state.message[0] === 1  ? '' : 'hidden'}`}>
                            <div className="topdiv"><Link to="/QuanLiTinNhan">Quản lí tin nhắn</Link></div>
                        </li>
                        <li onClick={this.clickHandler} name="roles" className={`manage-decentralization ${this.state.roles[0] === 1  ? '' : 'hidden'}`}>
                            <div className="topdiv"><Link to="/PhanQuyen">phân quyền/ thêm sub admin</Link></div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideMenu;