import React, { Component } from 'react';

class QuanLiAdmin extends Component {
    render() {
        return (
            <div className="container-right">
                <header><h1>Quản lí Admin</h1></header>
                <div className="content-center">
                    <div className="search-box">
                        <form id="searchid" method="get">
                            <input type="search" id="search-input" name="s" defaultValue placeholder="Nhập tên, số điện thoại hoặc CMND" />
                            <input type="submit" id="search-submit" className="button" defaultValue="Tìm kiếm" />
                        </form></div>
                    <div>
                        <table width="100%">
                            <tbody>
                                <tr className="row1-tab">
                                    <th>Tên Admin</th>
                                    <th>Tài khoản</th>
                                    <th>Cửa hàng</th>
                                    <th>Quảng cáo</th>
                                    <th>Thông báo</th>
                                    <th>Tin nhắn</th>
                                    <th>Phân quyền/ thêm sub admin</th>
                                </tr>
                                <tr>
                                    <td>tên</td>
                                    <td><input type="checkbox"></input></td>
                                    <td><input type="checkbox"></input></td>
                                    <td><input type="checkbox"></input></td>
                                    <td><input type="checkbox"></input></td>
                                    <td><input type="checkbox"></input></td>
                                    <td><input type="checkbox"></input></td>
                                </tr>
                            </tbody></table>
                    </div>
                </div>
                <div className="tablenav-pages">
                    <ul>
                        <li className="prev"><a href="#"> &lt; </a></li>
                        <li><a href="#"> 1 </a></li>
                        <li className="active"><a href="#"> 2 </a></li>
                        <li><a href="#"> 3 </a></li>
                        <li><a href="#"> 4 </a></li><li><a href="#"> 5 </a></li>
                        <li className="next"><a href="#"> &gt; </a></li>
                    </ul>
                </div>
            </div>

        );
    }
}

export default QuanLiAdmin;