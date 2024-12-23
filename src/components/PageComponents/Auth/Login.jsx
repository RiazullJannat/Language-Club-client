
import Lottie from 'lottie-react';
import signinAnimation from '../../../assets/animations/login-animation.json'
// import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Loading from '../../common/Loading';
// import axios from 'axios';

const Login = () => {
    // const { signIn, setUser, loading, setLoading } = useContext(AuthContext)
    const {authLoading } = useAuth();
    // const navigate = useNavigate();
    // const location = useLocation();
    const SignIn = (e) => {
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // signIn(email, password)
        //     .then(res => {
        //         setUser(res.user)
        //         setLoading(false)
        //         const user = {email: email}
        //         // navigate(location.state ? location.state : '/')
        //             axios.post('http://localhost:3000/jwt', user, {withCredentials:true})
        //             .then(res=>{
        //                 console.log(res.data)
        //             })
        //         })
        //     .catch(error => console.log(error.message))
    }

    if (authLoading) {
        // return <Loading></Loading>
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
                            {/* <Google></Google> */}
                        </div>
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