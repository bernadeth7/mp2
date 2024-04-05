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
import LogIn from './components/LogIn';
import LogOut from './components/LogOut';
import SignUp from './components/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//functional component
const App = ()=>{
    return (
        <BrowserRouter>
        <Routes>
                {/* Define a separate Route for the login page */}
                <Route path='/' element={<LogIn />} />
                <Route path='/signUp' element={<SignUp />} />
                <Route path='/logOut' element={<LogOut />} />
                {/* Routes for other pages */}
                <Route path='/' element={<MainLayout />}>
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
                        </Route>    
                    </Routes>
        </BrowserRouter>
    )
        
};
const MainLayout = () => {
    return (
        <div id="wrapper">
            <Navibar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Topbar />
                    {/* Dashboard */}
                    <Routes>
                        <Route path='dashboard' element={<Dashboard />} />
                        <Route path='itemlist' element={<ItemList />} />
                        <Route path='itemlistpercateg/:id' element={<ItemListPerCateg />} />
                        <Route path='newitem' element={<AddNewItem />} />
                        <Route path='nearexpiry' element={<NearExpiry />} />
                        <Route path='addtransaction/:id' element={<AddTransaction />} />
                        <Route path='deleteItem/:id' element={<DeleteNotificationPopup />} />
                        <Route path='deleteTransaction/:id' element={<DeleteTransaction />} />
                        <Route path='viewItem/:id' element={<ViewItem />} />
                        <Route path='editTransaction/:id' element={<EditTransaction />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};
export default App;
