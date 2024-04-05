import "../assets/sb-admin-2.css"
import "../assets/font-awesome/css/font-awesome.css"
import axios from "axios";
import { Link } from 'react-router-dom';
import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom";
//nested jsx
const NearExpiry=()=>{
    const [list, setItemlist] = useState([]);
    const apiReqURL= `http://localhost:3002/api/nearExpiryTable`;
    useEffect(()=>{
        const fetchData= async ()=>{
            try {
                const response = await axios.get(apiReqURL);
                setItemlist(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            
        }
        fetchData()
        
    }, []);
    console.log(list)
    const formattedDate = (dateString) => {
        const date = new Date(dateString);
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString('en-US', options); // Change 'en-US' to your desired locale
    }

    return (
        <>
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Near Expiry Items</h1>
            
        </div>
        <hr className="sidebar-divider"/>
        <div className="container-fluid">
                    {/* <!-- DataTales Example --> */}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Inventory List</h6>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0" >
                                    <thead>
                                        <tr>
                                            {/* <th>ID</th> */}
                                            <th>Brand Name</th>
                                            <th>Inventory Date</th>
                                            <th>Expiration</th>
                                            <th>Location</th>
                                            <th>Quantity</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                    {list.sort((a, b) => a.ITEM_ID - b.ITEM_ID).map((item)=>{
                                        return(   
                                        <tr key={item.TRANSAC_ID}>
                                            {/* <td>{item.TRANSAC_ID}</td> */}
                                            <td>{item.BRAND_NAME}</td>
                                            <td>{formattedDate(item.TRANSAC_DATE)}</td>
                                            <td>{formattedDate(item.TRANSAC_EXPIRY)}</td>
                                            <td>{item.TRANSAC_PLCMNT}</td>
                                            <td>{item.TRANSAC_QUANT}</td>
                                            <td>
                                                {/* <a href={`/addtransaction/${item.ITEM_ID}`}><button>Add Quantity</button></a> */}
                                                <Link to={`/deleteTransaction/${item.TRANSAC_ID}`}>
                                                     <button className="deleteButton">Remove?</button>
                                                </Link>
                                            </td>
                                        </tr>)}
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </>
    );
}
export default NearExpiry;
