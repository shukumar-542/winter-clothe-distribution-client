import { MdOutlineArrowForward } from "react-icons/md";
import { NavLink } from "react-router-dom";

type cType = {
    img: string,
    title: string,
    category: string,
    size: string,
    _id: string
}
type propsType = {
    product: cType
}

const ProductCart = ({ product }: propsType) => {


    return (
        <div className='rounded-sm shadow-md  flex flex-col bg-gradient-to-r from-sky-500 to-sky-800 '>
            <div className='border rounded-md '>

                <img className='w-full size-[250px] ' src={product.img} alt="" />
            </div>
            <div className='space-y-2 p-4   '>
                <div className='flex gap-5   justify-between'>
                    <h1 className=' font-semibold flex-auto text-white'>{product.title}</h1>
                    <p className='text-white '>Size :{product.size}</p>

                </div>
                <div className='flex justify-between '>
                    <p className='text-white'>Category : {product.category}</p>

                    <NavLink to={`/details/${product._id}`}>
                        <div className='flex items-center text-white px-2 py-2 mt-1  bg-gradient-to-r from-sky-500 to-sky-800 transition-all cursor-pointer'>
                            <span>See Details</span>
                            <MdOutlineArrowForward />
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;