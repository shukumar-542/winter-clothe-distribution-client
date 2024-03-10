import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/header-logo.png'
import { MdOutlineDashboard } from 'react-icons/md';
const Sidebar = () => {
    return (
        <div className=' p-2 h-screen sticky'>
            <div>
                <NavLink to='/'>
                    <img src={logo} alt="" />
                </NavLink>
                <div className='flex items-center justify-center mt-5 '>
                    <ul className='flex flex-col gap-2  w-full'>
                        <NavLink to='/dashboard' className={({ isActive }) => `flex gap-2 items-center text-primary-color px-3 py-2 ${isActive ? 'text-primary-color bg-blue-100   shadow-sm' : ''}`}>
                            <MdOutlineDashboard />
                            <span className="truncate">Dashboard</span>

                        </NavLink>
                        <NavLink to='/dashboard/winter-clothes' className={({ isActive }) => `flex gap-2 items-center px-3 py-2 text-primary-color ${isActive ? ' bg-blue-100 px-3 py-2  shadow-sm' : ''}`}> 
                        <div className='size-1 rounded-md bg-primary-color'></div>
                        <span className="truncate">Winter clothes</span>
                        </NavLink>
                        <NavLink to='/dashboard/create-winter-clothes' className={({ isActive }) => `px-3 py-2 flex gap-2 items-center text-primary-color ${isActive ? 'text-primary-color bg-blue-100   shadow-sm' : ''}`}>
                            <div className='size-1 rounded-md bg-primary-color'></div>
                            <span className="truncate">Post clothes</span>
                        </NavLink>
                        <NavLink to='/dashboard/create-testimonial' className={({ isActive }) => `px-3 py-2 flex gap-2 items-center text-primary-color ${isActive ? 'text-primary-color bg-blue-100   shadow-sm' : ''}`}>
                            <div className='size-1 rounded-md bg-primary-color'></div>
                            <span className="truncate">Create Testimonial</span>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;