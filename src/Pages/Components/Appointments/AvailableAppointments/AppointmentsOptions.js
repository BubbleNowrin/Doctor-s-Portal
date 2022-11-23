import React from 'react';

const AppointmentsOptions = ({ appointmentOption, setTreatment }) => {

    const { slots, name, price } = appointmentOption;
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl text-secondary font-bold">{name}</h2>
                <p className='text-center'>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p className='text-center'>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available.</p>
                <p className='text-center'><small className='font-bold'>Price: ${price}</small></p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(appointmentOption)} htmlFor="booking-modal" className="btn btn-secondary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentsOptions;