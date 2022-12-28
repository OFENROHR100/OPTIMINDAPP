import './App.css';
import Shop from './apps/Shop';
import Home from './apps/Home';
import Cart from './apps/Cart';
import Login from './apps/Login';
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
