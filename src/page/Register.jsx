import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {

    const { createUser, setUser, updateUser ,signInWithGoogle} = use(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState("")
    const navigate = useNavigate()





    const handleRegister = (e) => {
        e.preventDefault();
        const upperCase = /[A-Z]/;
        const lowerCase = /[a-z]/;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const image = e.target.imageURL.value;
        const password = e.target.password.value;
        console.log(name, email, image, password)

        if (password.length < 6) {
            setError('Password must be at least 6 character')
            return
        }
        else if (!upperCase.test(password)) {
            setError('Must have an Uppercase letter in the password')
            return
        }
        else if (!lowerCase.test(password)) {
            setError('Must have an Lowercase letter in the password')
            return
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                toast('Register Successful')
                console.log(user)
                updateUser({ displayName: name, photoURL: image })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: image })
                    })
                    .catch(error => {
                        console.log(error)
                        setError(error)
                    })
                navigate('/')

            })


    }

    const handleGoogleLogin=()=>{
     signInWithGoogle()
     .then(()=>{
        toast('Login Successful')
        navigate('/')
     })
     .catch(error=>{
        console.log(error)
     })
    }


const handleTogglePassword = (event) => {
        event.preventDefault()
        setShowPassword(!showPassword)
    }
    
    return (
        <div>
            <div className='min-h-screen'>
                <div className='text-center mt-10'>
                    <h1 className='text-5xl font-bold'>Create An Account</h1>
                    <h3 className='my-4 text-xl'>Please Enter Your Info</h3>
                </div>
                <div className=" flex items-center justify-center bg-gray-100">
                    <div className="bg-white border rounded-xl shadow-[8px_8px_0px_#1a1a1a] p-10 w-[450px]">

                        <form onSubmit={handleRegister}>
                            <fieldset>
                                {/* Name field */}
                                <input
                                    type="text"
                                    placeholder="Name" required
                                    name='name'
                                    className="w-full border border-[#1a1a1a] rounded-xl px-4 py-3 mb-5 outline-none focus:ring-2 focus:ring-black "
                                />
                                {/* email field */}
                                <input
                                    type="email" required
                                    name='email'
                                    placeholder="Email"
                                    className="w-full border border-[#1a1a1a] rounded-xl px-4 py-3 mb-5 outline-none focus:ring-2 focus:ring-black"
                                />
                                {/* photo url */}
                                <input
                                    type="text" required
                                    name='imageURL'
                                    placeholder="Image URL"
                                    className="w-full border border-[#1a1a1a] rounded-xl px-4 py-3 mb-5 outline-none focus:ring-2 focus:ring-black"
                                />
                                {/* password field */}
                                <div className='relative'>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name='password'
                                        required
                                        placeholder="Your Password"
                                        className="w-full border border-[#1a1a1a] rounded-xl px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-black" />
                                    <button onClick={handleTogglePassword} className=" absolute top-4 right-6">{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</button>
                                </div>
                                {error && <p className='text-red-500 text-xs'>{error}</p>}
                                

                                    <button type="submit" className="w-full my-2 border border-black text-black py-3 rounded-xl font-semibold hover:opacity-90 transition hover:bg-black hover:text-white ">
                                        SignUp Now
                                    </button>
                            </fieldset>

                            <p className="text-center mt-4 text-sm">
                                Already have an account?
                                <Link to={'/login'}><button className="text-blue-600 ml-1 hover:underline">Login</button></Link>
                            </p>

                            <button onClick={handleGoogleLogin} className="btn w-full mt-2 rounded-3xl bg-white text-black hover:text-white hover:bg-black border-[#e5e5e5]">
                                <svg className='rounded-2xl' aria-label="Google logo" width="22" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                SignUp with Google
                            </button>
                        </form>
                        <ToastContainer></ToastContainer>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Register;