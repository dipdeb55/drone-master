import React, { useEffect } from 'react';

const DeleteModal = ({ deleteOrder, setDeleteOrder, data, refetch }) => {

    const { _id, name } = deleteOrder;
    console.log(deleteOrder)

    const handelDelete = (_id) => {
        fetch(`http://localhost:5000/orders/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert('Order deleted')
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
                    <h3 class="font-bold text-lg">Are you sure you want to delete <span className='text-xl text-gray-900'>{_id}</span></h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
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