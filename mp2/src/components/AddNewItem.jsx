import "../assets/sb-admin-2.css"
import "../assets/font-awesome/css/font-awesome.css"
import axios from "axios";
import React, {useEffect, useState} from "react"
import { Link } from 'react-router-dom';
//nested jsx

const AddNewItem=()=>{
    const [newItem, setNewItem]= useState({
        ITEM_NAME: "",
        CATEGORY_ID: ""
    });
    const apiReqURL= "http://localhost:3002/api/newItem";
    const changeFormdata = (e)=>{      
        setNewItem({
            ...newItem,
            [e.target.name]: e.target.value
        });
        console.log(newItem);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post(apiReqURL, newItem);
          console.log(response.data);
          // You can handle success, update UI, etc. here
        } catch (error) {
          console.error('Error fetching data:', error);
          // You can handle errors, show error messages, etc. here
        }
        window.location.href = '/itemlist'; 
    console.log(newItem)}
    return (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Create New Item</h1>
            {/* <!-- Form --> */}
            <div className="card shadow mb-4 newitemform">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Item Information</h6>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="itemName">Item Name:</label>
                        <input onChange={changeFormdata} value={newItem.ITEM_NAME} type="text" id="itemName" name="ITEM_NAME" required/>
                        <label htmlFor="category">Category:</label>
                        <select onChange={changeFormdata} value={newItem.CATEGORY_ID} id="category" name="CATEGORY_ID"  required>
                            <option value="">Select Category</option>
                            <option value="1">Relief Goods (Food)</option>
                            <option value="2">Medical Supply</option>
                            <option value="3">Emergency Kit</option>
                            <option value="4">Water and Sanitation</option>
                            <option value="5">Shelter and Housing</option>
                            <option value="6">Clothing</option>
                            <option value="7">Tools and Equipment</option>
                            <option value="8">Operational Supplies</option>
                        </select>
                       <button type="submit">Create New Item</button>
                       <Link to={`/itemList`} ><button >Cancel</button></Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default AddNewItem;
