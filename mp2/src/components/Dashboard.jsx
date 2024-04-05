import "../assets/sb-admin-2.css"
import "../assets/font-awesome/css/font-awesome.css"
import axios from "axios";
import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom";
//nested jsx
const Dashboard=()=>{
    const [categ, setcateg] = useState([]);
    const [expiredCount, setExpiredCount] = useState([]);
    const apiReqURL= "http://localhost:3002/api/sumcateg";
    const apiReqURL2 ="http://localhost:3002/api/nearExpiryCount"
    useEffect(()=>{
        const fetchData= async ()=>{
            try {
                const response = await axios.get(apiReqURL);
                setcateg(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        
        fetchData()
    }, [])
    useEffect(()=>{
        const fetchCount= async ()=>{
            try {
                const response = await axios.get(apiReqURL2);
                setExpiredCount(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchCount()
    }, [])

    console.log(categ)
    
    console.log(expiredCount)

    return (
        <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h2 mb-0 text-gray-800">Inventory Overview</h1>
                        <a href="/newItem" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"> Create Item</a>
                    </div>
                    <div className="row">
                        {categ.map((item)=>{
                            return(
                                <div className="col-xl-3 col-md-6 mb-4">
                                <Link to={`/itemlistpercateg/${item.CATEGORY_ID}`}>
                                    <div className="card border-left-primary shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                        {item.CATEGORY_NAME}</div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{item.SumPerCategory} items</div>
                                                </div>
                                            
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            )
                            
                        })}
                        

                        {/* <!-- urgent --> */}
                        {expiredCount.map((item)=>{
                            return(
                        <div className="col-xl-12 col-md-6 mb-4">
                            <a href="/nearexpiry">
                            <div className="card border-left-danger shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="h4 font-weight-bold text-danger text-uppercase mb-1">
                                                Need for Urgent Actions</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{item.QUANTITY} items</div>
                                        </div>
                                        <div className="col-auto">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        </div>
                        )})}
                    </div>
        </div>
    );
}
export default Dashboard;
