import "../assets/sb-admin-2.css"
import "../assets/font-awesome/css/font-awesome.css"
import axios from "axios";
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

const DeleteNotificationPopup = () => {
    const { id } = useParams();
    console.log(id)
    const [item, setItem] = useState([]);
    // to view the item name
    useEffect(()=>{
        const fetchData= async ()=>{
            try {
                const response = await axios.get(`http://localhost:3002/api/viewItem/${id}`);
                setItem(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData()
    },  [id]);
    console.log(item)
    console.log(id)
    const handleCancelDelete = () => {
        window.location.href = '/itemlist';
    };

    const handleConfirmDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:3002/api/deleteItem/${id}`);
            console.log(response.data);
            console.log("Item deleted successfully");
            
        } catch (error) {
            console.error('Error deleting item:', error);
        }window.location.href = '/itemlist';
    };



    return (
        <div className="delete-notification-popup">
            <div className="delete-notification-content">
                <h2>Delete Confirmation</h2>
                {item.sort((a, b) => a.ITEM_ID - b.ITEM_ID).map((item)=>{
                    return(
                        <>
                <p>Are you sure you want to delete {item.ITEM_NAME}?</p></>
                    )
                })}
                <div className="button-container">
                    <button onClick={handleConfirmDelete}className="deleteButton">Delete</button>
                    <button onClick={handleCancelDelete} >Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteNotificationPopup;
