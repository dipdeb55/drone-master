import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div className='mx-auto'>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <div class="avatar mx-auto mt-2">
                    <div class="w-20 rounded-full">
                        <img src={review.image} alt='men' />
                    </div>
                </div>
                <h2 className='text-xl font-bold mt-3'>{review.name}</h2>
                <div class="rating rating-sm ml-10">
                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                </div>
                <p className='my-5'>{review.comment}</p>
                <div class="card-actions justify-end">
                </div>
            </div>
        </div >
    );
};

export default ReviewCard;