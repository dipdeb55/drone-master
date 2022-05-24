import React, { useEffect, useState } from 'react';
import ManageOrderRow from './ManageOrderRow';

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([])

    useEffect(() => {
        (fetch('http://localhost:5000/orders'))
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allOrders?.map(orders => <ManageOrderRow
                                key={orders._id}
                                orders={orders}
                            ></ManageOrderRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ManageOrders;