import React from 'react';
import clock from "../../../../assets/icons/clock.svg";
import marker from "../../../../assets/icons/marker.svg";
import phone from "../../../../assets/icons/phone.svg";
import InfoCard from './InfoCard';

const InfoCards = () => {

    const infoCardData = [
        {
            id: "01",
            name: "Opening Hours",
            description: "Opens Everyday at 9.00 am to 5.00 pm",
            icon: clock,
            bgClass: "bg-gradient-to-r from-secondary to-primary"
        },
        {
            id: "02",
            name: "Visit Our Location",
            description: "Brooklyn, NY 10036, United States",
            icon: marker,
            bgClass: "bg-accent"
        },
        {
            id: "03",
            name: "Contact Us Now",
            description: "+ 017-00000234",
            icon: phone,
            bgClass: "bg-gradient-to-r from-secondary to-primary"
        }
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
            {
                infoCardData.map(info => <InfoCard key={info.id} info={info}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;