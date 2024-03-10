import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "../redux/features/productSlice/LoginApi";
import { useNavigate } from "react-router-dom";
type SData ={
    name : string,
    email : string,
    password : string
}
const Register = () => {
    const { handleSubmit, register } = useForm<SData>()
    const [userRegister] = useRegisterMutation()
    const navigate = useNavigate()
    const onSubmit = (data : SData) => {
        userRegister(data);
        navigate('/')
    }
    return (
        <div className="bg-gray-100 h-[100vh] flex items-center">
            <div className="bg-white w-1/3 mx-auto p-10 shadow-md rounded-md">
                <h1 className="text-center font-bold text-3xl mb-5">Register Account</h1>
                <div className="max-w-2xl ">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="email" className="text-gray-400">Name</label>
                            <input type="text" {...register('name')} className="border-b-2 p-2" placeholder="Type your username" name="name" id="" />
                        </div>
                        <div className="flex flex-col space-y-2 w-full mt-5">
                            <label htmlFor="email" className="text-gray-400">Email</label>
                            <input type="text" {...register('email')} className="border-b-2 p-2" placeholder="Type your Email" name="email" id="" />
                        </div>
                        <div className="flex flex-col space-y-2 mt-5 w-full">
                            <label htmlFor="email"  className="text-gray-400">Password</label>
                            <input type="text" {...register('password')} className="border-b-2 p-2" placeholder="Type your password" name="password" id="" />
                        </div>
                        <button type="submit" className="w-full px-4 py-2 font-semibold shadow-md  uppercase cursor-pointer hover:bg-slate-200 transition-all  mt-4 text-center rounded-2xl bg-gradient-to-r from-sky-400 to-fuchsia-600 text-white">Register</button>
                    </form>
                </div>
                <div className="mt-5">
                    <p className="text-center mb-5 text-gray-500">Or Sign Up Using </p>
                    <div className="flex items-center justify-center gap-10">
                        <div className="bg-blue-700 text-white p-2 rounded-full cursor-pointer ">
                            <FaFacebookF />
                        </div>
                        <div className="bg-sky-500 text-white p-2 rounded-full cursor-pointer">

                            <FaTwitter />
                        </div>
                        <div className="bg-rose-500 text-white p-2 rounded-full cursor-pointer">

                            <FaGoogle />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;