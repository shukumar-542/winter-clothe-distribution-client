/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDeleteProductMutation, useGetProductByEmailQuery } from "../../redux/features/productSlice/productApi";
import Swal from "sweetalert2";
import Modal from "../../components/Modal";
import { useState } from "react";
import { useAppSelector } from "../../redux/features/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { NavLink } from "react-router-dom";

const DashboardWinterClothes = () => {
    const user = useAppSelector(useCurrentUser)
    const { data, isLoading } = useGetProductByEmailQuery(user?.email);
    const [deleteProduct] = useDeleteProductMutation();
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState('');
    if (isLoading) {
        return <p>Loading..</p>
    }

    const handleProductDelete = (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProduct(id)
                Swal.fire({
                    title: "Deleted!",
                    text: "Your Product has been deleted.",
                });
            }
        });
    }
    const handleProductUpdate = (id: string) => {
        setSelectedProduct(id)
        setShowModal(true);
    }
    const handleCloseModal = () => {
        setSelectedProduct('');
        setShowModal(false);
    };

    return (
        <div>
            {
                showModal && (

                    < Modal
                        pId={selectedProduct}
                        onClose={handleCloseModal} />
                )
            }
            <div className="overflow-x-auto mt-5">
                <div className="mb-5">
                    <NavLink to='/dashboard/create-winter-clothes'>
                        <button className="p-4 py-2 font-semibold shadow-md  uppercase cursor-pointer hover:bg-slate-200 transition-all text-center rounded-md bg-gradient-to-r from-sky-400 to-fuchsia-600 text-white">Donate Winter Clothe</button>
                    </NavLink>
                </div>
                <table className="table-fixed w-full items-center ">
                    <thead className="bg-gray-100 shadow-md ">
                        <tr >
                            <th className="py-5">Title</th>
                            <th>Category</th>
                            <th>Size</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((product: any) => (
                                <tr className="text-center border-b  ">
                                    <td className="py-4 ">{product?.title}</td>
                                    <td className="">{product?.category}</td>
                                    <td >{product.size}</td>
                                    <td>
                                        <div className="flex justify-center items-center gap-5">
                                            <span onClick={() => handleProductUpdate(product?._id)} className="cursor-pointer text-primary-color">
                                                <FaRegEdit className="size-5" />
                                            </span>
                                            <span onClick={() => handleProductDelete(product?._id)} className="cursor-pointer text-red-600">
                                                <RiDeleteBin6Line className="size-5" />
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardWinterClothes;