import React from 'react';
import background from '../../../../assets/images/appointment.png';
import PrimaryButtons from '../../../../compo/PrimaryButtons/PrimaryButtons';

const ContactUs = () => {
    return (
        <section style={{ background: `url(${background})`, backgroundSize: 'cover' }}>
            <form className='w-full lg:w-1/2 mx-auto'>
                <fieldset className=" rounded-md shadow-sm my-20 p-32">
                    <div className='text-center mb-6'>
                        <h5 className="text-xl text-primary">Contact Us</h5>
                        <h2 className='text-3xl text-white'>Stay Connected with Us</h2>
                    </div>
                    <div className="mb-4">

                        <input id="username" type="text" placeholder="Email Address" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className="mb-4">

                        <input id="website" type="text" placeholder="Subject" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className="mb-4">

                        <textarea id="bio" placeholder="Your Message" className="w-full p-6 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
                    </div>
                    <div className='text-center'>
                        <PrimaryButtons>Submit</PrimaryButtons>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default ContactUs;