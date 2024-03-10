import Container from "../../components/ui/Container";
import team1 from '../../assets/images/team-1.jpg'
import team2 from '../../assets/images/team-2.jpg'
import team3 from '../../assets/images/team-3.jpg'
import team4 from '../../assets/images/team-4.jpg'
import {  FaFacebookF, FaGoogle, FaInstagram, FaMailBulk, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import {motion} from 'framer-motion'
import { fade } from "../../components/ui/useFade";

const Volunteers = () => {
    return (
        <Container className="my-10 overflow-hidden">
            <h4 className="text-center text-btn-text text-2xl font-bold">Our Volunteers</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                <motion.div className="border-2 border-dashed cursor-pointer hover:border-primary-color  hover:shadow-lg  "
                variants={fade('right', 0.8)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false }}
                >
                    <div >
                        <img className="w-full" src={team1} alt="" />
                    </div>
                    <div className="text-center space-y-2 mt-4 p-2 text-gray-700 ">
                        <h2 className="font-bold text-xl">Jonathan Doe</h2>

                        <div className="flex justify-center items-center">
                            <span className="flex items-center gap-2 font-bold"><FaPhoneAlt /> Mobile</span>
                            <p> : +49 123 456 789</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <span className="flex items-center gap-2 font-bold"><FaMailBulk /> E-Mail :</span>
                            <p> : johndoe@email.com</p>
                        </div>
                        <div className="flex justify-around py-4">
                            <div className="hover:bg-blue-600 group transition-all  p-1 rounded-full">
                                <FaFacebookF className=" text-blue-600 group-hover:text-white transition-all " />
                            </div>
                            <div className="hover:bg-blue-600 group transition-all  p-1 rounded-full">
                                <FaTwitter className=" text-blue-600 group-hover:text-white transition-all " />
                            </div>
                            <div className="hover:bg-red-600 group transition-all  p-1 rounded-full">
                                <FaGoogle className=" text-red-600 group-hover:text-white transition-all " />
                            </div>
                            <div className="hover:bg-rose-600 group transition-all  p-1 rounded-full">
                                <FaInstagram className=" text-rose-500 group-hover:text-white transition-all " />
                            </div>
                        </div>

                    </div>
                </motion.div>
                <motion.div className="border-2 border-dashed cursor-pointer hover:border-primary-color  hover:shadow-lg  "
                variants={fade('up', 0.8)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false }}
                >
                    <div >
                        <img className="w-full" src={team4} alt="" />
                    </div>
                    <div className="text-center space-y-2 mt-4 p-2 text-gray-700 ">
                        <h2 className="font-bold text-xl">Cameron Poll</h2>

                        <div className="flex justify-center items-center">
                            <span className="flex items-center gap-2 font-bold"><FaPhoneAlt /> Mobile</span>
                            <p> : +49 123 456 789</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <span className="flex items-center gap-2 font-bold"><FaMailBulk /> E-Mail :</span>
                            <p> : johndoe@email.com</p>
                        </div>
                        <div className="flex justify-around py-4">
                            <div className="hover:bg-blue-600 group transition-all  p-1 rounded-full">
                                <FaFacebookF className=" text-blue-600 group-hover:text-white transition-all " />
                            </div>
                            <div className="hover:bg-blue-600 group transition-all  p-1 rounded-full">
                                <FaTwitter className=" text-blue-600 group-hover:text-white transition-all " />
                            </div>
                            <div className="hover:bg-red-600 group transition-all  p-1 rounded-full">
                                <FaGoogle className=" text-red-600 group-hover:text-white transition-all " />
                            </div>
                            <div className="hover:bg-rose-600 group transition-all  p-1 rounded-full">
                                <FaInstagram className=" text-rose-500 group-hover:text-white transition-all " />
                            </div>
                        </div>

                    </div>
                </motion.div>
                <motion.div className="border-2 border-dashed cursor-pointer hover:border-primary-color  hover:shadow-lg  "
                variants={fade('up', 0.1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false }}
                >
                    <div >
                        <img className="w-full" src={team3} alt="" />
                    </div>
                    <div className="text-center space-y-2 mt-4 p-2 text-gray-700 ">
                        <h2 className="font-bold text-xl">Laura Fenty</h2>

                        <div className="flex justify-center items-center">
                            <span className="flex items-center gap-2 font-bold"><FaPhoneAlt /> Mobile</span>
                            <p> : +49 123 456 789</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <span className="flex items-center gap-2 font-bold"><FaMailBulk /> E-Mail :</span>
                            <p> : johndoe@email.com</p>
                        </div>
                        <div className="flex justify-around py-4">
                            <div className="hover:bg-blue-600 group transition-all  p-1 rounded-full">
                                <FaFacebookF className=" text-blue-600 group-hover:text-white transition-all " />
                            </div>
                            <div className="hover:bg-blue-600 group transition-all  p-1 rounded-full">
                                <FaTwitter className=" text-blue-600 group-hover:text-white transition-all " />
                            </div>
                            <div className="hover:bg-red-600 group transition-all  p-1 rounded-full">
                                <FaGoogle className=" text-red-600 group-hover:text-white transition-all " />
                            </div>
                            <div className="hover:bg-rose-600 group transition-all  p-1 rounded-full">
                                <FaInstagram className=" text-rose-500 group-hover:text-white transition-all " />
                            </div>
                        </div>

                    </div>
                </motion.div>
                <motion.div className="border-2 border-dashed cursor-pointer hover:border-primary-color  hover:shadow-lg  "
                variants={fade('left', 0.8)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false }}
                >
                    <div >
                        <img className="w-full" src={team2} alt="" />
                    </div>
                    <div className="text-center space-y-2 mt-4 p-2 text-gray-700 ">
                        <h2 className="font-bold text-xl">George Bell</h2>

                        <div className="flex justify-center items-center">
                            <span className="flex items-center gap-2 font-bold"><FaPhoneAlt /> Mobile</span>
                            <p> : +49 123 456 789</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <span className="flex items-center gap-2 font-bold"><FaMailBulk /> E-Mail :</span>
                            <p> : johndoe@email.com</p>
                        </div>
                        <div className="flex justify-around py-4">
                            <div className="hover:bg-blue-600 group transition-all  p-1 rounded-full">
                                <FaFacebookF className=" text-blue-600 group-hover:text-white transition-all " />
                            </div>
                            <div className="hover:bg-blue-600 group transition-all  p-1 rounded-full">
                                <FaTwitter className=" text-blue-600 group-hover:text-white transition-all " />
                            </div>
                            <div className="hover:bg-red-600 group transition-all  p-1 rounded-full">
                                <FaGoogle className=" text-red-600 group-hover:text-white transition-all " />
                            </div>
                            <div className="hover:bg-rose-600 group transition-all  p-1 rounded-full">
                                <FaInstagram className=" text-rose-500 group-hover:text-white transition-all " />
                            </div>
                        </div>

                    </div>
                </motion.div>
               
            </div>
        </Container>
    );
};

export default Volunteers;