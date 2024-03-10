import { FaCircleXmark } from "react-icons/fa6";
import { FcBusinessman } from "react-icons/fc";
import { MdOutlineMail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
type PropsData = {
    setOpenModal: () => void,
    name: string,
    email: string,
    title: string,
    description: string,
    size: string,
    category: string,
}

type PropsItem = {
    setOpenModal: (value: boolean) => void,
    data ? : PropsData,
}
const DetailsModal = ({ setOpenModal, data } : PropsItem ) => {
    const navigate = useNavigate()
    const handleModal = () => {
        setOpenModal(false)
    }
    const handleConfirm =()=>{
        navigate('/dashboard')
    }
    console.log(data);
    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[600px] p-4 max-h-[90vh] overflow-auto">
                <div className="bg-white shadow-md  rounded-2xl  overflow-hidden">
                    <div className="absolute right-2 top-3 cursor-pointer" onClick={handleModal}>
                        <FaCircleXmark className="size-8 text-red-400 " />
                    </div>
                    <div className="p-10 ">
                        <h1 className="text-xl font-semibold">{data?.title}</h1>
                        <p className="flex items-center gap-2 my-1"><FcBusinessman className="size-6" /> <span className="font-semibold">{data?.name}</span></p>
                        <p className="flex items-center gap-2 my-1"> <MdOutlineMail className="size-6 text-red-600" /> <span className="font-semibold">{data?.email}</span></p>
                        <p className="mt-4 leading-relaxed text-gray-600">Description : {data?.description}</p>
                        <div className="mt-4 flex justify-end">
                            <button onClick={handleConfirm} className="px-4 py-2 font-semibold shadow-md  uppercase cursor-pointer hover:bg-slate-200 transition-all  text-center rounded-2xl bg-gradient-to-r from-sky-400 to-fuchsia-600 text-white">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DetailsModal;