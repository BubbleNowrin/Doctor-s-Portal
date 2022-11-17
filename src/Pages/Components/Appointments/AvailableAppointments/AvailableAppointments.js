import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentsOptions from './AppointmentsOptions';

const AvailableAppointments = ({ selectedDate }) => {

    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])
    return (
        <section className='my-16'>
            <p className='text-secondary text-center font-bold'>Appointments Available on : {format(selectedDate, 'PP')} </p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-4'>
                {
                    appointmentOptions.map(appointmentOption => <AppointmentsOptions key={appointmentOption._id} appointmentOption={appointmentOption} setTreatment={setTreatment}></AppointmentsOptions>)
                }
            </div>
            <div className=''>
                {
                    treatment &&
                    <BookingModal setTreatment={setTreatment} treatment={treatment} selectedDate={selectedDate}></BookingModal>
                }
            </div>
        </section>
    );
};

export default AvailableAppointments;