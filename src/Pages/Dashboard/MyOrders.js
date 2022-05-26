import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import DeleteModal from './DeleteModal';

const MyOrders = () => {

    const [orders, setOrders] = useState([])
    const [deleteOrder, setDeleteOrder] = useState(null)
    const [user] = useAuthState(auth);

    const { data, isLoading, refetch } = useQuery('orders', () => fetch(`http://localhost:5000/orders/myorder?email=${user.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accesstoken')}`
        }
    }).then(res => res.json()))


    return (
        <div>
            <h1>My Orders:{data?.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full ">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Order Id</th>
                            <th>Quantity</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {/* <!-- row 1 --> */}
                        {
                            data?.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.name}</td>
                                <td>${order.price} </td>
                                <td>{order.orderId}</td>
                                <td>{order.quantity} <small>pcs</small></td>
                                <td>{(order.price && !order.paid) && <label onClick={() => setDeleteOrder(order)} for="delete-modal" class="btn btn-xs btn-error">Delete</label>}</td>
                                <td>{(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    {(order.price && order.paid) && <div>
                                        <p> <span className='text-success font-bold'>PAID</span></p>
                                        <p>Transcation id: <span className='text-success'>{order.transactionId}</span></p>
                                    </div>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteOrder && <DeleteModal
                deleteOrder={deleteOrder}
                data={data}
                refetch={refetch}
                setDeleteOrder={setDeleteOrder}
            ></DeleteModal>}
        </div>
    );
};

export default MyOrders;