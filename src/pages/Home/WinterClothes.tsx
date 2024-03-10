/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from '../../components/ui/Container';
import ProductCart from '../../components/ProductCart';
import { useGetLimitProductQuery } from '../../redux/features/productSlice/productApi';
import Button from '../../components/ui/Button';
import { NavLink } from 'react-router-dom';
import useScrollHook from '../../components/ui/useScrollHook';
import { motion } from 'framer-motion'

const WinterClothes = () => {
    const { data, isLoading } = useGetLimitProductQuery('');
    const { style, componentRef } = useScrollHook()
    if (isLoading) {
        return <>Loading..</>
    }
    return (
        <motion.div style={style} ref={componentRef}>
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-3 py-10 px-4 lg:px-0 gap-7  mt-10 ">
                    {
                        data?.map((product: any) => (
                            <ProductCart product={product} key={product._id}></ProductCart>
                        ))
                    }

                </div>
                <div className=' flex items-center justify-center mb-4'>
                    <NavLink to='winter-clothes'>
                        <Button className=' bg-gradient-to-r from-sky-500 to-sky-800 text-white' >View All Product</Button>
                    </NavLink>
                </div>
            </Container>
        </motion.div>
    );
};

export default WinterClothes;