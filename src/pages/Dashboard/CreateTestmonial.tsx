/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Testimonial from "../../components/Testimonial";
import TestimonialModal from "../../components/ui/TestimonialModal";
import { useGetAllVolunteersQuery } from "../../redux/features/volunteersSlice/volunteersApi";
import Container from "../../components/ui/Container";

const CreateTestimonial = () => {
    const [showModal, setShowModal] = useState(false);
    const { data, isLoading } = useGetAllVolunteersQuery("");
    const handleTestimonial = () => {
        setShowModal(true);

    }
    const handleCloseModal = () => {
        setShowModal(false);
    };
    if (isLoading) {
        return <p>Loading.</p>
    }
    return (
        <Container>
            {
                showModal && (

                    <TestimonialModal

                        onClose={handleCloseModal} />
                )
            }
            <div className="m-5">

                <button onClick={handleTestimonial} className="p-4 py-2 font-semibold shadow-md  uppercase cursor-pointer hover:bg-slate-200 transition-all text-center rounded-md bg-gradient-to-r from-sky-400 to-fuchsia-600 text-white">Add Testimonials</button>
            </div>
            <div className="grid grid-cols-3 gap-5 ">
                {
                    data?.map((testi : any) => <Testimonial key={testi._id} testimonials={testi} />)
                }
            </div>

        </Container>
    );
};

export default CreateTestimonial;