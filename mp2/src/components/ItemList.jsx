import "../assets/sb-admin-2.css"
import "../assets/font-awesome/css/font-awesome.css"
import axios from "axios";
import { Link } from 'react-router-dom';
import React, {useEffect, useState} from "react"
//nested jsx
const ItemList=()=>{
    const [list, setItemlist] = useState([]);
    const apiReqURL= "http://localhost:3002/api/table";
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
    return (
        <>
        <div className="container-fluid">
                    {/* <!-- Page Heading --> */}
                    <h1 className="h3 mb-2 text-gray-800">Items Database</h1>
                    <a href="newitem" className="add-button">Create New Item</a>
                    {/* <!-- DataTales Example --> */}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Item List</h6>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0" >
                                    <thead>
                                        <tr>
                                            {/* <th>ID</th> */}
                                            <th>Item Name</th>
                                            <th>Category</th>
                                            <th>Quantity</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                    {list.sort((a, b) => a.ITEM_ID - b.ITEM_ID).map((item)=>{
                                        return(   
                                        <tr key={item.ITEM_ID}>
                                            {/* <td>{item.ITEM_ID}</td> */}
                                            <td>{item.ITEM_NAME}</td>
                                            <td>{item.CATEGORY_NAME}</td>
                                            <td>{item.QUANTITY}</td>
                                            <td>
                                                <Link to={`/viewItem/${item.ITEM_ID}`}>
                                                     <button className="viewButton">View</button>
                                                </Link>
                                                <Link to={`/addtransaction/${item.ITEM_ID}`}>
                                                     <button className="okButton">Add Quantity</button>
                                                </Link>
                                                {/* <a href={`/addtransaction/${item.ITEM_ID}`}><button>Add Quantity</button></a> */}
                                                <Link to={`/deleteItem/${item.ITEM_ID}`}>
                                                     <button className="deleteButton">Delete</button>
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
export default ItemList;
