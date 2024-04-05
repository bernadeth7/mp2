import {Container, Nav, Navbar} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import "../assets/sb-admin-2.css"
import "../assets/font-awesome/css/font-awesome.css"
import name from "../img/name.png"
import icon from "../img/Icon.png" 

import axios from "axios";
import person from "../img/undraw_profile.svg"
const Topbar=()=> {
    const [item, setItem] = useState([]);
    useEffect(()=>{
        const fetchData= async ()=>{
            try {
                const response = await axios.get(`http://localhost:3002/api/logInDetails`);
                setItem(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData()
    },);
  return (
    <>
              <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                    {/* <!-- Sidebar Toggle (Topbar) --> */}
                    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                        <i className="fa fa-bars"></i>
                    </button>
                    {/* <!-- Topbar Search --> */}
                    <form
                        className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div className="input-group">
                            <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                aria-label="Search" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">
                                    <i className="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                    {/* <!-- Topbar Navbar --> */}
                    <ul className="navbar-nav ml-auto">
                        {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                        <li className="nav-item dropdown no-arrow d-sm-none">
                            <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-search fa-fw"></i>
                            </a>
                            {/* <!-- Dropdown - Messages --> */}
                            <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                aria-labelledby="searchDropdown">
                                <form className="form-inline mr-auto w-100 navbar-search">
                                    <div className="input-group">
                                        <input type="text" className="form-control bg-light border-0 small"
                                            placeholder="Search for..." aria-label="Search"
                                            aria-describedby="basic-addon2"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>
                        {/* <!-- Nav Item - Alerts --> */}
                        
                        
                        {/* <!-- Nav Item - User Information --> */}
                        <li className="nav-item dropdown no-arrow">
                            
                            {item.sort((a, b) => a.ITEM_ID - b.ITEM_ID).map((item)=>{
                                        return(
                                            <>
                            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small">{item.USER_NAME}</span>
                                <img className="img-profile rounded-circle"
                                    src={person}/>
                            </a>
                            </>
                                            )}
                                    )}
                            
                        
                            {/* <!-- Dropdown - User Information --> */}
                            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Profile
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Settings
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Activity Log
                                </a><div className="topbar-divider d-none d-sm-block"></div>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="index.html" data-toggle="modal" data-target="#logoutModal">
                                    Logout
                                </a>
                            </div>
                        </li>
                        <li className="nav-item dropdown no-arrow"><a className="nav-link dropdown-toggle" href="/logOut" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <p className="mr-2 d-none d-lg-inline text-gray-600 small">LogOut</p>
                            </a></li>
                    </ul>
        </nav>
    </>
  );
}
export default Topbar;