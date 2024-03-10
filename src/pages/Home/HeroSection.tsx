import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import slider1 from '../../assets/images/ss.jpg'
import slider2 from '../../assets/images/ss2.jpg'
import slider3 from '../../assets/images/ss3.jpg'
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import "swiper/css";


const HeroSection = () => {
    return (
        // <div className="hero-container mb-10 ">
        //     Hero section
        // </div>

        <div className='h-[450px] '>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                autoplay={{
                    delay: 2500,

                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper">
                <SwiperSlide >
                    <img src={slider3} alt="" />
                    <div className='absolute top-0 bg-black/55 h-full flex flex-col justify-center items-center text-white'>
                        <div className='w-3/4'>
                            <h1 className='text-2xl lg:text-4xl font-bold pb-3'><span className='text-yellow-500 '>Warmth</span> <span className='text-primary-color'>Shared</span>, Lives Brightened</h1>
                            <p className='leading-tight lg:leading-relaxed'>Welcome to Donativo, where every click can make a difference. Join us in spreading warmth and compassion this winter season by donating your gently used winter clothing. Together, we can make a positive impact on the lives of those in need</p>
                        </div>

                    </div>


                </SwiperSlide>
                <SwiperSlide >


                    <img src={slider2} className='object-contain' alt="" />
                    <div className='absolute top-0 bg-black/55 h-full flex flex-col justify-center items-center text-white'>
                        <div className='w-3/4'>
                            <h1 className='text-2xl lg:text-4xl font-bold pb-3'><span className='text-yellow-500 '>Warmth</span> <span className='text-primary-color'>Shared</span>, Lives Brightened</h1>
                            <p className='leading-tight lg:leading-relaxed'>Welcome to Donativo, where every click can make a difference. Join us in spreading warmth and compassion this winter season by donating your gently used winter clothing. Together, we can make a positive impact on the lives of those in need</p>
                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                        <img src={slider1} className='object-contain' alt="" />
                        <div className='absolute top-0 bg-black/55 h-full flex flex-col justify-center items-center text-white'>
                        <div className='w-3/4'>
                            <h1 className='text-2xl lg:text-4xl  font-bold pb-3'><span className='text-yellow-500 '>Warmth</span> <span className='text-primary-color'>Shared</span>, Lives Brightened</h1>
                            <p className='leading-tight lg:leading-relaxed'>Welcome to Donativo, where every click can make a difference. Join us in spreading warmth and compassion this winter season by donating your gently used winter clothing. Together, we can make a positive impact on the lives of those in need</p>
                        </div>

                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default HeroSection;