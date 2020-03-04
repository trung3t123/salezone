import React, { Component, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const ChiTietAdmin = () => {
    const [id, setId] = useState(useParams());
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [userAccount, setUserAccount] = useState('');
    const [store, setStore] = useState('');
    const [banner, setBanner] = useState('');
    const [notification, setNotification] = useState('');
    const [message, setMessage] = useState('');
    const [roles, setRoles] = useState('');
    const [count, setCount] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);


    const update = (event) => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "http://103.102.46.103:3000/admin/";
        Axios.post(proxyurl + url + id.id, {
            userAccount: userAccount,
            store: store,
            banner: banner,
            notification: notification,
            message: message,
            roles: roles,
        }).then(res => {
            console.log(res);

        }).catch(error => {
            console.log(error);
        })
    }
    const loadCheckedBoxHandler = (input) => {
        if (input == 1) {
            return true;
        } else return false;
    }

    const checkboxChangeHandler = (event) => {
        if (event.target.name == "userAccount") {
            if (event.target.checked) {
                setUserAccount(1);
            } else setUserAccount(0)

        }
        if (event.target.name == "store") {
            if (event.target.checked) {
                setStore(1);
            } else setStore(0)
        }
        if (event.target.name == "phone") {
            if (event.target.checked) {
                setPhone(1);
            } else setPhone(0)
        }
        if (event.target.name == "banner") {
            if (event.target.checked) {
                setBanner(1);
            } else setBanner(0)
        }
        if (event.target.name == "notification") {
            if (event.target.checked) {
                setNotification(1);
            } else setNotification(0)
        }
        if (event.target.name == "message") {
            if (event.target.checked) {
                setMessage(1);
            } else setMessage(0)
        }
        if (event.target.name == "roles") {
            if (event.target.checked) {
                setRoles(1);
            } else setRoles(0)
        }
    }



    useEffect(() => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "http://103.102.46.103:3000/admin/";
        fetch(proxyurl + url + id.id).then(res => res.json()).then(data => {
            setUserAccount(data.userAccount);
            setName(data.name)
            setPhone(data.phone)
            setStore(data.store)
            setBanner(data.banner)
            setNotification(data.notification)
            setMessage(data.message)
            setRoles(data.roles)
            setIsLoaded(true)
        }).catch(error => {
            console.log(error)
        })
        setCount(100);
    }, [count])
    if (!isLoaded) {
        return (
            <div>
                Loading......
            </div>
        )
    } else

        return (
            <div className="container-right">
                <div className="tablenav-pages update-pageqlqc">
                    <div>{name}</div>
                    <div>{phone}</div>
                    <div>
                        <input type="checkbox" name="userAccount"
                            onChange={checkboxChangeHandler}
                            defaultChecked={loadCheckedBoxHandler(userAccount)} >
                        </input>
                    </div>
                    <div>
                        <input type="checkbox" name="store"
                            onChange={checkboxChangeHandler}
                            defaultChecked={loadCheckedBoxHandler(store)}>
                        </input>
                    </div>
                    <div>
                        <input type="checkbox" name="banner"
                            onChange={checkboxChangeHandler}
                            defaultChecked={loadCheckedBoxHandler(banner)}>
                        </input>
                    </div>
                    <div>
                        <input type="checkbox" name="notification"
                            onChange={checkboxChangeHandler}
                            defaultChecked={loadCheckedBoxHandler(notification)}>
                        </input>
                    </div>
                    <div
                    ><input type="checkbox" name="message"
                        onChange={checkboxChangeHandler}
                        defaultChecked={loadCheckedBoxHandler(message)}>
                        </input>
                    </div>
                    <div>
                        <input type="checkbox" name="roles"
                            onChange={checkboxChangeHandler}
                            defaultChecked={loadCheckedBoxHandler(roles)}>
                        </input>
                    </div>
                    <a href="#" onClick={update}><span>Cập nhật</span></a>
                </div>
            </div>
        );
}

export default ChiTietAdmin;