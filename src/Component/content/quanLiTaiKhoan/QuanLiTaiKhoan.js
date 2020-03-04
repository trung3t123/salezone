import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import suaIcon from '../../../images/icon-sua.png';
import xoaIcon from '../../../images/icon-xoa.png'
class QuanLiTaiKhoan extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isloaded: false,
            searchInput: '',
            // loggedInStatus: this.props.user.loggedInStatus,
            // user: this.props.user.user
        }

    }

    componentDidMount() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "http://103.102.46.103:3000/users";
        fetch(proxyurl + url)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    isloaded: true,
                    items: data,
                })
            })
            .catch(console.log)
    }

    searchUser = (event) => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/"
        const url = 'http://103.102.46.103:3000/user/find_like/' + this.state.searchInput;
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
        console.log(this.state.searchInput)
    }

    render() {
        var { isloaded, items } = this.state;
        if (!isloaded) {
            return <div>đang load ding .. chờ tí là được</div>;
        } else {
            var { isloaded, items } = this.state;
            if (!isloaded) {
                return <div>Loading...</div>;
            } else {
                return (
                    <div className="container-right">
                        <div className="content-top">
                            <div className="title-left">Quản lý thông tin tài khoản User</div>
                            <div className="add-user-bt"><Link to="/ThemTaiKhoan"><span>Thêm người dùng</span></Link></div>
                        </div>
                        <div className="content-center">
                            <div className="search-box">
                                <form id="searchid" method="get">
                                    <input type="search" id="search-input" onChange={this.changeHandler} name="searchInput" placeholder="Nhập tên, số điện thoại hoặc CMND" />
                                    <input type="button" onClick={this.searchUser} id="search-submit" className="button" defaultValue="Tìm kiếm" />
                                </form></div>
                            <div className="list-table">
                                <table width="100%">
                                    <tbody><tr className="row1-tab">
                                        <td>Tên người dùng</td>
                                        <td>SĐT</td>
                                        <td>Lịch sử tìm kiếm</td>
                                        <td>Ngày tạo tài khoản</td>
                                        <td>Ngày hết hạn</td>
                                        <td></td>
                                        <td></td>
                                    </tr>

                                        {items.map(item => (
                                            <tr className="row2-tab" key={item._id}>
                                                <td>{item.name}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.history + ","}</td>
                                                <td><Moment>{item.create_date}</Moment></td>
                                                <td><Moment>{item.expiredDate}</Moment></td>
                                                <td><Link to={"/ChiTietTaiKhoan/" + item._id}><img src={suaIcon}></img></Link></td>
                                                <td><img src={xoaIcon}></img></td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
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
    }
}

export default QuanLiTaiKhoan;