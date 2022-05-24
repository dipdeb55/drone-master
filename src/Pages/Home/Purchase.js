import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useTools from '../../Hooks/useTools';

const Purchase = () => {
    const { id } = useParams()
    const [tool, setTool] = useState({});
    const { name, price, description, availableQuantity, minimumOrder, _id, image } = tool;
    const [error, setError] = useState('');
    const [disable, setDisable] = useState(false)

    const [user] = useAuthState(auth)
    console.log(user)
    // const { data: items, isLoading } = useQuery(['tools'], () => fetch(`http://localhost:5000/tools/${id}`)).isFetchedAfterMount(res => res.json())

    useEffect(() => {
        fetch(`http://localhost:5000/tools/${id}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [])

    const handelAddOrder = e => {
        e.preventDefault()



        const order = {
            name, price, image,
            orderId: _id,
            address: e.target.address.value,
            phone: e.target.phone.value,
            quantity: e.target.quantity.value,
            email: user.email
        }
        console.log(order)

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (newQuantity < minimumOrder) {
                    return setError(`minimum order ${minimumOrder}`,)
                }
                else if (newQuantity > availableQuantity) {
                    return setError(`Sorry we have ${availableQuantity}`)
                }
                alert('Order place successfully')
                e.target.reset()
            })

        let newQuantity = parseInt(e.target.quantity.value)
        if (newQuantity < minimumOrder) {
            <small>minimum order is {minimumOrder}</small>
        }
        else if (newQuantity > availableQuantity) {
            setError(`Sorry we have ${availableQuantity}`)
        }

    }


    return (
        <div className='flex justify-items-center mx-20 mt-10'>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <p className='text-xl text-orange-500'>Hello <span className='text-2xl text-blue-700'>{user?.displayName} </span>place your order</p>

                <form onSubmit={handelAddOrder} className='grid grid-cols-1 gap-5 justify-items-center mt-4'>
                    <input type="text" placeholder="name" value={name} disabled class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="email" value={user?.email} disabled class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" value={_id} disabled class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="price" value={price} disabled class="input input-bordered w-full max-w-xs" />
                    <input type="text" name='address' placeholder="address" class="input input-bordered w-full max-w-xs" />
                    <input type="text" name='phone' placeholder="phone number" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder={`minimum order ${minimumOrder}`} name='quantity' class="input input-bordered w-full max-w-xs" />
                    <label><small className='text-red-600'>{error}</small></label>
                    <input type="submit" disable class="input btn btn-info input-bordered w-full max-w-xs mb-2" />
                </form>
            </div>

            <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure class="px-10 pt-10">
                    <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>{price}</p>
                    <p>Available:{availableQuantity}</p>
                    <p>Minimum Order:{minimumOrder}</p>
                    <p>{description}</p>
                    <div class="card-actions">
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Purchase;