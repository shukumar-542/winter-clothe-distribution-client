import { useParams } from 'react-router-dom';
import Container from '../components/ui/Container';
import { useGetProductByIdQuery } from '../redux/features/productSlice/productApi';
import { useState } from 'react';
import DetailsModal from '../components/ui/DetailsModal';
const ClothesDetails = () => {
    const {id} = useParams()
    const {data , isLoading} = useGetProductByIdQuery(id);
    const [openModal, setOpenModal]  = useState(false);
    const [modalData , setModalData] = useState()
    if(isLoading){
        return <p>Loading.</p>
    }

    const handleModal =()=>{
        setModalData(data)
        setOpenModal(prev => !prev)
    }

    return (
        <Container className='my-10 shadow-lg rounded-md p-10 flex gap-10 justify-center items-center max-w-screen-md'>
            {
                openModal && <DetailsModal setOpenModal={setOpenModal} data={modalData}  />
            }
            <div className='space-y-5'>
                <h1 className='text-2xl font-semibold text-gray-800'>{data?.title}</h1>
                <div className='flex gap-10'>
                    <p> <span className='font-semibold'>Category</span> : {data?.category}</p>
                    <p><span className='font-semibold'>Size</span> : {data?.size}</p>
                </div>
                <p className='text-gray-500'>
                {data?.description}
                </p>
                <button onClick={handleModal} className='w-full px-4 py-2 font-semibold shadow-md  uppercase cursor-pointer hover:bg-slate-200 transition-all  mt-4 text-center rounded-2xl bg-gradient-to-r from-sky-400 to-fuchsia-600 text-white' >Donate Now</button>
            </div>
            <img src={data?.img} alt="" />

        </Container>
    );
};

export default ClothesDetails;