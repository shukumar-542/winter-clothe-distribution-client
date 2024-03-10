import { NavLink } from "react-router-dom";
import img from '../../assets/images/header-logo.png'
import { useAppDispatch, useAppSelector } from "../../redux/features/hooks";
import { logOut, useCurrentUser } from "../../redux/features/auth/authSlice";

const NavBar = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(useCurrentUser)

    const handleLogout = () => {
        dispatch(logOut())
    }
    return (
        <div className="bg-primary-color sticky w-full z-[999]  top-0">
            <nav className="flex justify-between items-center max-w-7xl px-2 lg:px-0  h-[80px]  mx-auto">
                <NavLink to='/'>
                    <span>
                        <img src={img} alt="" className="w-24 lg:w-full" />
                    </span>
                </NavLink>
                <ul className="flex space-x-1 lg:space-x-3 text-white ">
                    <NavLink to="winter-clothes" className="cursor-pointer">ALL Clothes</NavLink>
                    {
                        user &&
                        <NavLink to="/dashboard" className="cursor-pointer ">Dashboard</NavLink>
                    }
                    {
                        !user &&
                        <NavLink className="cursor-pointer " to='/login'>
                            Login
                        </NavLink>
                    }
                    {!user && <NavLink className="cursor-pointer " to='/register'>
                        Register
                    </NavLink>}

                    {
                        user && 
                        <li onClick={handleLogout} className="cursor-pointer ">Logout</li>
                    }
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;