import React,{createContext,useState,useEffect} from 'react'
import image1 from "./images/rings.png"
import image2 from "./images/smart-tv.png"
import image3 from "./images/suits-me-online.jpg"
import image4 from "./images/washing-machine.png"
import './App.css';
import ReactSwitch from 'react-switch'
// import ClipLoader from "react-spinners/ClipLoader";

export const themeContext=createContext(null)
function Hide() {
  const [theme,setTheme]=useState("dark");
  const toggleTheme=()=>{
    setTheme((curr)=>(curr==="light" ? "dark" :'light'))
  }
  return (
    <>
    <themeContext.Provider value={{theme,toggleTheme}}>
      <div className="switch">
        <label className='me-2'>{theme==="light" ? "Light Mode" :"Dark Mode" }</label>
      <ReactSwitch  onChange={toggleTheme} checked={theme==="dark"}/>
      </div>
      
      <div className="App" id={theme}>
        <div className="container m-2">
        <div className="row">
      <div className="col-md-4 col-sm-6 col-12">
      <div className="card mt-5">
         <img src={image1} className="card-img-top" alt="..."/>
      <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
      <div className="col-md-4 col-sm-6 col-12">
      <div className="card mt-5">
         <img src={image2} className="card-img-top d-flex justify-content-center" alt="..."/>
      <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
      <div className="col-md-4 col-sm-6 col-12">
      <div className="card mt-5">
         <img src={image3} className="card-img-top" alt="..."/>
      <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
      <div className="col-md-4 col-sm-6 col-12 ">
      <div className="card mt-5">
         <img src={image4} className="card-img-top" alt="..."/>
      <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
     </div>
        </div>
    
      
      </div>
    
    </themeContext.Provider>
    
     
       </>
  );
}

export default Hide;

