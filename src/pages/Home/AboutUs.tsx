import { GiClothes, GiFamilyHouse, GiFoodTruck, GiHospital, GiTeacher, GiWaterBolt } from "react-icons/gi";
import Container from "../../components/ui/Container";
import { motion } from 'framer-motion'
import useScrollHook from "../../components/ui/useScrollHook";

const AboutUs = () => {
    const { style, componentRef } = useScrollHook()

    return (
        <motion.div style={style} ref={componentRef}>
            <Container className="my-10">
                <div className="text-center space-y-3 py-10 ">
                    <h4 className="text-btn-text font-semibold text-xl">What We Do?</h4>
                    <h1 className="font-semibold text-gray-600 text-2xl">We believe that we can save more lifes with you</h1>


                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
                    <div className="flex justify-between gap-5" >
                        <div>
                            <GiClothes className="size-16 text-gray-800" />

                        </div>
                        <div className="border-l border-primary-color pl-5 space-y-5">
                            <h1 className="font-semibold">Winter Clothes</h1>
                            <p className="leading-relaxed">Healthy food is food that gives you all the nutrients you need to stay healthy, feel well and have plenty of energy.</p>
                        </div>
                    </div>
                    <div className="flex justify-between gap-5" >
                        <div>
                            <GiTeacher className="size-16 text-gray-800" />

                        </div>
                        <div className="border-l border-primary-color pl-5 space-y-5">
                            <h1 className="font-semibold">Primary Education</h1>
                            <p className="leading-relaxed">Primary education, also called elementary education, is for children in kindergarten through sixth grade. Primary education provides students with a basic understanding of various subjects as well as the skills they will use throughout their lives..</p>
                        </div>
                    </div>
                    <div className="flex justify-between gap-5" >
                        <div>
                            <GiHospital className="size-16 text-gray-800" />

                        </div>
                        <div className="border-l border-primary-color pl-5 space-y-5">
                            <h1 className="font-semibold">Health Care</h1>
                            <p className="leading-relaxed">Helping health care providers communicate more effectively can help improve health and well-being. Strategies to make sure health care providers are aware of treatment guidelines and recommended services are also key to improving health.</p>
                        </div>
                    </div>
                    <div className="flex justify-between gap-5" >
                        <div>
                            <GiFoodTruck className="size-16 text-gray-800" />

                        </div>
                        <div className="border-l border-primary-color pl-5 space-y-5">
                            <h1 className="font-semibold">Healthy Food</h1>
                            <p className="leading-relaxed">Healthy food is food that gives you all the nutrients you need to stay healthy, feel well and have plenty of energy.</p>
                        </div>
                    </div>
                    <div className="flex justify-between gap-5" >
                        <div>
                            <GiFamilyHouse className="size-16 text-gray-800" />

                        </div>
                        <div className="border-l border-primary-color pl-5 space-y-5">
                            <h1 className="font-semibold">Residence Facilities</h1>
                            <p className="leading-relaxed">Residence Facilities is responsible for ensuring a healthy, safe, secure, comfortable, and aesthetically pleasing residential experience.</p>
                        </div>
                    </div>
                    <div className="flex justify-between gap-5" >
                        <div>
                            <GiWaterBolt className="size-16 text-gray-800" />

                        </div>
                        <div className="border-l border-primary-color pl-5 space-y-5">
                            <h1 className="font-semibold">Pure Water</h1>
                            <p className="leading-relaxed">for human consumption and domestic use which is sanitary and normally free of minerals, organic substances, and toxic agents in excess of reasonable amounts for domestic usage in the area served</p>
                        </div>
                    </div>
                </div>
            </Container>
        </motion.div>
    );
};

export default AboutUs;