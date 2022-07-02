import React from "react";
import promorightimage from './images/promo-right-image.jpg';
import promocircle from './images/gallery-image.png';

function Promosection(){
    return(
        <>
            <div className="promo-section">
                <div className="row container-fluid promowrapper">
                    <div className="promo-title-left col-lg-6 col-md-6">
                        <h2>yoga initiation 
                            workshop
                        </h2>
                        <p>TRY YOUR FIRST FREE 
                              YOGA CLASS
                        </p>
                        <div className="promo-time">
                            <div>
                                <span>22.12.2020</span>
                            </div>
                            <div>
                                <span>24.03. 2021</span>
                            </div>
                        </div>
                    </div>
                    <div className="promo-right col-lg-6 col-md-6">
                        <div className="promo-right-image">
                            <div className="promo-rightimage-folder">
                                <img src={promorightimage}/>
                            </div>
                            <div className="promo-circle">
                                <img src={promocircle}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Promosection;