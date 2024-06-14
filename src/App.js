// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Helper from './components/Helper';
import Home from './components/Home';
// import Navber from './components/Navber';
// import {}
// import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
// import { createBrowserRouter,RouterProvider} from "react-router-dom";

function App() {
  // const router=createBrowserRouter([
  //   {path:"/",element:<><Home/></>}
  // ])
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/helper" element={<Helper/>}/>
      <Route path="/footer" element={<Footer/>}/>
      

    </Routes>
    

    
    </>
  );
}

export default App;
