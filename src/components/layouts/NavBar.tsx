import { NavLink } from "react-router-dom";
import img from '../../assets/images/header-logo.png'
import { useAppDispatch, useAppSelector } from "../../redux/features/hooks";
import { logOut, useCurrentUser } from "../../redux/features/auth/authSlice";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { toggleTheme } from "../../redux/features/themeSlice/themeSlice";

const NavBar = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(useCurrentUser)
    const { darkMode } = useAppSelector(store => store.theme);

    const handleLogout = () => {
        dispatch(logOut())
    }
    const handleTheme =()=>{
        console.log('click')
        dispatch(toggleTheme())
    }
    return (
        <div className={`${darkMode ? "bg-black" : "bg-primary-color "} sticky w-full z-[999]  top-0`}>
            <nav className="flex justify-between items-center max-w-7xl px-2 lg:px-0  h-[80px]  mx-auto">
                <NavLink to='/'>
                    <span>
                        <img src={img} alt="" className="w-24 lg:w-full" />
                    </span>
                </NavLink>
                <ul className="flex items-center space-x-1 lg:space-x-3 text-white ">
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
                    <li onClick={handleTheme} className="cursor-pointer">
                        {
                            darkMode ? <MdOutlineWbSunny /> :  <FaMoon />
                        }
                        
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;