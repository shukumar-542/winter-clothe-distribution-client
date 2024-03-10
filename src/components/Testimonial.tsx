import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import Container from "./ui/Container";
import img1 from '../assets/images/danor1.jfif'

const Testimonial = () => {
    return (
        <Container className="mt-8">
            <div className="shadow-sm border-b  w-[300px] lg:w-[400px] ml-5">
                <img src={img1} alt="" className="w-full h-[200px] rounded-sm" />
                <div className="p-2  ">
                    <div className="flex justify-between mt-2">
                        <h1 className="font-semibold">Silance Tokyo</h1>
                        <div className="flex gap-2 text-gray-800">
                            <FaInstagram />
                            <FaFacebook />
                            <FaGithub />
                        </div>
                    </div>
                    <p className="text-gray-800">Chef Executive office</p>
                    <p className="text-gray-800 leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum iure facere quos corporis ex vel sed laboriosam odit atque? Eum!</p>
                </div>
            </div>
        </Container>
    );
};

export default Testimonial;