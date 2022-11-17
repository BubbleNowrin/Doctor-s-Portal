import React from 'react';

const InfoCard = ({ info }) => {

    const { name, description, icon, bgClass } = info;
    return (
        <div className={`card md:card-side bg-base-100 shadow-xl p-6 text-white mt-8 ${bgClass}`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;