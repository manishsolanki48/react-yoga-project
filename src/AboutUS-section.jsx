import React from "react";
import aboutusimage2 from './images/aboutUS-imaage2.png';
import aboutUSbackground from './images/aboutUS-background.png';
import aboutusimage1 from './images/aboutUS-image1.jpg';

function AboutUSsection(){
    return(
        <>
            <div className="aboutUS-section">
                <div className="aboutUs-image-folder">
                    <div className="aboutUS-image1">
                        <img className="img-fluid" src={aboutusimage1}/>
                    </div>
                    <div className="aboutUS-background">
                        <img className="img-fluid" src={aboutUSbackground}/>
                    </div>
                    <div className="aboutUSwrapper">
                        <div className="aboutUS-image2">
                            <img src={aboutusimage2}/>
                        </div>
                        <div className="aboutUS-title">
                            <h2>summer</h2>
                            <p>class</p>
                            <div className="aboutUS-time d-flex flex-column">
                                <span>22.12.2020</span>
                                <span>24.03. 2021</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUSsection;