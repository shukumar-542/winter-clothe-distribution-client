import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/productSlice/LoginApi";
import { useAppDispatch } from "../redux/features/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type IFormData = {
    email: string,
    password: string
}

const Login = () => {
    const navigate = useNavigate()
    const [login] = useLoginMutation()
    const { register, handleSubmit, reset } = useForm<IFormData>();
    const dispatch = useAppDispatch()
    const onSubmit = async (data: IFormData) => {
       const toastId =  toast.loading('Logged In')

        try {
            const res = await login(data).unwrap()
            const user = verifyToken(res.token)
            dispatch(setUser({ user: user, token: res.token }))
            toast.success('Logged in successfully',{id : toastId , duration : 2000})
            navigate('/dashboard')
            reset()
        } catch (error) {
            toast.error('Something Went Wrong.',{id : toastId , duration : 2000})
        }

    }
    return (
        <div className="bg-gray-100 h-[100vh] flex items-center">
            <div className="bg-white w-1/3 mx-auto p-10 shadow-md rounded-md">
                <h1 className="text-center font-bold  text-3xl mb-5">Login</h1>
                <div className="max-w-2xl ">
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="email" className="text-gray-400">Email</label>
                            <input {...register("email")} type="text" className="border-b-2 p-2" placeholder="Type your username" name="email" id="" />
                        </div>
                        <div className="flex flex-col space-y-2 mt-5 w-full">
                            <label htmlFor="email" className="text-gray-400">Password</label>
                            <input {...register("password")} type="text" className="border-b-2 p-2" placeholder="Type your password" name="password" id="" />
                        </div>

                        <button type="submit" className="w-full px-4 py-2 font-semibold shadow-md  uppercase cursor-pointer hover:bg-slate-200 transition-all  mt-4 text-center rounded-2xl bg-gradient-to-r from-sky-400 to-fuchsia-600 text-white">Login</button>

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

export default Login;