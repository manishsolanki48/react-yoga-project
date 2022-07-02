import React, { useState } from "react";
import topheaderlogo from './images/footer-logo.png';

function Topheader(){
    const [modal, setModal] =useState(false);
     
    const toggleModal =() => {setModal(!modal)}
    return(
        <>  
            <a href="#" onClick={toggleModal} className="show-btn"><i class="fa-solid fa-bars"></i></a>
            {modal &&(
                <div className="top-header">
                <div className="topheaderwrapper">
                    <div className="top-header-logo">
                        <img src={topheaderlogo}/>
                    </div>
                    <div onClick={toggleModal} className="menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Class</a></li>
                        <li><a href="#">Promo</a></li>
                        <li><a href="#">Online Class</a></li>
                        <li><a href="#">Contect</a></li>
                    </div>
                </div>
            </div>
            )}
            <div className="top-header-section">
                <div className="topheaderwrapper-folder">
                    <div className="top-header-logo-section">
                        <img src={topheaderlogo}/>
                    </div>
                    <div onClick={toggleModal} className="menu-section">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Class</a></li>
                        <li><a href="#">Promo</a></li>
                        <li><a href="#">Online Class</a></li>
                        <li><a href="#">Contect</a></li>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topheader;