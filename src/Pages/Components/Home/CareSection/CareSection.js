import React from 'react';
import treatment from '../../../../assets/images/treatment.png';
import PrimaryButtons from '../../../../compo/PrimaryButtons/PrimaryButtons';

const CareSection = () => {
    return (
        <div className="hero my-28">
            <div className="flex flex-col lg:flex-row justify-end">
                <div className="lg:w-1/2 flex lg:justify-end lg:mr-32 ">
                    <img src={treatment} className="lg:w-1/2 rounded-lg shadow-2xl" alt="" />
                </div>
                <div className='lg:w-1/2 lg:mr-20'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButtons>Get Started</PrimaryButtons>
                </div>
            </div>
        </div>
    );
};

export default CareSection;