import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const ManageOrderRow = ({ orders, refetch, setDeleteOrder }) => {
    const { _id } = orders;
    const { id } = useParams()

    const statusChange = () => {
        fetch(`http://localhost:5000/orders/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Order Shipped')
                refetch()
            })
    }

    return (
        <tr key={orders._id}>
            {/* <th>{index + 1}</th> */}
            <td>{orders.name}</td>
            <td>${orders.price} </td>
            <td>{orders._id}</td>
            <td>{orders.quantity} <small>pcs</small></td>
            <td>{(orders.price && !orders.paid) && <label onClick={() => setDeleteOrder(orders)} for="delete-modal" class="btn btn-xs btn-error">Delete</label>}</td>
            <td>{(!orders.status) && <button onClick={statusChange} className='btn btn-xs btn-warning'>Pending..</button>}
                {(orders.status) && <button className='btn btn-xs btn-success'>Shipped</button>}</td>
            {/* <td>{(orders.price && !orders.paid) && <label onClick={() => setDeleteOrder(orders)} for="delete-modal" class="btn btn-xs btn-error">Delete</label>}</td> */}
            <td>{(orders.price && !orders.paid) && <Link to={`/dashboard/payment/${orders._id}`}><button className='btn btn-xs btn-warning'>UnPaid</button></Link>}
                {(orders.price && orders.paid) && <div>
                    <p> <span className='text-success'>PAID</span></p>
                    <p>Transcation id: <small className='text-success'>{orders.transactionId}</small></p>
                </div>}
            </td>
        </tr>
    );
};

export default ManageOrderRow;