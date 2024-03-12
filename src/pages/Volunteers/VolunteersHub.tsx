/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink } from "react-router-dom";
import Container from "../../components/ui/Container";
import { useGetVolunteersQuery } from "../../redux/features/volunteersSlice/volunteersApi";

const VolunteersHub = () => {
    const { data, isLoading } = useGetVolunteersQuery("");
    if (isLoading) {
        return <p>Loading</p>
    }
    return (
        <Container className="px-4">
            <div className="mb-5 my-10">
                <NavLink to='/create-volunteers'>
                    <button className="p-4 py-2 font-semibold shadow-md  uppercase cursor-pointer hover:bg-slate-200 transition-all text-center rounded-md bg-gradient-to-r from-sky-400 to-fuchsia-600 text-white">Register Volunteers</button>
                </NavLink>
            </div>
            <div className="overflow-x-auto mb-10">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>

                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Phone
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data?.map((volunteer: any) => (
                            <tr key={volunteer.id} className="border-b">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10">
                                            <img className="h-12 w-12 rounded-md" src={volunteer.img} alt="" />
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">{volunteer.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{volunteer.email}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{volunteer.phone}</div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </Container>
    );
};

export default VolunteersHub;