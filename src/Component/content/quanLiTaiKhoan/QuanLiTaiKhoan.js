import React, { Component } from 'react';



class QuanLiTaiKhoan extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isloaded: false,
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

    render() {
        var { isloaded, items } = this.state;
        if (!isloaded) {// sửa cái này
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
                            <div className="add-user-bt"><a href="#"><span>Thêm người dùng</span></a></div>
                        </div>
                        <div className="content-center">
                            <div className="search-box">
                                <form id="searchid" method="get">
                                    <input type="search" id="search-input" name="s" defaultValue placeholder="Nhập tên, số điện thoại hoặc CMND" />
                                    <input type="submit" id="search-submit" className="button" defaultValue="Tìm kiếm" />
                                </form></div>
                            <div className="list-table">
                                <table width="100%">
                                    <tbody><tr className="row1-tab">
                                        <td>Tên người dùng</td>
                                        <td>SĐT</td>
                                        <td>Lịch sử tìm kiếm</td>
                                        <td>Ngày tạo tài khoản</td>
                                    </tr>

                                        {items.map(item => (
                                            <tr key={item._id}>
                                                <td>{item.name}</td>
                                                <td >{item.phone}</td>
                                                <td>{item.history + ","}</td>
                                                <td>{item.create_date}</td>
                                            </tr>
                                        ))}

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
    }
}

export default QuanLiTaiKhoan;