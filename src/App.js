import {Routes,Route} from 'react-router-dom'
import About from "./component/About";
import Home from './component/Home';
import Destinations from './component/Destinations';
import Service from './component/Service';
import Navbar from './component/Navbar';
import Product from './component/Product';
import Best from './component/Best';
import Order from './component/Order';
import Profile from './component/Profile';
import Login from './component/Login';
import {AuthProvider} from './component/auth';
import Signup from './component/Signup';
import Loginsuccess from './component/Loginsuccess';
import Signupsuccess from './component/Signupsuccess';
import Admin from './component/Admin';
import Review from './component/Review';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/destinations' element={<Destinations/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/service' element={<Service/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path='best' element={<Best/>}/>
          </Route>
          <Route path="/order" element={<Order/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/loginsuccess" element={<Loginsuccess/>}/>
          <Route path="/signupsuccess" element={<Signupsuccess/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/reviews" element={<Review/>}/>

          
          

        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
