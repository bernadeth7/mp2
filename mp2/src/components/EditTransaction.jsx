import "../assets/sb-admin-2.css"
import "../assets/font-awesome/css/font-awesome.css"
import axios from "axios";
import { Link } from 'react-router-dom';
import React, {useEffect, useState} from "react"

import { useParams } from "react-router-dom";
//nested jsx
const EditTransaction=()=>{
    const { id } = useParams();
    console.log(id)
    const [trans, setTrans] = useState([]);
    const [newQuantity, setNewQuantity] = useState(0);
    const [oldQuantity, setOldQuantity]=useState([]); 
    useEffect(()=>{
        const fetchData= async ()=>{
            try {
                const response = await axios.get(`http://localhost:3002/api/transaction/${id}`);
                setTrans(response.data.data);
                if (response.data && response.data.length > 0) {
                    const transaction = response.data[0];
                    setOldQuantity(transaction.TRANSAC_QUANT);
                }else {
                    console.log('No transaction found for the provided ID');
                }
                console.log(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        const fetchQuant = async () => {
            try {
                const response = await axios.get(`http://localhost:3002/api/transactionQuant/${id}`);
                const data = response.data.data; 
                if (data && data.length > 0) {
                    const quant = parseInt(data[0].TRANSAC_QUANT);
                    setOldQuantity(quant);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchQuant()
        fetchData()
    },  [id]);
    // change date format
    const formattedDate = (dateString) => {
        const date = new Date(dateString);
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString('en-US', options); // Change 'en-US' to your desired locale
    }

    const handleQuant = (event) => {
        setNewQuantity(parseInt(event.target.value));
    };

    console.log(newQuantity)
    console.log(oldQuantity)

    const handleAddQuantity = async (event) => {
        event.preventDefault();
        try {
            const updatedQuantity = oldQuantity + newQuantity;
            await axios.put(`http://localhost:3002/api/editQuantity`, { quant: updatedQuantity, id});
            console.log('Transaction quantity updated successfully', updatedQuantity);
            // You may want to redirect or perform other actions after updating the quantity
        } catch (error) {
            console.error('Error updating transaction quantity:', error);
        }
        window.location.href = `/editTransaction/${id}`; 
    };
    const handleSubtractQuantity = async (event) => {
        event.preventDefault();
        try {
            const updatedQuantity = oldQuantity - newQuantity;
            await axios.put(`http://localhost:3002/api/editQuantity`, { quant: updatedQuantity, id});
            console.log('Transaction quantity updated successfully', updatedQuantity);
            // You may want to redirect or perform other actions after updating the quantity
        } catch (error) {
            console.error('Error updating transaction quantity:', error);
        }
        
        window.location.href = `/editTransaction/${id}`; 
    };
    const handleExit= () => {
        window.location.href = '/itemlist';
    };
    return (
        <>
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Inventory Details</h1>
            {/* <!-- Form --> */}
            <div className="card shadow mb-4 newitemform">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Information</h6>
                </div>
                <div className="card-body">
                {trans.sort((a, b) => a.ITEM_ID - b.ITEM_ID).map((item)=>{
                                        return(
                                            <>
                                            <label htmlFor="itemName">Brand Name: {item.BRAND_NAME}</label>
                                            <label htmlFor="itemName">Inventory Date: {formattedDate(item.TRANSAC_DATE)}</label>
                                            <label htmlFor="itemName">Expiration Date: {formattedDate(item.TRANSAC_DATE)}</label>
                                            <label htmlFor="itemName">Storage Location: {item.TRANSAC_PLCMNT}</label>
                                            <label htmlFor="itemName">Quantity: {item.TRANSAC_QUANT}</label>
                                            </>
                                            )}
                                    )}
                                    </div>
            </div>
        </div>
                
                        <hr className="sidebar-divider"/>
        <div className="container-fluid">
                    {/* <!-- DataTales Example --> */}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Edit Quantity</h6>
                        </div>
                        <div className="card-body">
                        <div className="col mr-2">
                                <thead>
                                    <tr>
                                        <th>Quantity</th>
                                        
                                    </tr>
                                    <tbody>
                                    <tr>
                                        <td>
                                        <input onChange={handleQuant} value={newQuantity} type="text" id="itemName" name="ITEM_NAME" required/>
                                        </td>
                                        <td>
                                        <form onSubmit={handleAddQuantity}>
                                            <button type="submit" className="okButton">Add</button>
                                        </form>
                                        </td>
                                        <td>
                                        <form onSubmit={handleSubtractQuantity}>
                                            <button type="submit" className="viewButton">Subtract</button>
                                        </form>    
                                        </td>
                                        <td>
                                            <button onClick={handleExit}type="submit" className="deleteButton">Exit</button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </thead>
                            </div>
                        </div>
                    </div>

                </div>
            </>
    );
}
export default EditTransaction;
