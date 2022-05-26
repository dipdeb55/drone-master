import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { set } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useTools from '../../Hooks/useTools';

const Purchase = () => {
    const { id } = useParams()
    const [tool, setTool] = useState({});
    const { name, price, description, availableQuantity, minimumOrder, _id, image } = tool;
    const [error, setError] = useState('');
    const [disabled, setDisabled] = useState(false);

    const [user] = useAuthState(auth)
    // console.log(user)
    // const { data: setTool, isLoading } = useQuery(['tools'], () => fetch(`https://ancient-hamlet-08121.herokuapp.com/tools/${id}`)).isFetchedAfterMount(res => res.json())
    const { refetch } = useQuery();

    useEffect(() => {
        fetch(`https://ancient-hamlet-08121.herokuapp.com/tools/${id}`)
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

        fetch('https://ancient-hamlet-08121.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Order place successfully,please pay from you order list')
                e.target.reset()
            })

    }

    const handleQuantity = e => {
        let quantity = e.target.value;
        console.log(quantity, minimumOrder)
        if (parseInt(quantity) < minimumOrder) {
            setError(`minimum order ${minimumOrder}`)
            setDisabled(true)
        }
        else if (parseInt(quantity) > availableQuantity) {
            setError(`Sorry we have ${availableQuantity}`)
            setDisabled(true)
        }
        else {
            setDisabled(false)
        }
    }

    return (
        <div>
            <h1 className='text-3xl font-bold text-info'>Confirm Your Purchase</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center mx-20 mt-10'>
                <div class="card w-96 bg-base-100 shadow-xl mx-auto sm:mt-5">
                    <figure class="px-10 pt-10">
                        <img src={image} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">{name}</h2>
                        <p>${price}</p>
                        <p>Available:{availableQuantity}</p>
                        <p>Minimum Order:{minimumOrder}</p>
                        <p>{description}</p>
                        <div class="card-actions">
                        </div>
                    </div>
                </div>

                {/*  */}
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-5">
                    <p className='text-xl text-orange-500'>Hello <span className='text-2xl text-blue-700'>{user?.displayName} </span>place your order</p>

                    <form onSubmit={handelAddOrder} className='grid grid-cols-1 gap-5 justify-items-center mt-4'>
                        <input type="text" placeholder="name" value={name} disabled class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="email" value={user?.email} disabled class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" value={_id} disabled class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="price" value={price} disabled class="input input-bordered w-full max-w-xs" />
                        <input type="text" onChange={handleQuantity} placeholder={`minimum order ${minimumOrder}`} name='quantity' class="input input-bordered w-full max-w-xs" />
                        {disabled ? <small className="text-red-600">{error}</small> : ''}
                        <input type="text" name='address' placeholder="address" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="phone number" class="input input-bordered w-full max-w-xs" />
                        {
                            disabled ? <input type="submit" disabled class="input btn btn-info input-bordered w-full max-w-xs mb-2" /> : <input type="submit" class="input btn btn-info input-bordered w-full max-w-xs mb-2" />
                        }
                    </form>
                </div>
            </div>

        </div >
    );
};

export default Purchase;