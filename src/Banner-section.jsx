import React from "react";
import bannerbackground from './images/banner-background.jpg';
import circleImage from "./images/banner-image.png";

function Bannersection(){
    return(
        <>
            <div className="banner-section">
                <div className="bannerwrapper ">
                        <div>
                            <img className="img-fluid" src={bannerbackground}/>
                            <div className="banner-title d-flex justify-content-center align-items-center flex-column">
                            <div className="banner-text d-flex flex-column">
                                <span className="text-center">Healthy & Fresh</span>
                                <h2 className="text-center text-uppercase">Yoga</h2>
                                <p className="text-center">Lorem ipsum dolor sit amet,
                                     consectetuer adipiscing
                                </p>
                            </div>
                                <div className="circleImage d-flex justify-content-center">
                                    <img src={circleImage}/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bannersection;