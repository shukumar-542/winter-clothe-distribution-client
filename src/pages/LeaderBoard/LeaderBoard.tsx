import { BsTrophyFill } from "react-icons/bs";
import Container from "../../components/ui/Container";
import { FaMedal } from "react-icons/fa";

const LeaderBoard = () => {
    return (
        <div className=" h-screen">
            <Container >
                <h1 className="text-center font-bold text-2xl pt-5">Top Contributor Leader board</h1>

                <div className="grid grid-cols-3 gap-5 mt-5">
                    <div className="bg-gray-800 shadow-md text-gray-200 px-5 py-8 rounded-md">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="uppercase">Jhon Smith</p>
                                <p>jhon@gmail.com</p>
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
                            <p>Total Contribute: 10</p>
                        </div>
                        <div className="flex justify-between items-center mt-5">
                            <div className="flex  flex-col items-center border-b border-dashed border-red-600">
                                <p>Total jacket</p>
                                <p>5</p>
                            </div>
                            <div className="flex  flex-col items-center  border-b border-dashed border-green-600">
                                <p>Total Sweeter</p>
                                <p>5</p>
                            </div>
                            <div className="flex  flex-col items-center  border-b border-dashed border-amber-600">
                                <p>Total Gloves</p>
                                <p>5</p>
                            </div>

                        </div>

                    </div>




                    <div className="bg-gray-800 shadow-md text-gray-200 px-5 py-8 rounded-md">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="uppercase">Jhon Smith</p>
                                <p>jhon@gmail.com</p>
                            </div>
                            <div>

                                <BsTrophyFill className="size-10 text-fuchsia-200-400" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-5">
                            <div className="flex gap-2 items-center ">
                                <FaMedal className=" text-amber-400" />
                                <p>Top Contributor</p>
                            </div>
                            <p>Total Contribute: 10</p>
                        </div>
                        <div className="flex justify-between items-center mt-5">
                            <div className="flex  flex-col items-center border-b border-dashed border-red-600">
                                <p>Total jacket</p>
                                <p>5</p>
                            </div>
                            <div className="flex  flex-col items-center  border-b border-dashed border-green-600">
                                <p>Total Sweeter</p>
                                <p>5</p>
                            </div>
                            <div className="flex  flex-col items-center  border-b border-dashed border-amber-600">
                                <p>Total Gloves</p>
                                <p>5</p>
                            </div>

                        </div>

                    </div>






                    <div className="bg-gray-800 shadow-md text-gray-200 px-5 py-8 rounded-md">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="uppercase">Jhon Smith</p>
                                <p>jhon@gmail.com</p>
                            </div>
                            <div>

                                <BsTrophyFill className="size-10 text-emerald-400" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-5">
                            <div className="flex gap-2 items-center ">
                                <FaMedal className=" text-amber-400" />
                                <p>Top Contributor</p>
                            </div>
                            <p>Total Contribute: 10</p>
                        </div>
                        <div className="flex justify-between items-center mt-5">
                            <div className="flex  flex-col items-center border-b border-dashed border-red-600">
                                <p>Total jacket</p>
                                <p>5</p>
                            </div>
                            <div className="flex  flex-col items-center  border-b border-dashed border-green-600">
                                <p>Total Sweeter</p>
                                <p>5</p>
                            </div>
                            <div className="flex  flex-col items-center  border-b border-dashed border-amber-600">
                                <p>Total Gloves</p>
                                <p>5</p>
                            </div>
                        </div>
                    </div>
                </div>


                <table className="w-full mt-5 items-center table-fixed rounded-md">
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
                        <tr className="text-center border-b border-gray-400 bg-gray-800 text-white">
                            <td className="py-4 ">4</td>
                            <td>Jhon smith</td>
                            <td>5</td>
                            <td>4</td>
                            <td>4</td>
                            <td>10</td>

                        </tr>
                        <tr className="text-center border-b border-gray bg-gray-800 text-white">
                            <td className="py-4 ">4</td>
                            <td>Jhon smith</td>
                            <td>5</td>
                            <td>4</td>
                            <td>4</td>
                            <td>10</td>

                        </tr>
                        <tr className="text-center border-b border-white bg-gray-800 text-white">
                            <td className="py-4 ">4</td>
                            <td>Jhon smith</td>
                            <td>5</td>
                            <td>4</td>
                            <td>4</td>
                            <td>10</td>

                        </tr>
                    </tbody>
                </table>


            </Container>
        </div>
    );
};

export default LeaderBoard;