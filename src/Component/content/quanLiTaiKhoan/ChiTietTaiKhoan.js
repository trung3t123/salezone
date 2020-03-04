import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Moment from 'react-moment';
import axios from 'axios';

const ChiTietTaiKhoan = () => {
    const [id, setId] = useState(useParams());
    const [isLoaded, setIsLoaded] = useState(false);
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [history,setHistory] = useState('')
    const [create_date, setCreateDate] = useState('');
    const [expiredDate, setExpiredDate] = useState('');
    
    

    const update = () => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "http://103.102.46.103:3000/user/";

        axios.post(proxyurl + url + id.id, { name: name, phone: phone, history: history }).then(response => {
            console.log(response)
            alert("xong rồi đấy")
            window.location.reload();
        }).catch(error => {
            console.log(error)
        })
    }

    const onchangeHandler = (event) => {
        if (event.target.name == "name") {
            setName(event.target.value)
        } if (event.target.name == "phone") {
            setPhone(event.target.value)
        } if (event.target.name == "history") {
            setHistory(event.target.value)
        }
        console.log(`${name},${phone},${history}`)
    }

    useEffect(() => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "http://103.102.46.103:3000/user/";
        fetch(proxyurl + url + id.id).then(res => res.json()).then(data => {
            setName(data.name)
            setPhone(data.phone)
            setHistory(data.history)
            setCreateDate(data.create_date)
            setExpiredDate(data.expiredDate)
            setIsLoaded(true);
        }).catch(error => {
            console.log(error);
        })
        setCount(100);
    }, [count])
    if (!isLoaded) {
        return <div > Loading...</div>
    }



    else {
        return (
            <div className="container-right">
                <div className="content-top">
                    <div className="title-left quanlych">Chi tiết tài khoản</div>
                </div>
                <div className="content-chitiet">
                    <div className="title-namestore linestore"><b>Tên người dùng: </b> <input className="editmode" name="name" onChange={onchangeHandler} type="text" defaultValue={name}></input></div>
                    <div className="hotline-store linestore"><b>SỐ ĐIỆN THOẠI:</b> <input className="editmode" name="phone" onChange={onchangeHandler} type="text" defaultValue={phone}></input></div>
                    <div className="hotline-store linestore"><b>Lịch sử tìm kiếm:</b> <input className="editmode" name="history" onChange={onchangeHandler} type="text" defaultValue={history}></input></div>
                    <div className="hotline-store linestore"><b>Ngày tạo tài khoản:</b> <Moment>{create_date}</Moment></div>
                    <div className="hotline-store linestore"><b>Ngày hết hạn:</b> <Moment>{expiredDate}</Moment></div>

                </div>
                <div className="content-bottom">
                    <div className="save-prd"><a href="#" onClick={update}><span>LƯU LẠI</span></a></div>
                    <div className="huy-prd"><a href="#"><span>HỦY</span></a></div>
                </div>

            </div>
        )
    }
}
export default ChiTietTaiKhoan;