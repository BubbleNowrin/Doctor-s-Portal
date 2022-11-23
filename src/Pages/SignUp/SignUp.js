import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {

    const { createUser, updateUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUpError] = useState('');
    const [createdUser, setCreatedUser] = useState('');
    const [token] = useToken(createdUser);

    if (token) {
        navigate('/');
    }

    const handleSignUp = data => {
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully');
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.email, data.name);

                    })
                    .catch(error => {
                        console.error(error);

                    })

            })
            .catch(error => {
                console.error(error);
                setSignUpError(error.message);
            })
    }

    const saveUser = (email, name) => {
        const user = { email, name };
        fetch('https://doctors-portal-server-pied-ten.vercel.app/users', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUser(email);

            })
            .catch(err => console.log(err))
    }



    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" className="input input-bordered w-full max-w-xs"  {...register("name", {
                            required: 'Name is required'
                        })} />
                        {errors.name && <span className='text-red-600'>{errors.name?.message}</span>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" className="input input-bordered w-full max-w-xs" {...register("email", {
                            required: 'Email is required'
                        })} />
                        {errors.email && <span className='text-red-600'>{errors.email?.message}</span>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" className="input input-bordered w-full max-w-xs" {...register("password", {
                            required: 'password is required',
                            minLength: { value: 6, message: 'Password must be 6 characters long' }
                        })} />
                        {errors.password && <span className='text-red-600'>{errors.password?.message}</span>}
                    </div>
                    <input className='btn btn-accent w-full mt-4' type="submit" value='Sign Up' />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already have an Account? <Link className='text-secondary' to='/login'>Login Here</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;