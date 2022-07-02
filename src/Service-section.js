import React from "react";
import servicebackground from './images/service-background.jpg';
import Sdata from "./Sdata";

function Servicesetion(){
    return(
        <>
            <div className="service-section">
                <div className="servicewrapper">
                    <div className="service-title">
                        <div className="service-background">
                            <img src={servicebackground}/>
                        </div>
                        <p className="text-center mx-auto text-uppercase">Meet our
                            yoga classes 
                        </p>
                    </div>
                    <div className="card-section d-flex mx-auto justify-content-center">
                        {
                            Sdata.map((val) => {
                                return <div className="cardwrapper">
                                            <div className="service-image1">
                                                <img src={val.dataImage}/>
                                            </div>  
                                            <div className="card-title">
                                                <h2>{val.title}</h2>
                                                <p>{val.des}</p>
                                            </div>
                                            <span>{val.time}</span>
                                        </div>
                            })
                        }
                    </div>
                    <a href="#" className="service-btn d-flex justify-content-center">SHOW MORE</a>
                </div>
            </div>
        </>
    )
}

export default Servicesetion;