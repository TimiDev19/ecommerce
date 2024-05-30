import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
//Pages
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';
//Components
import Footer from './Components/Footer';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import MensClothing from './Pages/MensClothing';
import FemaleClothes from './Pages/FemaleClothes';
import Jewelry from './Pages/Jewelry';
import Electronics from './Pages/Electronics';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
          <Route path='/mensclothing' element={<MensClothing/>}/>
          {/* <Route path='/womensclothing' element={<WomensClothing/>}/> */}
          <Route path='/womensclothing' element={<FemaleClothes/>}/>
          <Route path='/jewelry' element={<Jewelry/>}/>
          <Route path='/electronics' element={<Electronics/>}/>
        </Routes>
        <Sidebar/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;