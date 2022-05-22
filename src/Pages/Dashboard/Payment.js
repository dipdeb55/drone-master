import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const { id } = useParams();
    return (
        <div>
            <h1 className="text-3xl">Payment for :{id}</h1>
        </div>
    );
};

export default Payment;