import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function dropReciever() {
    document.getElementById("senderSearchDropdown").classList.toggle("show");
}


class QuanLiThongBao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serverId: 'adminTrung',
            roles: 'admin',
            clientId: '',
            content: '',
            result: [],
            currentText: "",
            isResultBlank: true
        }
    }

    findButton = () => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/"
        const url = 'http://103.102.46.103:3000/' + this.state.roles + '/find_like/';
        console.log(url)
        fetch(proxyurl + url + this.state.currentText)
            .then(res => res.json()).then(
                data => {
                    this.setState({ result: data, isResultBlank: false })
                    console.log(this.state.result)
                })
            .catch(error => { console.log(error) })
    }

    changeText = (event) => {
        this.setState({ currentText: event.target.value });
        console.log(this.state.currentText)
    }



    addReciever = (event) => {
        this.state.clientId += event.target.textContent + ","
        console.log(this.state.clientId)
        this.setState({

        })
    }

    rolesChooserHandler = (event) => {
        this.setState({ roles: event.target.value })
        console.log(this.state.roles)
    }

    submitNotification = (event) => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = 'http://103.102.46.103:3000/notification';
        event.preventDefault();
        var numberList = this.state.clientId.split(",")
        numberList.map(number => {
            var data = {
                serverId: this.state.serverId,
                clientId: number,
                content: this.state.content
            }
            console.log(data);
            axios.post(proxyurl + url, data).then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error);
            });
        })


    }

    changeContent = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    render() {
        const { roles, clientId, content, result, currentText, isResultBlank } = this.state
        return (
            <div className="container-right">
                <div className="content-top">
                    <div className="title-notification manager-title">Thông báo</div>
                </div>
                <div className="notification_form">
                    <div id="form_notification" method="get">
                        <div className="top-form">
                            <div className="form-left">
                                <div className="action-click"><p>Gửi tới</p>
                                    <select id="rolesChooser" onChange={this.rolesChooserHandler} name="roles">
                                        <option value="store">Cửa hàng </option>
                                        <option value="user">Người dùng</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </div>
                                <div className="search-noti">
                                    <input type="text" name="s" id="search-input" onClick={dropReciever} onChange={this.changeText} value={currentText} placeholder="add người nhận"></input>
                                    <div id="senderSearchDropdown" className="sender-content" >
                                        {result.map(user => (
                                            <p key={user._id} onClick={this.addReciever}>{user.phone}</p>
                                        ))}
                                    </div>
                                    <input onClick={this.findButton} type="submit" id="search-submit" className="button" defaultValue="Thêm" />
                                </div>

                            </div>
                            <div className="form-right">
                                <div className="receiver">
                                    <p>Người nhận</p>
                                    <textarea placeholder="người nhận" onChange={this.addReciever} value={clientId} name="clientId" className="list-receiver"/>
                                </div>
                            </div>
                        </div>
                        <textarea id="content-form" name="content" onChange={this.changeContent} value={content} placeholder="nội dung thông báo" />
                        <input onClick={this.submitNotification} type="button" defaultValue="GỬI" id="bt_formgui" />
                    </div>
                </div>




                {/* 
                <div className="row">
                    <p className="col-1">Gửi tới:</p>
                    <select id="rolesChooser" onChange={this.rolesChooserHandler} name="roles" className="col-2">
                        <option value="store">Cửa hàng </option>
                        <option value="user">Người dùng</option>
                        <option value="admin">Admin</option>
                    </select>
                    <p className="col-3">Người nhận:</p>
                    <textarea rows={4} cols={30} placeholder="người nhận" onChange={this.addReciever} value={clientId} name="clientId" />
                </div>
                <input type="textbox" onClick={dropReciever} onChange={this.changeText} value={currentText} placeholder="add người nhận"></input>
                <button onClick={this.findButton}>Tim kiem</button>
                <div id="senderSearchDropdown" className="sender-content" >
                    {result.map(user => (
                        <p key={user._id} onClick={this.addReciever}>{user.phone}</p>
                    ))}
                </div>
                <br />

                <div className="row">
                    <span className="col-1"></span>
                    <textarea rows={20} cols={100} name="content" onChange={this.changeContent} value={content} placeholder="nội dung thông báo" />
                </div>
                <div className="row">
                    <span className="col-1"></span>
                    <button onClick={this.submitNotification}> Submit</button>
                </div> */}

            </div>

        );
    }
}


export default QuanLiThongBao;