import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeleteModal from './DeleteModal';
import ManageToolRow from './ManageToolRow';
import ToolDeleteModal from './ToolDeleteModal';

const ManageTool = () => {

    const [deleteOrder, setDeleteOrder] = useState(null)

    const url = 'https://ancient-hamlet-08121.herokuapp.com/tools';
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
            {deleteOrder && <ToolDeleteModal
                deleteOrder={deleteOrder}
                data={data}
                refetch={refetch}
                setDeleteOrder={setDeleteOrder}
            ></ToolDeleteModal>}
        </div >
    );
};

export default ManageTool;