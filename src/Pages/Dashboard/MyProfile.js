import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const { email, displayName } = user;

    const handelSubmit = (event) => {
        event.preventDefault()

        const name = event.target.name.value;
        const education = event.target.education.value;
        const city = event.target.city.value;
        const phone = event.target.phone.value;
        const LinkedIn = event.target.LinkedIn.value;

        const profile = { name, education, phone, city, LinkedIn }
        console.log(profile);

        fetch(`https://ancient-hamlet-08121.herokuapp.com/profile`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Profile updated')
                event.target.reset()
            })

    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8'>
            <div class="card  bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-3xl bold">{displayName}</h2>
                    <p className='text-xl'>{email}</p>
                </div>
            </div>

            <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                <h1 className='text-3xl'>Update Profile</h1>
                <div class="card-body">
                    <div class="card-actions justify-end">
                        <form onSubmit={handelSubmit}>
                            <input type="text" placeholder="name" name='name' value={displayName} disabled class="input input-bordered w-full max-w-xs mt-3" />
                            <input type="text" placeholder="education" name='education' class="input input-bordered w-full max-w-xs mt-3" />
                            <input type="text" placeholder="city" name='city' class="input input-bordered w-full max-w-xs mt-3" />
                            <input type="text" placeholder="phone number" name='phone' class="input input-bordered w-full max-w-xs mt-3" />
                            <input type="text" placeholder="LinkedIn link" name='LinkedIn' class="input input-bordered w-full max-w-xs mt-3" />
                            {/* <input type="text" placeholder="Type here" name='' class="input input-bordered w-full max-w-xs mt-3" /> */}
                            <input type="submit" value="Update" class="mt-3 input btn btn-info input-bordered w-full max-w-xs" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;