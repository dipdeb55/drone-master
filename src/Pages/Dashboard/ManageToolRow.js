import React from 'react';

const ManageToolRow = ({ tools, setDeleteOrder }) => {
    return (
        <tr key={tools._id}>
            {/* <th>{index + 1}</th> */}
            <td>{tools.name}</td>
            <td>${tools.price} </td>
            <td>{tools._id}</td>
            <td>{tools.quantity} <small>pcs</small></td>
            <td> <div class="w-20 rounded">
                <img src={tools.image} alt="" />
            </div> </td>
            <td>{(tools.price && !tools.paid) && <label onClick={() => setDeleteOrder(tools)} for="delete-modal" class="btn btn-xs bg-red-500">Delete</label>}</td>
        </tr>
    );
};

export default ManageToolRow;