import React, { useEffect, useState } from 'react';
import useServices from '../../customHooks/useServices';
import ServiceDetails from './ServiceDetails/ServiceDetails';
import ServiceMenu from './ServiceMenu/ServiceMenu';
import './Services.css'

const Services = () => {
    const [data, setData] = useServices();

    const [index, setIndex] = useState("1s");
    const [dataDetails, setDataDetails] = useState({});

    useEffect(() => {
        const tem = data.find(x => x.id === index);
        setDataDetails(tem);
    }, [index, data]);


    // useEffect(() => {
        // console.log(document.getElementById(`#1s`));
        // .classList.add("active-service-menu")
    // }, [index,dataDetails,data])

    // console.log(data);

    const handleServiceMenuClick = (id) => {
        setIndex(id);
    }

    return (
        <div className='service-container pt-10'>
            <div className='service-content shadow-lg'>

                <div className='service-menu flex flex-col justify-center items-start p-5 pl-10'>
                    {
                        data.map((x) => {
                            return <ServiceMenu id={x.id} key={x.id} data={x} func={handleServiceMenuClick}></ServiceMenu>
                        })
                    }
                </div>
                <div className='service-menu-details p-10'>
                    {
                        <ServiceDetails
                            dataDetails={dataDetails ? dataDetails : ""}>

                        </ServiceDetails>
                    }
                </div>
                
            </div>
        </div>
    );
};

export default Services;