import React from "react";
import './Services.css';
import Services_data from './ServicesData';
function Services(){
    return(
        <div id='services' className="services">
            <div className="services-title">
                <h1>My Services</h1>
            </div>
            <div className="services-container">
                {Services_data.map((service, index) => {
                    return <div className="services-format" key={index}>
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                    </div>
                })}
            </div>
        </div>

    )
}
export default Services;