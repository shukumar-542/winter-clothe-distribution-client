import {  useForm } from "react-hook-form";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/features/hooks";
import { usePostProductMutation } from "../../redux/features/productSlice/productApi";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";


type Inputs = {
    title : string,
    img : string,
    category : string,
    size : string,
    description : string
}

const PostCloth = () => {
    const { register, handleSubmit, } = useForm<Inputs>();
    const user = useAppSelector(useCurrentUser);
    const navigate = useNavigate()
    const [postProduct] = usePostProductMutation()
    const onSubmit= async(data :Inputs ) => {
        const toastId =  toast.loading('Product added')

        try {
            const newProduct = {
                email : user?.email,
                name : user?.name,
                ...data
                
            }
            postProduct(newProduct);
            toast.success('Product added successfully',{id : toastId , duration : 2000})
            navigate('/dashboard')
        } catch (error) {
            toast.error('Something Went Wrong.',{id : toastId , duration : 2000})
        }
       
        
    }
    return (

        <div className="bg-gray-100 h-full flex items-center">
            <div className="bg-white w-1/2 mx-auto p-10 shadow-md rounded-md">
                <h1 className="text-center font-bold  text-3xl mb-5">Donate Clothes</h1>
                <div className="max-w-2xl ">
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="title" className="text-gray-400">Title</label>
                            <input {...register("title")} type="text" className="border rounded-md p-2" placeholder="Type your clothes name" name="title" id="" />
                        </div>
                        <div className="flex flex-col space-y-2 mt-5 w-full">
                            <label htmlFor="image" className="text-gray-400">Image </label>
                            <input {...register("img")} type="text" className="border rounded-md p-2" placeholder="Type your product image" name="img" id="" />
                        </div>
                        <div className="flex flex-col space-y-2 mt-5 w-full">
                            <label htmlFor="category" className="text-gray-400">Category</label>
                            <select {...register("category")} className=" p-2 border rounded-md"  >
                                <option value="sweeter">Sweeter</option>
                                <option value="jacket">Jacket</option>
                                <option value="gloves">Gloves</option>
                            </select>
                        </div>
                        <div className="flex flex-col space-y-2 mt-5 w-full">
                            <label htmlFor="size" className="text-gray-400">Size</label>
                            <select {...register("size")} className=" p-2 border rounded-md"  >
                                <option value="M">M</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
                        </div>
                        <div className="flex flex-col space-y-2 mt-5 w-full">
                            <label htmlFor="description" className="text-gray-400">Description </label>
                            <textarea {...register("description")}  className="border rounded-md p-2" placeholder="Type your product details" name="description" id="" />
                        </div>
                        <button type="submit" className="w-full px-4 py-2 font-semibold shadow-md  uppercase cursor-pointer hover:bg-slate-200 transition-all  mt-4 text-center rounded-md bg-gradient-to-r from-sky-400 to-fuchsia-600 text-white">Add product</button>

                    </form>
                </div>

            </div>

        </div>
    );
};

export default PostCloth;