/* eslint-disable @typescript-eslint/no-explicit-any */
import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, Tooltip, XAxis, YAxis } from "recharts";
import userImg from '../../assets/images/user.png'
import { useAppSelector } from "../../redux/features/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { useGetProductByEmailQuery } from "../../redux/features/productSlice/productApi";
import { FaDonate, FaListUl } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

interface productItem {
    _id: string;
    title: string;
    description: string;
    img: string;
    category: string,
    size: string,
    name: string
}
const Dashboard = () => {
    const user = useAppSelector(useCurrentUser)
    const { data, isLoading } = useGetProductByEmailQuery(user?.email);
    if (isLoading) {
        return <p>Loading..</p>
    }
    const jacket = data?.filter((pro: productItem) => pro.category === 'jacket')
    const sweeter = data?.filter((pro: productItem) => pro.category === 'sweeter')
    const gloves = data?.filter((pro: productItem) => pro.category === 'gloves')

    const data01 = [
        { name: 'Jacket', value: jacket.length | 1 },
        { name: 'Sweeter', value: sweeter.length | 1},
        { name: 'Gloves', value: gloves.length | 1 },
    ];
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const bardata = [
        {
            name: 'Sweeter',
            uv: sweeter.length,
            pv: 10,
            amt: 10,
        },
        {
            name: 'Jacket',
            uv: jacket.length,
            pv: 10,
            amt: 10,
        },
        {
            name: 'Gloves',
            uv: gloves.length,
            pv: 10,
            amt: 90,
        }
    ];


    return (
        <div className="bg-gray-100  p-5 h-full">
            <div className="grid grid-cols-4 lg:grid-cols-12 gap-5 ">
                <div className="col-span-12  lg:col-span-8 flex justify-center items-center rounded-md px-5 pt-5 gap-5 bg-white shadow-md ">
                    <div className="space-y-5">
                        <h1 className="text-2xl text-primary-color">Congratulations! <span className="uppercase"> {user!.name} </span>🎉</h1>
                        <p className="text-gray-600">You have done 72% 🤩 more sales today.
                            Check your new raising badge in your profile.</p>
                    </div>
                    <div className="invisible lg:visible">
                        <img className="" src={userImg} alt="" />
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-4 bg-white flex flex-col justify-center items-center rounded-md shadow-md p-2">
                    <BarChart
                        width={305}
                        height={200}
                        data={bardata}
                        margin={{
                            top: 20,
                            right: 10,
                            left: 10,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="2 2" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="uv" fill="#8884d8" label={{ position: 'top' }}>
                            {data.map(( index: any) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart> 
                </div>

            </div>
            <div className=" mt-5 grid grid-cols-3 justify-between gap-5">
                <div className="col-span-3 lg:col-span-1 flex justify-center items-center bg-white rounded-md shadow-md">
                    <PieChart width={400} height={220}>
                        <Pie
                            dataKey="value"
                            isAnimationActive={false}
                            data={data01}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#4234d5"
                            label
                        />
                        <Tooltip />
                    </PieChart>
                </div>
                <div className="col-span-3 lg:col-span-1 bg-white flex flex-col justify-center items-center rounded-md shadow-md  lg:space-y-5">
                    <div className="flex justify-between px-5 w-full">

                        <FaDonate className="size-10 text-white  rounded-full bg-primary-color p-2" />
                        <BsThreeDotsVertical className="size-6 cursor-pointer text-gray-700" />


                    </div>
                    <p className="text-xl font-semibold text-primary-color ">Total Donate</p>
                    <p className="text-gray-600">{data?.length} Clothes</p>
                </div>
                <div className="col-span-3 lg:col-span-1 bg-white flex flex-col justify-center items-center rounded-md shadow-md p-2 ">
                    <div className="flex justify-between px-5 w-full">

                        <FaListUl className="size-10 text-white  rounded-full bg-primary-color p-2" />
                        <BsThreeDotsVertical className="size-6 cursor-pointer text-gray-700" />


                    </div>
                    <p className="text-xl font-semibold text-primary-color mb-5 ">Donate List</p>
                    <div>
                        <p className="text-gray-600 ">Jacket  : {jacket.length}</p>
                        <p className="text-gray-600">sweeter  : {sweeter.length}</p>
                        <p className="text-gray-600">Gloves  : {gloves.length}</p>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Dashboard;
