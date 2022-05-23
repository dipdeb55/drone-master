import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const MakeAdmin = () => {

    const { data, isLoading } = useQuery('orders', () => fetch('http://localhost:5000/user').then(res => res.json()))

    console.log(data)

    if (isLoading) {
        return <p>Loading....</p>
    }
    // useEffect(() => {
    //     fetch('http://localhost:5000/user')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setUser(data)
    //         })

    // }, [])

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${data.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div>
            <h1>Users:{data?.length}</h1>
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
                        {/* <!-- row 1 --> */}
                        {
                            data?.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                <td><button onClick={makeAdmin} class="btn bg-blue-700 btn-xs">Make Admin</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;