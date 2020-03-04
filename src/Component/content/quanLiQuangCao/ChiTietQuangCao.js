import React, { Component, useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import axios from 'axios';

const ChiTietQuangCao = () => {
    const [id, setId] = useState(useParams());
    const [isLoaded, setIsLoaded] = useState(false);
    const [count, setCount] = useState(0);
    const [nameCompany, setNameCompany] = useState('');
    const [phoneCompany, setPhoneCompany] = useState('');
    const [addressCompany, setAddressCompany] = useState('');
    const [imageBanner, setImageBanner] = useState('');
    const [position, setPosition] = useState('');
    const [page, setPage] = useState('');
    const [action, setAction] = useState('');

    const onChangeHandler = (event) => {
        if (event.target.name == "nameCompany") {
            setNameCompany(event.target.value)
        } if (event.target.name == "phoneCompany") {
            setPhoneCompany(event.target.value)
        } if (event.target.name == "addressCompany") {
            setAddressCompany(event.target.value)
        } if (event.target.name == "position") {
            setPosition(event.target.value)
        } if (event.target.name == "page") {
            setPage(event.target.value)
        }
    }

    const update = (event) => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/"
        const url = 'http://103.102.46.103:3000/banner/';

        axios.post(proxyurl + url + id.id, {
            nameCompany: nameCompany,
            phoneCompany: phoneCompany,
            addressCompany: addressCompany,
            imageBanner: imageBanner,
            position: position,
            page: page,
            action: action,
        }).then(res => {
            console.log(res)
            alert("update rồi đó con trai")

        }).catch(error => {
            console.log(error)
        })
    }


    useEffect(() => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/"
        const url = 'http://103.102.46.103:3000/banner/';
        fetch(proxyurl + url + id.id).then(res => res.json())
            .then(data => {
                setNameCompany(data.nameCompany);
                setPhoneCompany(data.phoneCompany);
                setAddressCompany(data.addressCompany);
                setImageBanner(data.imageBanner);
                setPosition(data.position);
                setPage(data.page);
                setAction(data.action);
                setIsLoaded(true);
            }).catch(error => {
                console.log(error)
            })
        setCount(100);
    }, [count])


    if (!isLoaded) {
        return (
            <div>Loading...</div>)
    } else
        return (
            <div className="container-right">
                <div className="content-top">
                    <div className="title-left quanlych">Chi tiết Quảng cáo</div>
                </div>
                <div className="content-chitiet">
                    <div className="title-namestore linestore"><b>Tên Công ti: </b>
                        <input className="editmode" onChange={onChangeHandler} type="text" name="nameCompany" defaultValue={nameCompany}></input>
                    </div>
                    <div className="except-store linestore">
                        <b>Số diện thoại Công ti: </b><input type="text" className="editmode" onChange={onChangeHandler} name="description" defaultValue={phoneCompany}></input >
                    </div>
                    <div className="except-store linestore">
                        <b>Địa chỉ công ti: </b><input type="text" className="editmode" onChange={onChangeHandler} name="description" defaultValue={addressCompany}></input >
                    </div>
                    <div className="except-store linestore">
                        <b>vị trí: </b><input type="text" className="editmode" onChange={onChangeHandler} name="description" defaultValue={position}></input >
                    </div>
                    <div className="except-store linestore">
                        <b>Trang web: </b><input type="text" className="editmode" onChange={onChangeHandler} name="description" defaultValue={page}></input >
                    </div>
                    <div className="except-store linestore">
                        <b>Hành động: </b><input type="text" className="editmode" onChange={onChangeHandler} name="description" defaultValue={action}></input >
                    </div>
                    <div className="except-store linestore">
                        <b>Ảnh đăng kí quảng cáo: </b><img src={"http://103.102.46.103:3000/" + imageBanner.slice(7)} height={100} width={100} />
                    </div>
                </div>
                <div className="content-bottom">
                    <div className="save-prd"><a href="#" onClick={update}><span>LƯU LẠI</span></a></div>
                    <div className="huy-prd"><a href="#"><span>HỦY</span></a></div>
                </div>



            </div>

        );
}

export default ChiTietQuangCao;