import React from "react";
import galleryimage1 from './images/gallery-image1.jpg';
import galleryimagecircle from './images/gallery-image.png';
import gallerybackground from './images/gallery-background.png';

function Gallerysection(props){
    return(
        <>
            <div className="gallery-section">
                <div className="gallery-background">
                    <img src={gallerybackground}/>
                </div>
                <div className="row container-fluid gallerywrapper">
                    <div className="gallery-left-section col-lg-6 col-md-6">
                        <div className="gallery-title">
                            <h2>{props.header}</h2>
                            <span>{props.text}</span>
                        </div>
                        <div className="gallery-des-section">
                            <h2>{props.title}</h2>
                            <p>{props.des}</p>
                        </div>
                        <div className="gallery-price-section">
                            <p>{props.gallerydes}</p>
                            <div className="price-book d-flex">
                                <div className="gallery-time">
                                    <span>{props.span}</span>
                                    <p>{props.timedes}</p>
                                </div>
                                <div className="gallery-time2">
                                    <span>{props.span2}</span>
                                    <p>{props.time2des}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gallery-right-section col-lg-6 col-md-6">
                        <div className="gallery-right-image">
                            <img className="gallery-right-image-folder" src={galleryimage1}/>
                            <img className="gallery-image-circle" src={galleryimagecircle}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallerysection;