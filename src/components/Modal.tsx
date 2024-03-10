import { useForm } from "react-hook-form";
import { useGetProductByIdQuery, useUpdateProductMutation } from "../redux/features/productSlice/productApi";
import { FaCircleXmark } from "react-icons/fa6";
import { toast } from "sonner";

type MType = {
  onClose: () => void,
  pId: string
}
type SData = {
  title: string,
  category: string,
  size: string
}
const Modal = ({ onClose, pId }: MType) => {
  const { register, handleSubmit, reset } = useForm<SData>();
  const { data, isLoading } = useGetProductByIdQuery(pId)
  const [updateProducts] = useUpdateProductMutation()
  const onSubmit = (data: SData) => {
    updateProducts({ id: pId, data })
    toast.success('Product update successfully',{ duration : 2000})
    onClose()
    reset()
  }
  if (isLoading) {
    return <p>Loading..</p>
  }
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[600px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md  rounded-2xl  overflow-hidden">
            <div className="absolute right-2 top-3 cursor-pointer" onClick={onClose}>
              <FaCircleXmark className="size-8 text-red-400 " />
            </div>
          <div className="p-5 lg:p-11">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col space-y-2 w-full">
                <label htmlFor="title" className="text-gray-400">Title</label>
                <input {...register("title")} defaultValue={data?.title} type="text" className="border rounded-md p-2" placeholder="Type your clothes name" name="title" id="" />
              </div>
              <div className="flex flex-col space-y-2 mt-5 w-full">
                <label htmlFor="category" className="text-gray-400">Category</label>
                <select {...register("category")} defaultValue={data?.category} className=" p-2 border rounded-md"  >
                  <option value="sweeter">Sweeter</option>
                  <option value="jacket">Jacket</option>
                  <option value="gloves">Gloves</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2 mt-5 w-full">
                <label htmlFor="size" className="text-gray-400">Size</label>
                <select {...register("size")} defaultValue={data?.size} className=" p-2 border rounded-md"  >
                  <option value="M">M</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>
              <button type="submit" className="w-full px-4 py-2 font-semibold shadow-md  uppercase cursor-pointer hover:bg-slate-200 transition-all  mt-4 text-center rounded-md bg-gradient-to-r from-sky-400 to-fuchsia-600 text-white">Update Product</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
