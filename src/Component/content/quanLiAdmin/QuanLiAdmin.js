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

class QuanLiAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: [],
            searchInput: ''
        }
    }

    componentWillMount() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "http://103.102.46.103:3000/admins";
        fetch(proxyurl + url).then(res => res.json()).then(data => {
            this.setState({
                isLoaded: true,
                items: data

            })
            console.log(data)
            console.log(data[0].notification[0])
        }).catch(error => {
            console.log(error)
        })
    }


    searchAdmin = (event) => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/"
        const url = 'http://103.102.46.103:3000/admin/find_like/' + this.state.searchInput;
        fetch(proxyurl + url).then(res => res.json()).then(data => (
            this.setState({
                isloaded: true,
                items: data
            })
        )).then(error => {
            console.log(error)
        })
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loadCheckedBoxHandler = (input) => {
        if (input == 1) {
            return true;
        } else return false;
    }

    removeAdmin = (event) => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "http://103.102.46.103:3000/admin/";
        axios.delete(proxyurl + url + event.target.id).then(response => {
            console.log(response);
            alert("xóa admin thành công");
            window.location.reload();
        })
    }



    render() {
        const { items, isLoaded } = this.state;
        if (!isLoaded) {
            return (<div>Loading....</div>)
        } else
            return (
                <div className="container-right">
                    <div className="content-top">
                        <div className="title-banner manager-title">Quản lý Sub Admin</div>
                    </div>
                    <button><Link to="/AddAdmin">Thêm Admin</Link></button>

                    <div id="form_ql">
                        <div className="content-center">
                            <div className="search-box">
                                <input type="search" id="search-input" name="searchInput" onChange={this.changeHandler} placeholder="Nhập tên, số điện thoại hoặc CMND" />
                                <input type="button" id="search-submit" onClick={this.searchAdmin} className="button" defaultValue="Tìm kiếm" />
                            </div>
                            <div className="list-table">
                                <table width="100%">
                                    <tbody><tr className="row1-tab">
                                        <th>Tên Admin</th>
                                        <th>SDT</th>
                                        <th>Tài khoản</th>
                                        <th>Cửa hàng</th>
                                        <th>Quảng cáo</th>
                                        <th>Thông báo</th>
                                        <th>Tin nhắn</th>
                                        <th>Phân quyền</th>
                                        <th></th>
                                    </tr>

                                        {items.map(item => (
                                            <tr key={item._id}>
                                                <td>{item.name}</td>
                                                <td>{item.phone}</td>
                                                <td><input type="checkbox" defaultChecked={this.loadCheckedBoxHandler(item.userAccount)} ></input></td>
                                                <td><input type="checkbox" defaultChecked={this.loadCheckedBoxHandler(item.store)}></input></td>
                                                <td><input type="checkbox" defaultChecked={this.loadCheckedBoxHandler(item.banner)}></input></td>
                                                <td><input type="checkbox" defaultChecked={this.loadCheckedBoxHandler(item.notification)}></input></td>
                                                <td><input type="checkbox" defaultChecked={this.loadCheckedBoxHandler(item.message)}></input></td>
                                                <td><input type="checkbox" defaultChecked={this.loadCheckedBoxHandler(item.roles)}></input></td>
                                                <td><input type="image" src={xoaIcon} id={item._id} onClick={this.removeAdmin}></input></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="tablenav-pages update-pageqlqc">
                            <a href="#"><span>Cập nhật</span></a>
                        </div>
                    </div>
                </div>
            );
    }
}

export default QuanLiAdmin;