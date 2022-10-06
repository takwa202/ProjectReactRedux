import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "./components/home/Home";
import Navbar from './components/navbar/Navbar';
import ProductList from "./components/products/ProductList";
import { getallproducts } from "./redux/actions/productActions";
import { DoctorList } from './components/doctors/DoctorList';
import { useSelector } from 'react-redux'
import AddProducts from './components/products/AddProducts';
import SignIn from './components/authForms/SignIn';
import SignUp from './components/authForms/SignUp';
import { getUser } from './redux/actions/userAction';
import Dshbord from "./components/dashbord/Dshbord";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser());
    dispatch(getallproducts())

  },[]);

  //console.log(products)
  
  return (
    <div className="App">
      
      <Navbar/>
    
   
    <Routes>
      <Route  path = '/Products' element={<ProductList  />}  />
      <Route   path = '/Home' element={<Home/>}  />
      <Route  path = '/DoctorList' element={<DoctorList/>}  />
      <Route  path = '/addproduct' element={<AddProducts/>}  />
      <Route  path = '/signein' element={<SignIn/>}  />
      <Route  path = '/signeup' element={<SignUp/>}  />
      <Route  path = '/Profile' />
      <Route  path = '/Dshbord' element={<PrivateRoute> <Dshbord/> </PrivateRoute>  } />
      <Route  path = '/Dshbord' element={<PrivateRoute> </PrivateRoute>  } />

    </Routes>
    </div>
  );
}

export default App;
