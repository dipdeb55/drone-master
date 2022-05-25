import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import ManageOrderRow from './ManageOrderRow';

const ManageOrders = () => {
    // const [allOrders, setAllOrders] = useState([])

    // useEffect(() => {
    //     (fetch('http://localhost:5000/orders'))
    //         .then(res => res.json())
    //         .then(data => setAllOrders(data))
    // }, [])

    const url = 'http://localhost:5000/orders'
    const { data: allOrders, refetch } = useQuery('order', () => fetch(url, {
        method: 'GET',

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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders?.map(orders => <ManageOrderRow
                                key={orders._id}
                                orders={orders}
                                refetch={refetch}
                            ></ManageOrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ManageOrders;