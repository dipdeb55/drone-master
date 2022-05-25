import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeleteModal from './DeleteModal';
import ManageToolRow from './ManageToolRow';

const ManageTool = () => {

    const [deleteOrder, setDeleteOrder] = useState(null)

    const url = 'http://localhost:5000/tools';
    const { data, refetch } = useQuery('order', () => fetch(url, {
        method: 'GET',
    }).then(res => res.json()));

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
                            <th> Preview</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map(tools => <ManageToolRow
                                key={tools._id}
                                tools={tools}
                                refetch={refetch}
                                setDeleteOrder={setDeleteOrder}
                            ></ManageToolRow>)
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

export default ManageTool;