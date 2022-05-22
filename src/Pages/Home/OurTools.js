import React from 'react';
import { useNavigate } from 'react-router-dom';
import PButton from '../Shared/PButton'

const OurTools = ({ tool }) => {

    const { name, image, price, description, availableQuantity, minimumOrder } = tool;

    const navigate = useNavigate();

    return (
        <div className='mx-auto'>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{price}</p>
                    <p>Available:{availableQuantity}</p>
                    <p>Minimum Order:{minimumOrder}</p>
                    <p>{description}</p>
                    <div class="card-actions justify-end">
                        <button onClick={() => navigate(`/tools/${tool._id}`)} class="btn btn-info">Purchase</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default OurTools;