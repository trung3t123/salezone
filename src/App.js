import './App.css';
import React, { Component, } from 'react';
import Content from './Component/content/Content.js';
import SideMenu from './Component/router/SideMenu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  withRouter,
  Redirect
} from "react-router-dom";
import ThemTaiKhoan from './Component/content/quanLiTaiKhoan/ThemTaiKhoan';
import QuanLiAdmin from './Component/content/quanLiAdmin/QuanLiAdmin';
import DangNhap from './Component/dangnhap/DangNhap';
import HomePage from './Component/content/homePage/HomePage';
import {
  createBrowserHistory,
  createHashHistory,
  createMemoryHistory
} from 'history'
import BaoMat from './Component/dangnhap/BaoMat';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <BaoMat></BaoMat>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;

