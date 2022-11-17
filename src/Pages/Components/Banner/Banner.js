import React from 'react';
import image from "../../../assets/images/chair.png";
import banner from "../../../assets/images/bg.png";
import PrimaryButtons from '../../../compo/PrimaryButtons/PrimaryButtons';

const Banner = () => {
    return (
        <div className="hero" style={{ background: `url(${banner})`, backgroundSize: 'cover' }}>

            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image} className="lg:w-1/2 rounded-lg shadow-2xl" alt="" />
                <div>
                    <h1 className="text-5xl font-bold">Your Smile Starts Here!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButtons>Get Started</PrimaryButtons>
                </div>
            </div>
        </div>
    );
};

export default Banner;