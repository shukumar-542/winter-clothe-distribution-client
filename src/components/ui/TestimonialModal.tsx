import { useForm } from "react-hook-form";
import { FaCircleXmark } from "react-icons/fa6";

type MType = {
  onClose: () => void,
}
type SData = {
  name: string,
  designation: string,
  description :  string,
  img : string
}
const TestimonialModal = ( {onClose} : MType  ) => {
  const { register, handleSubmit, reset } = useForm<SData>();
  
  const onSubmit = (data : SData) => {
    console.log(data);
    onClose()
    reset()
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
                <input {...register("name")} type="text" className="border rounded-md p-2" placeholder="Type your name" name="name" id="" />
              </div>
              <div className="flex flex-col space-y-2 w-full">
                <label htmlFor="des" className="text-gray-400">Designation</label>
                <input {...register("designation")} type="text" className="border rounded-md p-2" placeholder="Type your designation" name="designation" id="" />
              </div>
             
              <div className="flex flex-col space-y-2 w-full">
                <label htmlFor="des" className="text-gray-400">Designation</label>
                <textarea {...register("description")} className="border rounded-md p-2" placeholder="Type your description" name="description" id="" />
              </div>
              <div className="flex flex-col space-y-2 w-full">
                <label htmlFor="img" className="text-gray-400">Image Url</label>
                <input {...register("img")} type="text" className="border rounded-md p-2" placeholder="Type your designation" name="img" id="" />
              </div>
             
            
              <button type="submit" className="w-full px-4 py-2 font-semibold shadow-md  uppercase cursor-pointer hover:bg-slate-200 transition-all  mt-4 text-center rounded-md bg-gradient-to-r from-sky-400 to-fuchsia-600 text-white">Create Testimonial</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialModal;
