import React from 'react'
import "./Home_banner.css";

function HomeBanner() {
    return (
            <div className='container-fluid' style={{
                                                        height:'515px',
                                                        marginBottom:'30px'
                                                    }}>
                <div className='row banner-bg' style={{
                                                        height:'515px',
                                                        paddingLeft: "65px"
                                                      }}>
                    <h2>
                        Get The Authentic <br/>
                        Liverpool FC <br/>
                        Merchendise Here!
                    </h2>
                </div>
            </div>
    )
}

export default HomeBanner