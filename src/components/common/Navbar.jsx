import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { RxSun } from "react-icons/rx";
import { FaRegMoon } from "react-icons/fa";
import { useEffect, useState } from "react";


const Navbar = () => {
    const { user, logout } = useAuth();
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])
    const onToggle = (e) => {
        e.target.checked ? setTheme('dark') : setTheme('light')
    }
    const logOut = () => {
        logout()
            .then(() => {
                toast.success('logged out successfully.')
            })
            .catch(error => toast.error(error.message))
    }
    const links =
        <>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/findTutors'}>Find Tutors</NavLink></li>
            <li><NavLink to={'/addTutorials'}>Add Tutorials</NavLink></li>
            <li><NavLink to={'/myTutorials'}>My Tutorials</NavLink></li>
            <li><NavLink to={'/myBookedTutors'}>My Booked Tutors</NavLink></li>
            <p className="md:hidden gap-3 text-base font-bold block">
                <Link to={'/login'}>Login</Link> or <Link to={'/register'}>Register</Link>
            </p>
        </>
    const auth = user ?
        <div className='dropdown dropdown-end z-50'>
            <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost btn-circle avatar'
            >
                <div title={user?.displayName} className='w-10 rounded-full'>
                    <img
                        referrerPolicy='no-referrer'
                        alt='User Profile Photo'
                        src={user?.photoURL}
                    />
                </div>
            </div>
            <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
                <li>{user.displayName}</li>
                <li className='mt-2'>
                    <button
                        onClick={logOut}
                        className='bg-gray-200 block text-center'
                    >
                        Logout
                    </button>
                </li>
            </ul>
        </div> :
        <div>
            <p className="md:flex gap-3 text-base font-bold hidden">
                <Link to={'/login'}>Login</Link> or <Link to={'/register'}>Register</Link>
            </p>
        </div>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Language Club</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end mx-5">
                {auth}
            </div>
            <div>
                <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" onChange={onToggle} checked={theme === 'light' ? false : true}/>

                    {/* sun icon */}
                    <RxSun className="swap-on h-10 w-4 md:w-6 fill-current" />

                    {/* moon icon */}
                    <FaRegMoon className="swap-off h-10 w-4 md:w-6 fill-current" />
                </label>
            </div>
        </div>
    );
};

export default Navbar;