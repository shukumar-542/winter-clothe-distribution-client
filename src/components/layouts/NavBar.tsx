import { NavLink } from "react-router-dom";
import img from '../../assets/images/header-logo.png'
import { useAppDispatch, useAppSelector } from "../../redux/features/hooks";
import { logOut, useCurrentUser } from "../../redux/features/auth/authSlice";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { toggleTheme } from "../../redux/features/themeSlice/themeSlice";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const NavBar = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(useCurrentUser)
    const { darkMode } = useAppSelector(store => store.theme);
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };
    const handleLogout = () => {
        dispatch(logOut())
    }
    const handleTheme = () => {
        dispatch(toggleTheme())
    }
    return (
        <div className={`${darkMode ? "bg-black" : "bg-primary-color "} sticky w-full z-[999]  top-0`}>
            <nav className="hidden md:flex justify-between  items-center max-w-7xl px-2 lg:px-0  h-[80px]  mx-auto">
                <NavLink to='/'>
                    <span>
                        <img src={img} alt="" className="w-24 lg:w-full" />
                    </span>
                </NavLink>
                <ul className="flex items-center  space-x-1 lg:space-x-3 text-white ">
                    <li onClick={handleTheme} className="cursor-pointer mr-2">
                        {
                            darkMode ? <MdOutlineWbSunny /> : <FaMoon />
                        }

                    </li>
                    <li className="hover:bg-sky-600 px-2 py-1 rounded-md shadow-md">
                        <NavLink to="winter-clothes" className="cursor-pointer">ALL Clothes</NavLink>
                    </li>

                    {
                        user &&
                        <li className="hover:bg-sky-600 px-2 py-1 rounded-md shadow-md">
                            <NavLink to="/dashboard" className="cursor-pointer ">Dashboard</NavLink>
                        </li>

                    }



                    <li className="hover:bg-sky-600 px-2 py-1 rounded-md shadow-md">
                        <NavLink to="/leaderBoard">LeaderBoard</NavLink>
                    </li>
                    <li className="hover:bg-sky-600 px-2 py-1 rounded-md shadow-md">
                        <NavLink to="/volunteers">About us</NavLink>
                    </li>
                    <li className="hover:bg-sky-600 px-2 py-1 rounded-md shadow-md">
                        <NavLink to="/community">Community</NavLink>
                    </li>
                    {
                        user &&
                        <li onClick={handleLogout} className="hover:bg-sky-600 px-2 py-1 rounded-md shadow-md cursor-pointer">Logout</li>
                    }
                    {
                        !user &&
                        <li className="hover:bg-sky-600 px-2 py-1 rounded-md shadow-md">

                            <NavLink className="cursor-pointer " to='/login'>
                                Login
                            </NavLink>
                        </li>
                    }
                    {!user && <li className="hover:bg-sky-600 px-2 py-1 rounded-md shadow-md">
                        <NavLink className="cursor-pointer " to='/register'>
                            Register
                        </NavLink>
                    </li>}

                </ul>

            </nav>
            {/* Mobile Navigation Icon */}

            <div className="md:hidden flex justify-between px-5 h-[50px] items-center relative ">
                <div onClick={handleNav} className='block md:hidden  '>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

                </div>
                <div className=" ">
                    <ul className={`${nav ? "absolute px-5 top-[50px] w-[40%]  text-white  h-[270px] bottom-0 left-0 ease-in-out duration-500 space-y-2" : "absolute top-[50px] left-[-100%] ease-in-out duration-500"} ${darkMode ? "bg-black"  : "bg-primary-color"}`}>
                        <li onClick={handleTheme} className="cursor-pointer mr-2">
                            {
                                darkMode ? <MdOutlineWbSunny /> : <FaMoon />
                            }

                        </li>
                        <li className="hover:bg-sky-600 px-2 py-1 rounded-md shadow-md">
                            <NavLink to="winter-clothes" className="cursor-pointer">ALL Clothes</NavLink>
                        </li>

                        {
                            user &&
                            <li className="hover:bg-sky-600 px-2 py-1 rounded-md shadow-md">
                                <NavLink to="/dashboard" className="cursor-pointer ">Dashboard</NavLink>
                            </li>

                        }



                        <li className="hover:bg-sky-600 px-2 py-1 rounded-md shadow-md">
                            <NavLink to="/leaderBoard">LeaderBoard</NavLink>
                        </li>
                        <li className="hover:bg-sky-600 px-2 py-1 rounded-md shadow-md">
                            <NavLink to="/volunteers">About us</NavLink>
                        </li>
                        <li className="hover:bg-sky-600 px-2 py-1 rounded-md shadow-md">
                            <NavLink to="/community">Community</NavLink>
                        </li>
                        {
                            user &&
                            <li onClick={handleLogout} className="hover:bg-sky-600 px-2 py-1 rounded-md shadow-md cursor-pointer">Logout</li>
                        }
                        {
                            !user &&
                            <li className="hover:bg-sky-600 px-2 py-1 rounded-md shadow-md">

                                <NavLink className="cursor-pointer " to='/login'>
                                    Login
                                </NavLink>
                            </li>
                        }
                        {!user && <li className="hover:bg-sky-600 px-2 py-1 rounded-md shadow-md">
                            <NavLink className="cursor-pointer " to='/register'>
                                Register
                            </NavLink>
                        </li>}


                    </ul>
                </div>
                <NavLink to='/'>
                    <span>
                        <img src={img} alt="" className="w-24 md:hidden" />
                    </span>
                </NavLink>
            </div>
        </div>
    );
};

export default NavBar;