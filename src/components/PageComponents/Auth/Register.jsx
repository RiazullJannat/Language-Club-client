import Lottie from "lottie-react";
import signupAnimation from "../../../assets/animations/sign-in.json"
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Loading from "../../common/Loading";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { setAuthLoading, authLoading, register, setUser, update, withGoogle } = useAuth();
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const formData = Object.fromEntries(form.entries())
        register(formData.email, formData.password)
            .then(() => {
                update({ displayName: formData.name, photoURL: formData.photoURL })
                    .then((res) => {
                        const user = {
                            displayName: formData.name,
                            email: formData.email,
                            photoURL: formData.photoURL,
                        };
                        axios.post(`${import.meta.env.VITE_BASE_URL}/addUser`, user)
                            .then(() => {
                                setUser(res.user)
                                toast.success('Registered successfully.')
                                setAuthLoading(false)
                                navigate(location.state ? location.state : '/');
                            })
                            .catch(error => {
                                setAuthLoading(false)
                                console.log(error)
                            })
                    })
            })
            .catch(error => {
                console.log(error.message)
                setAuthLoading(false)
            })
    }
    const handleGoogle = () => {
        withGoogle()
            .then((res) => {
                const user = {
                    displayName: res.user.displayName,
                    email: res.user.email,
                    photoURL: res.user.photoURL,
                };
                axios.post(`${import.meta.env.VITE_BASE_URL}/addUser`, user)
                    .then(() => {
                        setUser(res.user)
                        toast.success('Registered successfully.')
                        setAuthLoading(false)
                        navigate(location.state ? location.state : '/');
                    })
                    .catch(error => {
                        setAuthLoading(false)
                        console.log(error)
                    })
            })
    }
    if (authLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie animationData={signupAnimation} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <form className="card-body" onSubmit={handleSignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="enter you name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="url" placeholder="photo Url" name="photoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div>
                        <p className="text-center">Already have an account? <span className="text-red-600"><Link to={'/login'}>Login</Link></span></p>
                    </div>
                    <div className="flex w-full flex-col border-opacity-50">   
                        <div className="divider">OR</div>    
                    </div>
                    <div className='flex-wrap flex gap-2 '>
                        <button className="border py-2 px-4 btn w-full" onClick={handleGoogle}>With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;