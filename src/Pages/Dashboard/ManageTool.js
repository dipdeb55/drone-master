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
    console.log(data)

    return (
        <div className='mt-6'>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Preview</th>
                            <th>price</th>
                            <th>Stock</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((tools, index) => <ManageToolRow
                                key={tools._id}
                                index={index}
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