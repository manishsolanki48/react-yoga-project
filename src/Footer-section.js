import React from "react";
import footerlogo2 from './images/footer-logo2.png';
import footerlogo from './images/footer-logo.png';
import footerbackground from './images/footer-background.png';

function Footersection(){
    return(
        <>
            <div className="footer-section">
                <div className="footer-background">
                    <img src={footerbackground}/>
                </div>
                <div className="footerwrapper">
                    <div className="footer-logo2">
                        <img src={footerlogo2}/>
                    </div>
                    <span>he asanas purify our body and keep it healthy,
                          making it a suitable vehicle for the soul.
                    </span>
                    <div className="footer-folder">
                        <div className="footer-left">
                            <h2>about</h2>
                            <p>Lorem ipsum dolor sit amet, consec
                               tetur adipisicing elit, sed do eiusmod tempor incididunt ulti
                               mam quantum
                            </p>
                            <div className="footer-logo">
                                <img src={footerlogo}/>
                            </div>
                        </div>
                        <div className="footer-right">
                            <div className="footer-about-section">
                                <h2>about</h2>
                                <p>Team</p>
                                <p>join us</p>
                                <p>Ethic</p>
                                <p>Goals</p>
                            </div>
                            <div className="footer-about-section">
                                <h2>about</h2>
                                <p>Team</p>
                                <p>join us</p>
                                <p>Ethic</p>
                                <p>Goals</p>
                            </div>
                            <div className="footer-about-section">
                                <h2>about</h2>
                                <p>Team</p>
                                <p>join us</p>
                                <p>Ethic</p>
                                <p>Goals</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footersection;