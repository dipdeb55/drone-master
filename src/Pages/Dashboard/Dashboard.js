import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <h1 className='text-4xl text-green-500'>DashBoard</h1>
                    <Outlet></Outlet>

                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard' >My Orders</Link></li>
                        <li><Link to='/dashboard/addReview'>Give Review</Link></li>
                        <li><Link to='/dashboard/Myfrofile'>My Profile</Link></li>
                        {/* {<li><Link to='/dashboard/user'>All User</Link></li>} */}
                        {
                            admin && <>
                                <li><Link to='/dashboard/addTool'>Add Tool</Link></li>
                                <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>
                                <li><Link to='/dashboard/manageOrder'>Manage Orders</Link></li>
                                <li><Link to='/dashboard/manageTool'>Manage Tools</Link></li>
                            </>
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;