import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useAppSelector } from "../../redux/features/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";

const DashboardLayout = () => {
    const user = useAppSelector(useCurrentUser)
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-span-10  ">
                <div className="bg-gray-100  md:border-b shadow-sm">
                    <div className="sm:flex items-center px-5 border-b  justify-between  ">
                        <div>
                            <input type="text" className="invisible sm:visible p-1 rounded-md pl-2 bg-gray-200 " placeholder="Search" />

                        </div>
                        <div className="md:border-l p-2 flex  items-center justify-center gap-5">
                            <div className="relative">
                                <IoIosNotificationsOutline className="size-6 " />
                                <div className="bg-primary-color size-[6px] rounded-full absolute top-[-3px] right-0 shadow-md"></div>
                            </div>
                            <div className="text-[12px]">
                                <p className="font-semibold">{user?.name}</p>
                                <p >{user?.email}</p>
                            </div>
                        </div>
                    </div>
                    <p className="py-2 px-5 text-xl font-semibold">Dashboard</p>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;