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
import QuanLiTinNhan from './quanLiTinNhan/QuanLiTinNhan';
import QuanLiThongBao from './quanLiThongBao/QuanLiThongBao';
import ThemTaiKhoan from './quanLiTaiKhoan/ThemTaiKhoan';
import QuanLiAdmin from './quanLiAdmin/QuanLiAdmin';
import QuanLiQuangCao from './quanLiQuangCao/QuanLiQuangCao';
import AddQuangCao from './quanLiQuangCao/AddQuangCao';
import ChiTietQuangCao from './quanLiQuangCao/ChiTietQuangCao';
import AddCuaHang from './quanLiCuaHang/AddCuaHang';
import AddAdmin from './quanLiAdmin/AddAdmin';
import ChiTietTaiKhoan from './quanLiTaiKhoan/ChiTietTaiKhoan';
import ChiTietAdmin from './quanLiAdmin/ChiTietAdmin';

class Content extends Component {
     constructor(props) {
         super(props);
        //  this.state = this.props.user
     }
     
    

    render() {
        return (
                <div>
                   
                    <Route path="/CuaHang">
                        <QuanLiCuaHang></QuanLiCuaHang>
                    </Route>
                    <Route path="/TaiKhoan">
                        <QuanLiTaiKhoan></QuanLiTaiKhoan>
                    </Route>
                    <Route path="/QuangCao">
                        <QuanLiQuangCao></QuanLiQuangCao>
                    </Route>
                    <Route path="/ThongBao">
                        <QuanLiThongBao></QuanLiThongBao>
                    </Route>
                    <Route path="/QuanLiTinNhan">
                        <QuanLiTinNhan></QuanLiTinNhan>
                    </Route>
                    <Route path="/PhanQuyen">
                        <QuanLiAdmin></QuanLiAdmin>
                    </Route>
                    <Route path="/ChiTietCuaHang/:id" >
                        <ChiTietCuaHang />
                    </Route>
                    <Route path="/ChiTietQuangCao/:id" >
                        <ChiTietQuangCao />
                    </Route>
                    <Route path="/ThemTaiKhoan" >
                        <ThemTaiKhoan />
                    </Route>
                    <Route path="/AddQuangCao" >
                        <AddQuangCao />
                    </Route>
                    <Route path="/AddCuaHang" >
                        <AddCuaHang />
                    </Route>
                    <Route path="/AddAdmin" >
                        <AddAdmin />
                    </Route>
                    <Route path="/ChiTietTaiKhoan/:id">
                        <ChiTietTaiKhoan></ChiTietTaiKhoan>
                    </Route>
                    <Route path="/ChiTietAdmin/:id">
                        <ChiTietAdmin></ChiTietAdmin>
                    </Route>
                </div>
        );
    }
}



export default Content;