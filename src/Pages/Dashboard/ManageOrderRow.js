import React from 'react';
import { Link } from 'react-router-dom';

const ManageOrderRow = ({ orders }) => {
    return (
        <div>
            <tr key={orders._id}>
                {/* <th>{index + 1}</th> */}
                <td>{orders.name}</td>
                <td>${orders.price} </td>
                <td>{orders.orderId}</td>
                <td>{orders.quantity} <small>pcs</small></td>
                {/* <td>{(orders.price && !orders.paid) && <label onClick={() => setDeleteOrder(orders)} for="delete-modal" class="btn btn-xs btn-error">Delete</label>}</td> */}
                <td>{(orders.price && !orders.paid) && <Link to={`/dashboard/payment/${orders._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                    {(orders.price && orders.paid) && <div>
                        <p> <span className='text-success'>PAID</span></p>
                        <p>Transcation id: <span className='text-success'>{orders.transactionId}</span></p>
                    </div>}
                </td>
            </tr>
        </div>
    );
};

export default ManageOrderRow;