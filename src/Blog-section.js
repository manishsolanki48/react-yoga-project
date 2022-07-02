import React from 'react';
import Blogdata from './Blogdata';

function Blogsection(){
    return(
        <>
            <div className='blog-section d-flex justify-content-center'>
                    {
                        Blogdata.map((val) => {
                            return <div className='blog-box'>
                                        <div className="blog-image1 d-flex justify-content-center">
                                            <img src={val.datablogimg}/>
                                        </div>
                                        <div>
                                            <h2 className='text-center'>{val.title}</h2>
                                            <p className='text-center'>{val.des}</p>
                                        </div>
                                    </div>
                        })
                    }
            </div>
        </>
    )
}

export default Blogsection;