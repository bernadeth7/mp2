import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from "./components/Navibar";
import Dashboard from './components/Dashboard';
import Topbar from "./components/TopBar";
import ItemList from './components/ItemList';
import AddNewItem from './components/AddNewItem';
import AddTransaction from './components/AddTransaction';
import DeleteNotificationPopup from "./components/DeletePopUp";
import ViewItem from './components/ViewItem';
import EditTransaction from './components/EditTransaction';
import DeleteTransaction from './components/DeleteTransaction';
import ItemListPerCateg from './components/ItemListperCateg';
import NearExpiry from './components/NearExpiry';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//functional component
const App = ()=>{
    return (
        <BrowserRouter>
        <div id="wrapper">
            <Navibar/>
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <Topbar/>
                    <Routes>
                        <Route path='/dashboard' element={<Dashboard/>}/> 
                        <Route path='/itemlist' element={<ItemList/>}/>
                        <Route path='/itemlistpercateg/:id' element={<ItemListPerCateg/>}/>
                        <Route path='/newitem' element={<AddNewItem/>}/>
                        <Route path='/nearexpiry' element={<NearExpiry/>}/>
                        <Route path='/addtransaction/:id' element={<AddTransaction/>}/>
                        <Route path='/deleteItem/:id' element={<DeleteNotificationPopup/>}/>
                        <Route path='/deleteTransaction/:id' element={<DeleteTransaction/>}/>
                        <Route path='/viewItem/:id' element={<ViewItem/>}/>
                        <Route path='/editTransaction/:id' element={<EditTransaction/>}/>
                    </Routes>
                </div>
            </div>
        </div>    
        </BrowserRouter>
    )
        
};
export default App;