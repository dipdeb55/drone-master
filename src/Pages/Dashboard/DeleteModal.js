import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ deleteOrder, setDeleteOrder, refetch }) => {

    const { _id, name } = deleteOrder;
    console.log(deleteOrder)

    const handelDelete = (_id) => {
        fetch(`https://ancient-hamlet-08121.herokuapp.com/orders/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success('Order deleted from your list')
                    setDeleteOrder(null)
                    refetch()
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure you want to delete <span className='text-xl text-gray-900'>{name}</span></h3>
                    <p class="py-4">Note: Once you delete it will remove from your order list</p>
                    <div class="modal-action">
                        <button onClick={() => handelDelete(_id)} class="btn btn-xs btn-error ">Delete</button>
                        <label for="delete-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteModal;