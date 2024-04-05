import "../assets/sb-admin-2.css"
import "../assets/font-awesome/css/font-awesome.css"
import axios from "axios";
import React, {useEffect, useState} from "react"
import { Link } from 'react-router-dom';

import Brand from "../img/brand.png"
//nested jsx

const SignUp=()=>{
    const [newUser, setNewUser]= useState({
        USER_NAME: "",
        USER_EMAIL: "",
        USER_PASSWORD:""
    });
    const apiReqURL= "http://localhost:3002/api/newUser";
    const changeFormdata = (e)=>{      
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        });
        console.log(newUser);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post(apiReqURL, newUser);
          console.log(response.data);
          // You can handle success, update UI, etc. here
        } catch (error) {
          console.error('Error fetching data:', error);
          // You can handle errors, show error messages, etc. here
        }
        window.location.href = '/'; 
    console.log(newUser)}
    return (
        <div className="container">

        <div className="row justify-content-center">

            <div className="col-xl-10 col-lg-12 col-md-9">

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            
                                <div className="p-5">
                                    <div className="text-center">
                                        <img className="imglogin" src={Brand}/>
                                    </div>
                                    <hr className="sidebar-divider my-0"/>
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Sign Up Form</h1>
                                    </div>
                                    <div>
                                    <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                            <input onChange={changeFormdata} value={newUser.USER_NAME} type="text" className="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp" name="USER_NAME"
                                                placeholder="Enter Your Name..."/>
                                        </div>
                                        <div className="form-group">
                                            <input onChange={changeFormdata} value={newUser.USER_EMAIL} type="email" className="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp" name="USER_EMAIL"
                                                placeholder="Enter Email Address..."/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password"  onChange={changeFormdata} value={newUser.USER_PASSWORD} className="form-control form-control-user"
                                                id="exampleInputPassword" name="USER_PASSWORD" placeholder="Password"/>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-user btn-block" >Create New Item</button>
                                        <hr/>
                                        <Link to={`/`} ><button className="btn btn-danger btn-user btn-block">Cancel</button></Link>
                                        <hr/>
                                    </form></div>
                                    <hr/></div>
                            
                        </div>
                    </div>
                </div>

            </div>

        </div>
        </div>
    );
}
export default SignUp;
