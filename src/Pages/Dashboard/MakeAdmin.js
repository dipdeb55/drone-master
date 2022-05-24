import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import AdminRow from './AdminRow';

const MakeAdmin = () => {

    const { data: users, isLoading, refetch } = useQuery('orders', () => fetch('http://localhost:5000/user').then(res => res.json()))

    // const { role } = users;
    // console.log(users)

    // let email = {};
    // const info = users?.map(d => email = d.email)
    // console.log(email)


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



    return (
        <div>
            <h1>Users:{users?.length}</h1>
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
                            users?.map(user => <AdminRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></AdminRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MakeAdmin;