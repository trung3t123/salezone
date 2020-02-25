import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

import axios from 'axios';
import suaIcon from '../../../images/icon-sua.png';
import xoaIcon from '../../../images/icon-xoa.png'

class QuanLiQuangCao extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            banners: []

        }
    }


    handleRemove = (event) => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/"
        const url = 'http://103.102.46.103:3000/banner/' + event.target.id;
        axios
            .delete(proxyurl + url).then(response => {
                console.log(response)
                alert('xóa banner thành công')
                window.location.reload();
            }).catch(error => {
                console.log(error)
                alert('failed')
            })
    }




    componentWillMount() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/"
        const url = 'http://103.102.46.103:3000/banners';
        fetch(proxyurl + url)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    isLoaded: true,
                    banners: data
                })
                this.state.banners.map(banner => (
                    console.log(banner.imageBanner)
                ))
            })
            .catch(console.log)

    }


    render() {
        var { imageBanner, banners, isLoaded } = this.state

        if (!isLoaded) {
            return (
                <div>Loading....</div>
            )
        } else {
            return (
                <div className="container-right">
                    <div className="content-top">
                        <div className="title-qcbanner manager-title">Quản lý Quảng cáo &amp; Banner</div>
                        <div className="add-banner-bt"><Link to="/AddQuangCao"><span>Thêm banner</span></Link></div>
                    </div>
                    <div className="content-center" >
                        <div className="search-box">
                            <form id="searchid" method="get">
                                <input type="search" id="search-input" name="searchInput" onChange={this.changeHandler} placeholder="Nhập tên, số điện thoại" />
                                <input type="button" id="search-submit" onClick={this.searchStore} className="button" defaultValue="Tìm kiếm" />
                            </form></div>
                        <div className="list-table">
                            <table width="100%">
                                <tbody><tr className="row1-tab">
                                    <th>Ảnh Banner</th>
                                    <th>Tên công ti</th>
                                    <th>Số điện thoại công ti</th>
                                    <th>Địa chỉ công ti</th>
                                    <th>Vị trí quảng cáo</th>
                                    <th>Trang đặt quảng cáo</th>
                                    <th>Hành động</th>
                                    <th>Thời gian Đăng kí</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                    {banners.map(banner => (
                                        <tr className="row-tab" key={banner._id}>
                                            <td><img src={"http://103.102.46.103:3000/" + banner.imageBanner.slice(7)} height={100} width={100} /></td>
                                            <td>{banner.nameCompany}</td>
                                            <td>{banner.phoneCompany}</td>
                                            <td>{banner.addressCompany}</td>
                                            <td>{banner.position}</td>
                                            <td>{banner.page}</td>
                                            <td>{banner.action}</td>
                                            <td>{banner.time}</td>
                                            <td><Link to={"/ChiTietQuangCao/" + banner._id}><input type="image" src={suaIcon}></input></Link></td>
                                            <td><input id={banner._id} onClick={this.handleRemove} type="image" src={xoaIcon} /></td>
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

export default QuanLiQuangCao;