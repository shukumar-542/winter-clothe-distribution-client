import { useState } from "react";
import Testimonial from "../../components/Testimonial";
import TestimonialModal from "../../components/ui/TestimonialModal";

const CreateTestimonial = () => {
    const [showModal, setShowModal] = useState(false);

    const handleTestimonial = () => {
        setShowModal(true);

    }
    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <div>
             {
                showModal && (

                    <TestimonialModal
                       
                        onClose={handleCloseModal} />
                )
            }
            <div className="mb-5">

                <button onClick={handleTestimonial} className="p-4 py-2 font-semibold shadow-md  uppercase cursor-pointer hover:bg-slate-200 transition-all text-center rounded-md bg-gradient-to-r from-sky-400 to-fuchsia-600 text-white">Donate Winter Clothe</button>
            </div>
            
            <Testimonial />
        </div>
    );
};

export default CreateTestimonial;