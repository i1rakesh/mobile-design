import './App.css';
import Payment from './components/Payment'
import Home from './components/Home'
import Product from './components/Product'
import {Routes, Route, BrowserRouter} from "react-router-dom";
function App() {
  return (
    <div className='flex justify-center items-center overflow-y-auto m-0 p-0'>
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path="/product" element={<Product/>}/>
          <Route path="/payment" element ={<Payment/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
      
    </div>
    
  );
}

export default App;
