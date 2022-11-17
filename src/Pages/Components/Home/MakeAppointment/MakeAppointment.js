import React from 'react';
import doctor from "../../../../assets/images/doctor.png";
import bg from "../../../../assets/images/appointment.png";
import PrimaryButtons from '../../../../compo/PrimaryButtons/PrimaryButtons';

const MakeAppointment = () => {
    return (
        <section className='mt-36'>
            <div className="hero" style={{ background: `url(${bg})` }}>
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt="" className="-mt-36 hidden md:block lg:w-1/2 rounded-lg" />
                    <div>
                        <h4 className='text-lg text-primary font-bold'>Appointment</h4>
                        <h1 className="text-4xl font-bold text-white">Make an appointment Today!</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButtons>Appointment</PrimaryButtons>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;