import { ArrowLeft, ArrowRight } from 'lucide-react';
import Container from '../../components/ui/Container';
import GallaryCard from '../../components/ui/GallaryCard';
import img1 from '../../assets/images/gallery1.jpg'
import img2 from '../../assets/images/gallery2.jpg'
import img3 from '../../assets/images/gallary3.jpg'
import img4 from '../../assets/images/gallery4.jfif'
import img5 from '../../assets/images/gallery6.jpg'
import img6 from '../../assets/images/gallery5.jpg'
import img7 from '../../assets/images/g8.jpg'


const Gallery = () => {
    const handleLeftBtn = () => {
        const clientContainer = document.getElementById('clientContainer');
        const width = clientContainer?.clientWidth;
        if (clientContainer && width) {
            clientContainer.scrollLeft = clientContainer.scrollLeft - 800;
        }
    };

    const handleRightBtn = () => {
        const clientContainer = document.getElementById('clientContainer');
        const width = clientContainer?.clientWidth;
        if (clientContainer && width) {
            clientContainer.scrollLeft = clientContainer.scrollLeft + 800;
        }
    };
    return (
        <Container className="my-20 mx-8">
            <div className="lg:flex justify-between items-center">
                <h1 className="font-semibold text-[20px] text-center mb-5 lg:text-[48px] uppercase">Our Clothe Distribution</h1>

            </div>
            <div className='relative'>
                    <div onClick={handleLeftBtn} className="bg-black/55 hover:bg-black/65 cursor-pointer p-1 lg:p-3 rounded-full absolute left-[-20px] top-1/2">
                        <ArrowLeft strokeWidth={4} className='text-white' />
                    </div>
                    <div onClick={handleRightBtn} className="bg-black/55 hover:bg-black/65 cursor-pointer p-1 lg:p-3 rounded-full absolute right-[-20px] top-1/2">
                        <ArrowRight strokeWidth={4} className='text-white' />
                    </div>
                <div className="flex scroll-m-1 scroll-smooth overflow-hidden gap-5" id="clientContainer">
                    <GallaryCard img={img1} />
                    <GallaryCard img={img2} />
                    <GallaryCard img={img3} />
                    <GallaryCard img={img4} />
                    <GallaryCard img={img5} />
                    <GallaryCard img={img6} />
                    <GallaryCard img={img7} />

                </div>
            </div>
        </Container>
    );
};

export default Gallery;