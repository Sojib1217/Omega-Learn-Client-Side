import React from 'react';
import { Link } from 'react-router';

const Login = () => {

    const handleLogin=(e)=>{
        e.preventDefault()
         const email=e.target.email.value;
         const password=e.target.password.value;
         console.log(email,password)
    }
    return (
        <div className='min-h-screen'>
            <div className='text-center mt-10'>
                <h1 className='text-5xl font-bold'>Account Login</h1>
                <h3 className='my-4 text-xl'>Please Enter Your Email & Password</h3>
            </div>
            <div className=" flex items-center justify-center bg-gray-100">
                <div className="bg-white border rounded-xl shadow-[8px_8px_0px_#1a1a1a] p-10 w-[450px]">
                    <form onSubmit={handleLogin}>
                        <fieldset>
                            {/* Email field */}
                            <input
                                type="text"
                                name='email'
                                required
                                placeholder="Your Email"
                                className="w-full border border-[#1a1a1a] rounded-xl px-4 py-3 mb-5 outline-none focus:ring-2 focus:ring-black"
                            />
                            {/* password field */}
                            <input
                                type="password"
                                name='password'
                                required
                                placeholder="Your Password"
                                className="w-full border border-[#1a1a1a] rounded-xl px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-black" />
                            <div className="mb-2">
                                <p className="text-blue-600 hover:underline text-sm">Forget Password</p>
                            </div>
                            <button className="w-full border border-black text-black py-3 rounded-xl font-semibold hover:opacity-90 transition hover:bg-black hover:text-white">
                                Login Now
                            </button>
                        </fieldset>
                        <p className="text-center mt-4 text-sm">
                            Don't have an account?
                            <Link to={'/register'}><button className="text-blue-600 ml-1 hover:underline">Register Here</button></Link>
                        </p>

                        <button className="btn w-full mt-2 rounded-3xl bg-white text-black hover:text-white hover:bg-black border-[#e5e5e5]">
                            <svg className='rounded-2xl' aria-label="Google logo" width="22" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                    </form>

                </div>
            </div>



        </div>

    );
};

export default Login;