import React from "react";
import productionimage1 from './images/gallery-image1.jpg';
import productionimagecircle from './images/gallery-image.png';
import productionbackground from './images/production-background.png';

function Productionsection(props){
    return(
        <>
            <div className="production-section">
                <div className="row container-fluid productionwrapper">
                    <div className="production-left-section col-lg-6 col-md-6">
                        <div className="production-left-image">
                            <img className="production-left-image-folder" src={productionimage1}/>
                            <img className="production-image-circle" src={productionimagecircle}/>
                        </div>
                    </div>
                    <div className="production-right-section col-lg-6 col-md-6">
                        <div className="production-background">
                            <img src={productionbackground}/>
                        </div>
                        <div className="production-title">
                            <h2>{props.header}</h2>
                            <span>{props.text}</span>
                        </div>
                        <div className="production-des-section">
                            <h2>{props.title}</h2>
                            <p>{props.des}</p>
                        </div>
                        <div className="production-price-section">
                            <p>{props.productiondes}</p>
                            <div className="price-book d-flex">
                                <div className="production-time">
                                    <span>{props.span}</span>
                                    <p>{props.timedes}</p>
                                </div>
                                <div className="production-time2">
                                    <span>{props.span2}</span>
                                    <p>{props.time2des}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Productionsection;