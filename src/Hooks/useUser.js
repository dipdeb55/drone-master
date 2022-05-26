import React, { useEffect, useState } from 'react';

const useUser = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`https://ancient-hamlet-08121.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accesstoken')}`
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data from useToken', data)
                    const accessToken = data.token;
                    console.log(accessToken)
                    localStorage.setItem('accesstoken', accessToken)
                    setToken(accessToken)
                })
        }
    }, [user])
    return [token];
};

export default useUser;