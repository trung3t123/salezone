import React, { Component } from 'react';

class QuanLiThongBao extends Component {
    render() {
        return (
            <div>
                <FormNotification></FormNotification>
            </div>
        );
    }
}

function FormNotification() {
    return (
        <div className="container-right">
             <header><h1>Quản lí Thông báo</h1></header>
            <div className="row">
                <p className="col-1">Gửi tới:</p>
                <select id="rolesChooser" className="col-2">
                    <option value="volvo">Cửa hàng </option>
                    <option value="saab">Người dùng</option>
                    <option value="mercedes">Admin</option>
                </select>
                <p className="col-3">Người nhận:</p>
                <textarea rows={4} cols={30} defaultValue={"Khánh, Hưng, Trung"} />
            </div>
            <div className="row">
                <input type="textbox" className="col-3" placeholder="add người nhận"></input>
                <button>Thêm </button>
            </div>
            <br />

            <div className="row">
                <textarea rows={20} cols={100} defaultValue="Nội dung thông báo" />
            </div>
            <div>
                <button type="submit">Gửi thông báo</button>
            </div>
        </div>
    )
}



export default QuanLiThongBao;