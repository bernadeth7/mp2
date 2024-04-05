import "../assets/sb-admin-2.css"
import "../assets/font-awesome/css/font-awesome.css"
import axios from "axios";
import React, {useEffect, useState} from "react"
import ReliefGive from "../img/reliefgive.jpg"
import Brand from "../img/brand.png"
import { Link } from 'react-router-dom';
//nested jsx

const LogIn=()=>{
    const [newLogIn, setNewLogIn]= useState({
        USER_ID:""
    });
    const [logIn, setLogIn]=useState({
        USER_EMAIL:"",
        USER_PASSWORD:""

    })
    const [userExists, setUserExists] = useState(false);

    const apiReqURL= "http://localhost:3002/api/check";
    const apiLogIn= "http://localhost:3002/api/newLogIn";
    const changeFormdata = (e)=>{      
        setLogIn({
            ...logIn,
            [e.target.name]: e.target.value
        });
        console.log(logIn);
    };
    console.log(logIn)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { USER_EMAIL, USER_PASSWORD } = logIn;
            const response = await axios.post(apiReqURL, {USER_EMAIL, USER_PASSWORD });
            setUserExists(response.data.exists);
            console.log(response.data.data)
            console.log(response.data.data.USER_ID)

            setNewLogIn(response.data.data)
            console.log(newLogIn)
            if (!response.data.exists) {
                // If user does not exist, proceed with sign up
                // You can redirect to sign-up page or handle it as per your requirement
                console.log("User does not exist. Proceed with sign up.");
                window.location.href = '/';
            } else {
                // If user exists, show error message or take appropriate action
                console.log(newLogIn)
                const response = await axios.post(apiLogIn, newLogIn);
                console.log(response.data.data)
                console.log("User already exists.");
                window.location.href = '/dashboard';
            }
        } catch (error) {
            console.error('Error checking user:', error);
            // setErrorMessage('Error checking user');
        }
    };
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
                                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                    </div>
                                    <form className="user" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <input onChange={changeFormdata} value={logIn.USER_EMAIL} name="USER_EMAIL"type="email" className="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Enter Email Address..."/>
                                        </div>
                                        <div className="form-group">
                                            <input onChange={changeFormdata} value={logIn.USER_PASSWORD} name="USER_PASSWORD" type="password" className="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Password"/>
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox small">
                                                <input type="checkbox" className="custom-control-input" id="customCheck"/>
                                                <label className="custom-control-label" for="customCheck">Remember
                                                    Me</label>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-user btn-block" >Log In</button>
                                        <hr/>
                                    </form>
                                    <hr/>
                                    
                                    <div className="text-center">
                                        <a className="small" href='/signUp'>Create an Account!</a>
                                    </div>
                                </div>
                            
                        </div>
                    </div>
                </div>

            </div>

        </div>
        </div>
    );
}
export default LogIn;
