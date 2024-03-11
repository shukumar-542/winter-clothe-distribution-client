import { BsTrophyFill } from "react-icons/bs";
import Container from "../../components/ui/Container";
import { FaMedal } from "react-icons/fa";
import { useGetProductsQuery } from "../../redux/features/productSlice/productApi";
import CountProductAdded from "../../components/ui/CountProductAdded";

const LeaderBoard = () => {

    const { data, isLoading } = useGetProductsQuery('')
    if (isLoading) {
        return <p>Loading.</p>
    }

    const result = CountProductAdded(data)

    return (
        <div className=" mb-10">
            <Container >
                <h1 className="text-center font-bold text-2xl pt-5">Top Contributor Leader board</h1>

                <div className="grid grid-cols-3 gap-5 mt-5">
                    <div className="bg-gray-800 shadow-md text-gray-200 px-5 py-8 rounded-md">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="uppercase">{result[0]?.name}</p>
                                <p>{result[0]?.email}</p>
                            </div>
                            <div>

                                <BsTrophyFill className="size-10 text-amber-400" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-5">
                            <div className="flex gap-2 items-center ">
                                <FaMedal className=" text-amber-400" />
                                <p>1</p>
                            </div>
                            <p>Total Contribute: {result[0]?.totalProducts}</p>
                        </div>
                        <div className="flex justify-between items-center mt-5">
                            <div className="flex  flex-col items-center border-b border-dashed border-red-600">
                                <p>Total jacket</p>
                                <p>{result[0]?.jackets}</p>
                            </div>
                            <div className="flex  flex-col items-center  border-b border-dashed border-green-600">
                                <p>Total Sweeter</p>
                                <p>{result[0]?.sweaters}</p>
                            </div>
                            <div className="flex  flex-col items-center  border-b border-dashed border-amber-600">
                                <p>Total Gloves</p>
                                <p>{result[0]?.gloves}</p>
                            </div>

                        </div>

                    </div>




                    <div className="bg-gray-800 shadow-md text-gray-200 px-5 py-8 rounded-md">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="uppercase">{result[1]?.name}</p>
                                <p>{result[1]?.email}</p>
                            </div>
                            <div>

                                <BsTrophyFill className="size-10 text-fuchsia-200-400" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-5">
                            <div className="flex gap-2 items-center ">
                                <FaMedal className=" text-amber-400" />
                                <p>2</p>
                            </div>
                            <p>Total Contribute:{result[1]?.totalProducts} </p>
                        </div>
                        <div className="flex justify-between items-center mt-5">
                            <div className="flex  flex-col items-center border-b border-dashed border-red-600">
                                <p>Total jacket</p>
                                <p>{result[1]?.jackets}</p>
                            </div>
                            <div className="flex  flex-col items-center  border-b border-dashed border-green-600">
                                <p>Total Sweeter</p>
                                <p>{result[1]?.sweaters}</p>
                            </div>
                            <div className="flex  flex-col items-center  border-b border-dashed border-amber-600">
                                <p>Total Gloves</p>
                                <p>{result[1]?.gloves}</p>
                            </div>

                        </div>

                    </div>




                    {
                        result.length === 3 && <div className="bg-gray-800 shadow-md text-gray-200 px-5 py-8 rounded-md">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="uppercase">{result[2]?.name}</p>
                                    <p>{result[2]?.email}</p>
                                </div>
                                <div>

                                    <BsTrophyFill className="size-10 text-emerald-400" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-5">
                                <div className="flex gap-2 items-center ">
                                    <FaMedal className=" text-amber-400" />
                                    <p>3</p>
                                </div>
                                <p>Total Contribute: {result[2]?.totalProducts}</p>
                            </div>
                            <div className="flex justify-between items-center mt-5">
                                <div className="flex  flex-col items-center border-b border-dashed border-red-600">
                                    <p>Total jacket</p>
                                    <p>{result[2]?.jackets}</p>
                                </div>
                                <div className="flex  flex-col items-center  border-b border-dashed border-green-600">
                                    <p>Total Sweeter</p>
                                    <p>{result[2]?.sweaters}</p>
                                </div>
                                <div className="flex  flex-col items-center  border-b border-dashed border-amber-600">
                                    <p>Total Gloves</p>
                                    <p>{result[2]?.gloves}</p>
                                </div>
                            </div>
                        </div>
                    }



                </div>


                <table className="w-full mt-5 items-center h-full rounded-md">
                    <thead className="bg-gray-800 shadow-md border-b border-gray-400 text-gray-200 rounded-md ">
                        <tr>
                            <th className="py-5">Place</th>
                            <th>Name</th>
                            <th>Sweeter</th>
                            <th>Gloves</th>
                            <th>Jacket</th>
                            <th>Total Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            result?.map((user, i) => (
                                <tr key={i} className="text-center border-b border-gray-400 bg-gray-800 text-white">
                                    <td className="py-4 ">{i+1}</td>
                                    <td>{user?.name}</td>
                                    <td>{user?.sweaters}</td>
                                    <td>{user?.gloves}</td>
                                    <td>{user?.jackets}</td>
                                    <td>{user?.totalProducts}</td>

                                </tr>
                            ))
                        }


                    </tbody>
                </table>


            </Container>
        </div>
    );
};

export default LeaderBoard;