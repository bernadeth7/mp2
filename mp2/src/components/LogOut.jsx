import "../assets/sb-admin-2.css"
import "../assets/font-awesome/css/font-awesome.css"
import axios from "axios";
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

const LogOut= () => {
    
    const handleCancelDelete = () => {
        window.location.href = '/dashboard';
    };

    const handleConfirmDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:3002/api/logOut`);
            console.log(response.data);
            console.log("Item deleted successfully");
            
        } catch (error) {
            console.error('Error deleting item:', error);
        }window.location.href = '/';
    };



    return (
        <div className="delete-notification-popup">
            <div className="delete-notification-content">
                <h2>Log Out Confirmation</h2>
                
                <p>Are you sure you want to log out? </p>
                                  <div className="button-container">
                    <button onClick={handleConfirmDelete}className="deleteButton">Log Out</button>
                    <button onClick={handleCancelDelete} >Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default LogOut;
