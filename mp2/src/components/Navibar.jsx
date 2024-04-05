import {Container, Nav, Navbar} from 'react-bootstrap';
import {useState} from 'react';
import "../assets/sb-admin-2.css"
import "../assets/font-awesome/css/font-awesome.css"
import name from "../img/name.png"
import icon from "../img/Icon.png" 

import person from "../img/undraw_profile.svg"
const Navibar=()=> {
  return (
    <>
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="dashboard">
                        <div className="sidebar-brand-icon mx-3">
                            <img src={icon}/>
                        </div>
                        <div className="sidebar-brand-text mx-3">
                            <img src={name} />
                        </div>
              </a> 
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0"/>
            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <a className="nav-link" href="dashboard">
                    <i className="fas fa-fw fa-tachometer-alt"></i>

                    <span>Dashboard</span></a>
            </li>
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"/>
            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Inventory Management
            </div>
            {/* <!-- Nav Item - Items database --> */}
            <li className="nav-item">
                <a className="nav-link" href="itemlist">
                    <i className="fa fa-database" aria-hidden="true"></i>
                    <span>Items Database</span></a>
            </li>
            {/* <!-- Nav Item - Create new Item --> */}
            <li className="nav-item">
                <a className="nav-link" href="newitem">
                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                    <span>Create New Inventory Item</span></a>
            </li>
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"/>
            <div className="sidebar-heading">
                Distribution Event
            </div>
            {/* <!-- Nav Item - Events List --> */}
            <li className="nav-item">
                <a className="nav-link" href="eventlist.html">
                    <i className="fa fa-list-alt" aria-hidden="true"></i>
                    <span>Distribution List</span></a>
            </li>
            {/* <!-- Nav Item - Create Event --> */}
            <li className="nav-item">
                <a className="nav-link" href="newevent.html">
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                    <span>Distribute</span></a>
            </li>
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block"/>
            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Reports
            </div>
            {/* <!-- Nav Item - Inventory Summary --> */}
            <li className="nav-item">
                <a className="nav-link" href="/dashboard">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Inventory Summary</span></a>
            </li>
            {/* <!-- Nav Item - Alerts --> */}
            <li className="nav-item">
                <a className="nav-link" href="/nearExpiry">
                    <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                    <span>Alerts</span></a>
            </li>
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block"/>
            {/* <!-- Nav Item - Create Event --> */}
            
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block"/>
            {/* <!-- Sidebar Toggler (Sidebar) --> */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
        </ul>
        {/* <!-- End of Sidebar --> */}
        
    </>
  );
}
export default Navibar;