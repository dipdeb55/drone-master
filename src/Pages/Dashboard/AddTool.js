import React from 'react';

const AddTool = () => {

    const addTool = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;
        const description = e.target.description.value;
        const availableQuantity = e.target.availableQuantity.value;
        const minimumOrder = e.target.minimumOrder.value;
        const price = e.target.price.value;

        const tool = { name, image, description, availableQuantity, minimumOrder, price }

        console.log(tool);

        fetch('http://localhost:5000/tools', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tool)
        })
            .then(res => res.json())
            .then(data => {
                alert('tool Add Successful')
                e.target.reset()
            })

    }

    return (
        <div className=''>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto mt-3">
                <div class="card-body">
                    <div class="card-actions justify-center">
                        <form onSubmit={addTool} className='mx-2'>
                            <input type="text" name="name" placeholder="name" class="input input-bordered w-full max-w-s" />
                            <input type="text" name="image" placeholder="image" class="mt-2 input input-bordered w-full max-w-xs" />
                            <input type="text" name="description" placeholder="description" class="mt-3 input input-bordered w-full max-w-xs" />
                            <input type="text" name="availableQuantity" placeholder="availableQuantity" class="mt-3 input input-bordered w-full max-w-xs" />
                            <input type="text" name="minimumOrder" placeholder="minimumOrder" class="mt-3 input input-bordered w-full max-w-xs" />
                            <input type="text" name="price" placeholder="price" class="mt-3 input input-bordered w-full max-w-xs" />
                            <input type="submit" value="ADD" class="mt-3 input btn btn-info input-bordered w-full max-w-xs" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTool;