import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentsOptions from './AppointmentsOptions';

const AvailableAppointments = ({ selectedDate }) => {

    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');
    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`https://doctors-portal-server-pied-ten.vercel.app/appointmentOptions?date=${date}`)
            .then(res => res.json())
    })

    // const {data: appointmentOptions =[]}=useQuery({
    //     queryKey:['appointmentOptions'],
    //     queryFn:async()=>{
    //         const res=await fetch('https://doctors-portal-server-pied-ten.vercel.app/appointmentOptions');
    //         const data=await res.json();
    //         return data
    //     }
    // })

    // useEffect(() => {
    //     fetch('https://doctors-portal-server-pied-ten.vercel.app/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // }, [])

    if (isLoading) {
        return <Loading></Loading>
    }

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
                    <BookingModal setTreatment={setTreatment} treatment={treatment} selectedDate={selectedDate} refetch={refetch}></BookingModal>
                }
            </div>
        </section>
    );
};

export default AvailableAppointments;