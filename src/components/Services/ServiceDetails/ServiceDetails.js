import React from 'react';
import './ServiceDetails.css'

const ServiceDetails = (props) => {
    if (props) {
        // console.log(props?props:"nothing");
        
        const {dataDetails} = props;
        const {menuDetails} = dataDetails;
        // const { title, paragraph, btnLink, btnName } = menuDetails;
        
        // console.log(menuDetails);

        return (
            <div>
                <p className='text-4xl '>
                    {menuDetails ? menuDetails.title : ""}
                </p>
                <p className='my-5 service-details-paragraph'>
                    {menuDetails ? menuDetails.paragraph : ""}
                </p>
                <button className='classic-btn'>
                    {menuDetails ? menuDetails.btnName : ""}
                </button>
            </div>
        )

    }
    return "";
};

export default ServiceDetails;