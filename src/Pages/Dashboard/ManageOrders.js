import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import DeleteModal from './DeleteModal';
import ManageOrderRow from './ManageOrderRow';

const ManageOrders = () => {
    // const [allOrders, setAllOrders] = useState([])

    // useEffect(() => {
    //     (fetch('http://localhost:5000/orders'))
    //         .then(res => res.json())
    //         .then(data => setAllOrders(data))
    // }, [])
    const [deleteOrder, setDeleteOrder] = useState(null)

    const url = 'http://localhost:5000/orders';
    const { data, refetch } = useQuery('order', () => fetch(url, {
        method: 'GET',
        'authorization': `Bearer ${localStorage.getItem('accesstoken')}`
    }).then(res => res.json()));
    // console.log(data)

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>price</th>
                            <th>OrderId</th>
                            <th>Quantity</th>
                            <th></th>
                            <th>Order Status</th>
                            <th>Order Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map(orders => <ManageOrderRow
                                key={orders._id}
                                orders={orders}
                                refetch={refetch}
                                setDeleteOrder={setDeleteOrder}
                            ></ManageOrderRow>)
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
        </div >
    );
};

export default ManageOrders;