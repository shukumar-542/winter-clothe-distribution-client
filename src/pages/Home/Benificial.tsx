import Container from "../../components/ui/Container";
import img1 from '../../assets/images/testimonial41-124x163.jpg'
import img2 from '../../assets/images/testimonial8-124x163.jpg'
import img3 from '../../assets/images/testimonial51-124x163.jpg'
import img4 from '../../assets/images/testimonial6-124x163.jpg'
import { motion } from 'framer-motion'
import { fade } from '../../components/ui/useFade'
const Benificial = () => {
    return (
        <Container className="my-10 " >
            <h1 className="text-center text-2xl font-bold text-btn-text my-10">Success stories from beneficiaries</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-10  mx-5 lg:mx-0 overflow-hidden">
                <motion.div
                    variants={fade('right', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false }}
                    className="flex flex-row bg-gray-100 gap-5 my-10 items-center border-t-2 border-btn-text shadow-md hover:shadow-lg cursor-pointer">
                    <div className="basis-1/4 ">
                        <img src={img1} className="w-full relative top-[-25px]" alt="" />
                        <p className="mx-2 mb-5 font-semibold text-gray-600 ">CHARLES XAVIER</p>
                    </div>
                    <div className="basis-3/4">
                        <p className="leading-relaxed text-gray-600">My friend advised me to join with them, but I wasn't sure if it would be helpful or not. I did not spend a lot of time with them during the primary stage because I…</p>
                    </div>
                </motion.div>
                <motion.div
                    variants={fade('left', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false }}
                    className="flex flex-row bg-gray-100 my-10 gap-5 items-center border-t-2 border-btn-text shadow-md hover:shadow-lg cursor-pointer ">
                    <div className="basis-1/4 ">
                        <img src={img2} className="w-full relative top-[-25px]" alt="" />
                        <p className="mx-2 mb-5 font-semibold text-gray-600 ">CHARLES XAVIER</p>
                    </div>
                    <div className="basis-3/4">
                        <p className="leading-relaxed text-gray-600">My friend advised me to join with them, but I wasn't sure if it would be helpful or not. I did not spend a lot of time with them during the primary stage because I…</p>
                    </div>
                </motion.div>
                <motion.div 
                variants={fade('right', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false }}
                className="flex flex-row bg-gray-100 gap-5 my-10 items-center border-t-2 border-btn-text shadow-md hover:shadow-lg cursor-pointer">
                    <div className="basis-1/4 ">
                        <img src={img3} className="w-full relative top-[-25px]" alt="" />
                        <p className="mx-2 mb-5 font-semibold text-gray-600 ">CHARLES XAVIER</p>
                    </div>
                    <div className="basis-3/4">
                        <p className="leading-relaxed text-gray-600">My friend advised me to join with them, but I wasn't sure if it would be helpful or not. I did not spend a lot of time with them during the primary stage because I…</p>
                    </div>
                </motion.div>
                <motion.div
                variants={fade('left', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false }}
                className="flex flex-row bg-gray-100 gap-5 my-10 items-center border-t-2 border-btn-text shadow-md hover:shadow-lg cursor-pointer ">
                    <div className="basis-1/4 ">
                        <img src={img4} className="w-full relative top-[-25px]" alt="" />
                        <p className="mx-2 mb-5 font-semibold text-gray-600 ">CHARLES XAVIER</p>
                    </div>
                    <div className="basis-3/4">
                        <p className="leading-relaxed text-gray-600">My friend advised me to join with them, but I wasn't sure if it would be helpful or not. I did not spend a lot of time with them during the primary stage because I…</p>
                    </div>
                </motion.div>
            </div>
        </Container>
    );
};

export default Benificial;