import "../assets/sb-admin-2.css"
import "../assets/font-awesome/css/font-awesome.css"
import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import axios from "axios";
//nested jsx
const AddTransaction=()=>{
    const { id } = useParams();
    console.log(id)
    const [item, setItem] = useState([]);
    const [newTrans, setNewTrans]= useState({
        BRAND_NAME:"", TRANSAC_DATE:"", TRANSAC_QUANT:"", TRANSAC_EXPIRY:"", TRANSAC_PLCMNT:"", ITEM_ID:id
    });
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
    //
    const apiReqURL= "http://localhost:3002/api/newTransaction";
    const changeFormdata = (e)=>{      
        setNewTrans(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
        console.log(newTrans);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post(apiReqURL, newTrans);
          console.log(response.data);
          // You can handle success, update UI, etc. here
        } catch (error) {
          console.error('Error fetching data:', error);
          // You can handle errors, show error messages, etc. here
        }
        window.location.href = '/itemlist'; 
    console.log(newTrans)}
    //
    const handleExit= () => {
        window.location.href = '/itemlist';
    };
    //
    return (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Create New Item</h1>
            {/* <!-- Form --> */}
            <div className="card shadow mb-4 newitemform">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Item Information</h6>
                </div>
                <div className="card-body">
                    {item.sort((a, b) => a.ITEM_ID - b.ITEM_ID).map((item)=>{
                                        return(
                                            <>
                                            <label htmlFor="itemName">Item ID Number:</label>
                                            <p>{item.ITEM_ID}</p>
                                            <label htmlFor="itemName">Item Name:</label>
                                            <p>{item.ITEM_NAME}</p>
                                            </>
                                            )}
                                    )}
                
                        <hr className="sidebar-divider"/>
                    <form onSubmit={handleSubmit}>
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Add Quantity</h6>
                        </div>
                        <label htmlFor="brand">Brand Name</label>
                        <input onChange={changeFormdata} value={newTrans.BRAND_NAME} type="text" id="brandname" name="BRAND_NAME" required/>
                        <label htmlFor="brand">Date of Transaction</label>
                        <input onChange={changeFormdata} value={newTrans.TRANSAC_DATE} type="date" id="date" name="TRANSAC_DATE" required/>
                        <label htmlFor="brand">Quantity</label>
                        <input onChange={changeFormdata} value={newTrans.TRANSAC_QUANT} type="number" id="location" name="TRANSAC_QUANT" required/>
                        <label htmlFor="brand">Expiration</label>
                        <input onChange={changeFormdata} value={newTrans.TRANSAC_EXPIRY} type="date" id="date" name="TRANSAC_EXPIRY" required/>
                        <label htmlFor="brand">Storage Location</label>
                        <input onChange={changeFormdata} value={newTrans.TRANSAC_PLCMNT} type="text" id="brandname" name="TRANSAC_PLCMNT" required/>
                        <button type="submit">Add</button>
                        <button onClick={handleExit}type="submit" className="deleteButton">Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default AddTransaction;
