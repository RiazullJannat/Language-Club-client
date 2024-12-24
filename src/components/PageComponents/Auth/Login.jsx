
import Lottie from 'lottie-react';
import signinAnimation from '../../../assets/animations/login-animation.json'
import useAuth from '../../../hooks/useAuth';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {setAuthLoading, login, setUser, withGoogle } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const SignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        login(email, password)
            .then((res) => {
                setUser(res.user)
                toast.success('login successfully.')
                navigate(location.state ? location.state : '/')
                setAuthLoading(false)
            })
            .catch(error => {
                toast.error(error.message)
                setAuthLoading(false)
            })
    }
    const handleGoogle = () => {
        withGoogle()
            .then(() => {
                toast.success('successfully login via google.')
                navigate(location.state ? location.state : '/')
                setAuthLoading(false)
            })
            .catch(error => {
                toast.error(error.message)
                setAuthLoading(false)
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie animationData={signinAnimation} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <form className="card-body" onSubmit={SignIn}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className='flex-wrap flex gap-2'>
                            <button className="border py-2 px-4 btn w-full" onClick={handleGoogle}>With Google</button>
                        </div>
                        <p className='text-center'>Don&apos;t have an account? <span className="text-red-600"><Link to={'/register'}>Register</Link></span></p>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;