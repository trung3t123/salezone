import React, { Component } from 'react';
import QuanLiTaiKhoan from './quanLiTaiKhoan/QuanLiTaiKhoan';
import QuanLiCuaHang from './quanLiCuaHang/QuanLiCuaHang';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ChiTietCuaHang from './quanLiCuaHang/ChiTietCuaHang';

class Content extends Component {

    render() {
        return (
            <div>
                <Route path="/TaiKhoan">
                    <QuanLiTaiKhoan></QuanLiTaiKhoan>
                </Route>
                <Route path="/CuaHang">
                    <QuanLiCuaHang></QuanLiCuaHang>
                </Route>

                {/* <Route path="/QuangCao">
                                <QuanLiQuangCao></QuanLiQuangCao>
                            </Route> */}
                {/* <Route path="/ThongBao">
                                <QUanLiThongBao></QUanLiThongBao>
                            </Route> */}
                {/* <Route path="/TinNhan">
                            </Route> */}
                {/* <Route path="/PhanQuyen">
                            </Route> */}

                <Route path="/ChiTietCuaHang/:id" >
                    <ChiTietCuaHang/>
                </Route>
            </div>
        );
    }
}



export default Content;