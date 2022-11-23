import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';

import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const [data] = useLoaderData();
    // const navigation = useNavigation();
    const { treatmentName, price, slot, appointmentDate } = data;

    // if (navigation.state === 'loading') {
    //     return <Loading></Loading>
    // }
    return (
        <div>
            <h3 className="text-3xl">Payment</h3>
            <p>Please Pay <strong>${price}</strong> for your {treatmentName} treatment on {appointmentDate} at {slot}</p>
            <div className='my-6 w-96'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm data={data} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;