import Container from "../../components/ui/Container";
import img1 from '../../assets/images/danor1.jfif'
import img2 from '../../assets/images/donor2.jfif'
import img3 from '../../assets/images/donor3.jfif'
import img4 from '../../assets/images/donor4.jfif'
import img5 from '../../assets/images/donor5.jfif'
import img6 from '../../assets/images/donor6.jfif'

import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import Marquee from "react-fast-marquee";
const Donors = () => {
    return (
        <Container className="">
            <h1 className="font-semibold text-[20px] text-center mb-12 lg:text-[48px] uppercase mt-10">
                Our Top Donors
            </h1>
            <Marquee pauseOnHover={true}>
                <div className="flex gap-8 ">
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
                    <div className="shadow-sm border-b w-[300px] lg:w-[400px]">
                        <img src={img2} alt="" className="w-full h-[200px] rounded-sm" />
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
                    <div className="shadow-sm border-b w-[300px] lg:w-[400px]">
                        <img src={img3} alt="" className="w-full h-[200px] rounded-sm" />
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

                    <div className="shadow-sm border-b w-[300px] lg:w-[400px]">
                        <img src={img4} alt="" className="w-full h-[200px] rounded-sm" />
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

                    <div className="shadow-sm border-b w-[300px] lg:w-[400px]">
                        <img src={img5} alt="" className="w-full h-[200px] rounded-sm" />
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

                    <div className="shadow-sm border-b w-[300px] lg:w-[400px]">
                        <img src={img6} alt="" className="w-full h-[200px] rounded-sm" />
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

                </div>
            </Marquee>
        </Container>
    );
};

export default Donors;