import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";


class QuanLiTinNhan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }

    }

    componentWillMount() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "http://103.102.46.103:3000/users";
        fetch(proxyurl + url).then(res => res.json())
            .then((data) => {
                this.setState({
                    isloaded: true,
                    items: data,
                })
            })
            .catch(console.log)
    }

    render() {
        var { isLoaded, items } = this.state;

        return (
            <div>
                <div className="container-right">
                    <header><h1>Quản lí Tin nhắn</h1></header>
                    <div>
                        <h2>Search/Filter Dropdown</h2>
                        <p>Click on the button to open the dropdown menu, and use the input field to search for a specific dropdown link.
                    </p>
                        <div className="dropdownLeft">
                            <button onClick={dropSender} className="senderDropdown">Thêm người gửi</button>

                            <div id="senderSearchDropdown" className="sender-content">
                                <input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()" />
                                {items.map(item => (
                                    <Link to="#" key={item._id}>{item.name}</Link>
                                )
                                )}

                            </div>

                        </div>
                        <div className="dropdownRight">
                            <button onClick={dropReciever} className="recieverDropdown">Thêm người nhận</button>
                            <div id="recieverSearchDropdown" className="reciever-content">
                                <input type="text" placeholder="Search.." id="rightInput" onkeyup="filterFunction()" />
                                {items.map(item => (
                                    <Link to="#" key={item._id}>{item.name}</Link>
                                )
                                )}

                            </div>
                        </div>
                    </div>
                    <Switch>
                        <Route path="/QuanLiTinNhan/:id1.:id2" children={<HoiThoai />} />
                    </Switch>
                    <HoiThoai></HoiThoai>
                </div>
            </div>
        );


    }
}

export default QuanLiTinNhan;

function HoiThoai() {
    let { id1, id2 } = useParams();
    return (
        <div>
            <div className="per1">
                tin nhan nguoi` 1 : {id1}
            </div>
            <div className="per2">
                tin nhan nguoi` 2 : {id2}
            </div >
            <div className="per1">
                tin nhan nguoi` 1
               </div>
            <div className="per2">
                tin nhan nguoi` 2
               </div >
            <div className="per1">
                tin nhan nguoi` 1
               </div>
            <div className="per2">
                tin nhan nguoi` 2
               </div >
            <div className="per1">
                tin nhan nguoi` 1
               </div>
            <div className="per2">
                tin nhan nguoi` 2
               </div >
            <div className="per1">
                tin nhan nguoi` 1
               </div>
            <div className="per1">
                tin nhan nguoi` 1
               </div>
            <div className="per1">
                tin nhan nguoi` 1
               </div>
            <div className="per1">
                tin nhan nguoi` 1
               </div>
            <div className="per1">
                tin nhan nguoi` 1
               </div>
            <div className="per2">
                tin nhan nguoi` 2
               </div >
            <div className="per1">
                tin nhan nguoi` 1
               </div>
            <div className="per2">
                tin nhan nguoi` 2
               </div >
        </div>
    )
}


function dropSender() {
    document.getElementById("senderSearchDropdown").classList.toggle("show");
}


function dropReciever() {
    document.getElementById("recieverSearchDropdown").classList.toggle("show");
}






