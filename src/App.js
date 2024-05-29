import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
//Pages
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';
//Components
import Footer from './Components/Footer';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
        </Routes>
        <Sidebar/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;