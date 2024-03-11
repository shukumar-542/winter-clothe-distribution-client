/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink } from "react-router-dom";
import Container from "../../components/ui/Container";
import { useGetVolunteersQuery } from "../../redux/features/volunteersSlice/volunteersApi";

const VolunteersHub = () => {
    const { data, isLoading } = useGetVolunteersQuery("");
    if (isLoading) {
        return <p>Loading</p>
    }
    console.log(data.length);
    return (
        <Container>
            <div className="mb-5 my-10">
                <NavLink to='/create-volunteers'>
                    <button className="p-4 py-2 font-semibold shadow-md  uppercase cursor-pointer hover:bg-slate-200 transition-all text-center rounded-md bg-gradient-to-r from-sky-400 to-fuchsia-600 text-white">Register Volunteers</button>
                </NavLink>
            </div>
            <div>
                <table className="table-fixed w-full item-center my-5 rounded-md ">
                    <thead className="bg-gray-700 border-b border-gray-900 text-gray-200 ">
                        <tr className="text-center  ">
                            <th className="py-5 ">Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        {
                            data?.map((volunteers : any) =>(
                                <tr className="text-center bg-gray-700  text-gray-200 border-b border-gray-900 ">
                            <td className="flex items-center justify-center my-5">
                                <img src={volunteers?.img} alt="" className="h-12 w-12 rounded-full" />
                            </td>
                            <td>{volunteers?.name}</td>
                            <td>{volunteers?.email}</td>
                            <td>{volunteers?.phone}</td>
                        </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
            </div>
        </Container>
    );
};

export default VolunteersHub;