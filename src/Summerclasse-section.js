import React from "react";
import Summerdata from "./Summerdata";

function Summerclassesetion(){
    return(
        <>
            <div className="Summerclasse-section">
                <div className="Summerclassewrapper">
                    <div className="Summerclasse-title">
                        <p className="text-center mx-auto text-uppercase">look at our 
                            Summer classes 
                        </p>
                    </div>
                    <div className="Summerclass-folder d-flex mx-auto justify-content-center">
                        {
                            Summerdata.map((val) => {
                                return <div className="summerclass-folder-box">
                                            <div className="Summerclasse-image1">
                                                <img src={val.dataImage}/>
                                            </div>  
                                            <div className="summerclass-title">
                                                <h2>{val.title}</h2>
                                                <p>{val.des}</p>
                                            </div>
                                            <span>{val.time}</span>
                                        </div>
                            })
                        }
                    </div>
                    <a href="#" className="Summerclasse-btn d-flex justify-content-center">SHOW MORE</a>
                </div>
            </div>
        </>
    )
}

export default Summerclassesetion;