/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import Container from "./ui/Container";

const Testimonial = ({testimonials} :any) => {
    return (
        <Container className="mt-8">
            <div className="shadow-sm border-b    ml-5">
                <img src={testimonials?.img} alt="" className="w-full h-[200px] rounded-sm" />
                <div className="p-2  ">
                    <div className="flex justify-between mt-2">
                        <h1 className="font-semibold">{testimonials.name}</h1>
                        <div className="flex gap-2 text-gray-800">
                            <FaInstagram />
                            <FaFacebook />
                            <FaGithub />
                        </div>
                    </div>
                    <p className="text-gray-800">{testimonials?.designation}</p>
                    <p className="text-gray-800 leading-relaxed">{testimonials?.description}</p>
                </div>
            </div>
        </Container>
    );
};

export default Testimonial;