import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L0s35Kat86I70hsRaTWQjWFXFaRAwhu2S57llsEqnP54f2iafdrWBkBvHubxTH38cxi9DyR8MMbmyjWvaj70FLP00bvdXPEpq')

const Payment = () => {
    const { id } = useParams();
    const [payment, setPayment] = useState([])

    const [user] = useAuthState(auth);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/orders/${id}`, {
    //         method: 'GET'
    //     }).then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    // }, [])

    const url = `http://localhost:5000/orders/${id}`
    const { data, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',

    }).then(res => res.json()));
    console.log(data)

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div className='grid grid-cols-1 lg:grid-col-2 gap-5'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <div class="card-actions justify-end">
                        <p className="text-success text-xl font-bold">Hello, {user?.displayName} </p>
                        <h1 className="text-xl font-bold">Your payment for <span className='text-purple-600'>{data?.name}</span></h1>
                        <p className='text-orange-600'>{data?.quantity}Pcs for {data?.price} only</p>
                        <p>please keep the orderid: <span className='text-gray-500'>({data?.orderId})</span> to track the order</p>
                    </div>
                    <p>We are using cookies for no reason.</p>
                </div>
            </div>

            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm data={data} />
                    </Elements>
                </div>
            </div>
        </div>

    );
};

export default Payment;