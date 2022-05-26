import React from 'react';
import { useNavigate } from 'react-router-dom';
import PButton from '../Shared/PButton'

const OurTools = ({ tool }) => {

    const { name, image, price, description, availableQuantity, minimumOrder } = tool;

    const navigate = useNavigate();

    return (
        <div class="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img className='w-40' src={image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>${price}</p>
                <p>Available:{availableQuantity}</p>
                <p>Minimum Order:{minimumOrder}</p>
                <p>{description}</p>
                <div class="card-actions justify-end">
                    <button onClick={() => navigate(`/tools/${tool._id}`)} class="btn btn-info">Purchase</button>
                </div>
            </div>
        </div>

    );
};

export default OurTools;