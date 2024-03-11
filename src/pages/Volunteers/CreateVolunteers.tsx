import { useForm } from "react-hook-form";
import { useRegisterVolunteersMutation } from "../../redux/features/volunteersSlice/volunteersApi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";


type Inputs = {
    name: string,
    img: string,
    email: string,
    phone: number,


}
const CreateVolunteers = () => {
    const { register, handleSubmit, reset } = useForm<Inputs>();
    const [registerVolunteers] = useRegisterVolunteersMutation()
    const navigate = useNavigate()
    const onSubmit = async (data: Inputs) => {
       const toastId = toast.loading('Volunteer is Registering')
        try {

            const volunteers = {
                ...data
            }
            console.log(volunteers);
            registerVolunteers(volunteers)
            toast.success('Volunteers is register',{ id : toastId , duration : 2000})   
            reset()
            navigate("/volunteers")

        } catch (error) {
            toast.error('Something Went Wrong.',{id : toastId , duration : 2000})
        }
    }
    return (
        <div className="bg-gray-100 h-full flex items-center py-10 ">
            <div className="bg-white w-1/2 mx-auto p-10 shadow-md rounded-md">
                <h1 className="text-center font-bold  text-3xl mb-5">Register as Volunteers</h1>
                <div className="max-w-2xl ">
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="name" className="text-gray-400">Name</label>
                            <input {...register("name")} type="text" className="border rounded-md p-2" placeholder="Type your  name" name="name" id="" />
                        </div>
                        <div className="flex flex-col space-y-2 w-full mt-5">
                            <label htmlFor="Email" className="text-gray-400">Email</label>
                            <input {...register("email")} type="text" className="border rounded-md p-2" placeholder="Type your  name" name="email" id="" />
                        </div>
                        <div className="flex flex-col space-y-2 w-full mt-5">
                            <label htmlFor="Email" className="text-gray-400">Phone Number</label>
                            <input {...register("phone")} type="text" className="border rounded-md p-2" placeholder="Type your  phone number" name="phone" id="" />
                        </div>
                        <div className="flex flex-col space-y-2 mt-5 w-full">
                            <label htmlFor="image" className="text-gray-400">Image </label>
                            <input {...register("img")} type="text" className="border rounded-md p-2" placeholder="Type your product image" name="img" id="" />
                        </div>



                        <button type="submit" className="w-full px-4 py-2 font-semibold shadow-md  uppercase cursor-pointer hover:bg-slate-200 transition-all  mt-4 text-center rounded-md bg-gradient-to-r from-sky-400 to-fuchsia-600 text-white">Register</button>

                    </form>
                </div>

            </div>

        </div>
    );
};

export default CreateVolunteers;