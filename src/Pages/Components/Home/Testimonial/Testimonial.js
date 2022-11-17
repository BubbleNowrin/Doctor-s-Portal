import React from 'react';
import quote from "../../../../assets/icons/quote.svg";
import people1 from '../../../../assets/images/people1.png';
import people2 from '../../../../assets/images/people2.png';
import people3 from '../../../../assets/images/people3.png';
import Review from './review/Review';


const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            location: 'California',
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content",
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            location: 'California',
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content",
            img: people2
        },
        {
            _id: 2,
            name: 'Winson Herry',
            location: 'California',
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content",
            img: people3
        }
    ]
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-primary text-xl font-bold'>Testimonial</h2>
                    <h1 className='text-4xl text-accent font-semibold'>What Our Patients Says</h1>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;