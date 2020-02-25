import './App.css';
import React, { Component } from 'react';
import Content from './Component/content/Content.js';
import SideMenu from './Component/router/SideMenu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ThemTaiKhoan from './Component/content/quanLiTaiKhoan/ThemTaiKhoan';
import QuanLiAdmin from './Component/content/quanLiAdmin/QuanLiAdmin';
import DangNhap from './Component/dangnhap/DangNhap';


class App extends Component {


  render() {
    return (
      <Router>
        <div className="test">
          <SideMenu></SideMenu>
          <Content></Content>
          {/* <Qli></Qli> */}
        </div>
      </Router>
    );

  }
}
export default App;

