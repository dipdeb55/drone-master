import React from 'react';
import { toast } from 'react-toastify';

const AdminRow = ({ user, refetch }) => {

    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                toast.success('You just make an Admin')
            })
    }


    return (
        <tr>
            <th>#</th>
            <td>{user.email}</td>
            <td>{role !== "admin" && <button onClick={makeAdmin} class="btn bg-blue-700 btn-xs">Make Admin</button>}</td>
        </tr>
    );
};

export default AdminRow;