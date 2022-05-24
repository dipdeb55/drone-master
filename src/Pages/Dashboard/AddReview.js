import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { register, handleSubmit } = useForm();

    const handelSubmit = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const image = event.target.image.value;
        const comment = event.target.comment.value;

        const review = { name, image, comment }
        console.log(review);

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('Review Add Successful')
                event.target.reset()
            })

    }

    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                <div class="card-body">
                    <div class="card-actions justify-end">
                        <form onSubmit={handelSubmit}>
                            <input type="text" placeholder="name" name='name' class="input input-bordered w-full max-w-xs mt-3" />
                            <input type="text" placeholder="image" name='image' class="input input-bordered w-full max-w-xs mt-3" />
                            <input type="text" placeholder="comment" name='comment' class="input input-bordered w-full max-w-xs mt-3" />
                            {/* <input type="text" placeholder="Type here" name='' class="input input-bordered w-full max-w-xs mt-3" /> */}
                            <input type="submit" value="Review" class="mt-3 input btn btn-info input-bordered w-full max-w-xs" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;