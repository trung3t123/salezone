import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import axios from 'axios';

class AddQuangCao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameCompany: '',
            phoneCompany: '',
            addressCompany: '',
            position: '',
            page: '',
            action: '',
            imageBanner: null
        }
    }

    

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    fileSelectedHandler = (event) => {

        this.setState({
            imageBanner: event.target.files[0]
        })
        console.log(event.target.files[0]);
    }



    fileUploadHandler = (event) => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/"
        const url = 'http://103.102.46.103:3000/banner';
        event.preventDefault();
        const fd = new FormData();
        fd.append('imageBanner', this.state.imageBanner, this.state.imageBanner.name);
        fd.append('nameCompany', this.state.nameCompany);
        fd.append('phoneCompany', this.state.phoneCompany);
        fd.append('addressCompany', this.state.addressCompany);
        fd.append('action', this.state.action);
        fd.append('position', this.state.position);
        fd.append('page', this.state.page);
        axios.post(proxyurl + url, fd).then(response => {
            console.log(response);
            alert(' thêm quảng cáo thành công');
        }).catch(error => {
            console.log(error);
            alert('upload failed');
        });
        console.log(fd)
    }
 
    render() {
        const { nameCompany, phoneCompany, addressCompany, position, page, action, } = this.state;
        return (
            <div className="container-right">
                <header><h1>Thêm banner</h1></header>
                <div className="row container">
                    <div className="col-6">
                        <div className="row"><span className="col-6">tên công ti: </span><span><input type="text" value={nameCompany} onChange={this.onChangeHandler} name="nameCompany" placeholder="Tên công ti" /></span></div>
                        <div className="row"> <span className="col-6">Số điện thoại công ti: </span><span><input type="text" value={phoneCompany} onChange={this.onChangeHandler} name="phoneCompany" placeholder="Số điện thoại công ti" /></span></div>
                        <div className="row"> <span className="col-6">Địa chỉ công ti: </span><span><input type="text" value={addressCompany} onChange={this.onChangeHandler} name="addressCompany" placeholder="Địa chỉ Công ti" /></span></div>
                        <div className="row"> <span className="col-6">Vị trí: </span><span><input type="text" name="position" value={position} onChange={this.onChangeHandler} placeholder="vị trí" /></span></div>
                        <div className="row"> <span className="col-6">Trang: </span><span><input type="text" name="page" value={page} onChange={this.onChangeHandler} placeholder="trang web" /></span></div>
                        <div>Hành động khi nhấn</div>
                        <select className="col-6" id="actionOnPage">
                            <option value="doNothing">Không làm gì cả</option>
                            <option value="openLink">Mở trang web</option>
                        </select>
                        <div>
                            <input name="action" onChange={this.onChangeHandler} value={action} type="text" placeholder="http://" />
                        </div>
                    </div>

                    <div className="col-6">
                        <div>Ảnh Banner</div>
                        <div>
                            <input type="file" onChange={this.fileSelectedHandler}></input>
                        </div>
                    </div>
                </div>
                <button onClick={this.fileUploadHandler}>Thêm Quảng cáo</button>
            </div>
        );
    }
}

export default AddQuangCao;