/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "../../components/ui/Container";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { useGetAllVolunteersQuery } from "../../redux/features/volunteersSlice/volunteersApi";
const Donors = () => {
    const { data, isLoading } = useGetAllVolunteersQuery("");

    if (isLoading) {
        return <p>Loading..</p>
    }
    return (
        <Container className="">
            <h1 className="font-semibold text-[20px] text-center mb-12 lg:text-[48px] uppercase mt-10">
                Our Top Donors Testimonials
            </h1>
            <Marquee pauseOnHover={true}>
                <div className="flex gap-8 ">

                    {
                        data?.map((donor : any) => (
                            <div className="shadow-sm border-b  w-[300px] lg:w-[400px] ml-5">
                                <img src={donor?.img} alt="" className="w-full h-[200px] rounded-sm" />
                                <div className="p-2  ">
                                    <div className="flex justify-between mt-2">
                                        <h1 className="font-semibold">{donor?.name}</h1>
                                        <div className="flex gap-2 text-gray-800">
                                            <FaInstagram />
                                            <FaFacebook />
                                            <FaGithub />
                                        </div>
                                    </div>
                                    <p className="text-gray-800">{donor?.designation}</p>
                                    <p className="text-gray-800 leading-relaxed">{donor?.description}</p>
                                </div>
                            </div>
                        ))
                    }







                </div>
            </Marquee>
        </Container>
    );
};

export default Donors;