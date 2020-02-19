import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

import axios from 'axios';

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
                    <header><h1>Quản lí Banner</h1></header>
                    <div>
                        <button><Link to="/AddQuangCao">Thêm banner</Link>  </button>
                        <table>
                            <tbody><tr>
                                <th>Ảnh Banner</th>
                                <th>Tên công ti</th>
                                <th>Số điện thoại công ti</th>
                                <th>Địa chỉ công ti</th>
                                <th>Vị trí quảng cáo</th>
                                <th>Trang đặt quảng cáo</th>
                                <th>Hành động</th>
                                <th></th>
                                <th></th>
                            </tr>
                                {banners.map(banner => (
                                    <tr key={banner._id}>
                                        <td><img src={"http://103.102.46.103:3000/" + banner.imageBanner.slice(7)} height={100} width={100} /></td>
                                        <td>{banner.nameCompany}</td>
                                        <td>{banner.phoneCompany}</td>
                                        <td>{banner.addressCompany}</td>
                                        <td>{banner.position}</td>
                                        <td>{banner.page}</td>
                                        <td>{banner.action}</td>
                                        <td><button><Link to={"/ChiTietQuangCao/" + banner._id}>Info</Link></button></td>
                                        <td><button id={banner._id} onClick={this.handleRemove}>xóa</button></td>
                                    </tr>
                                ))}
                            </tbody></table>
                    </div>
                </div>

            );
        }
    }
}

export default QuanLiQuangCao;