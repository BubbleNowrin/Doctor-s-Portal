
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import useToken from '../../../hooks/useToken';

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');

    const [token] = useToken(loginUserEmail);

    if (token) {
        navigate(from, { replace: true });
    }


    const handleLogin = data => {
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                setLoginUserEmail(data.email);
            })

            .catch(error => {
                console.error(error)
                setLoginError(error.message);
            })
    }

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" className="input input-bordered w-full max-w-xs"  {...register("email",
                            { required: "Email Address is required" }
                        )} />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" className="input input-bordered w-full max-w-xs"  {...register("password",
                            {
                                required: 'password is required',
                                minLength: { value: 6, message: 'password must 6 characters or longer' }
                            }

                        )} />
                        <label className="label"><span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>

                    <input className='btn btn-accent w-full' type="submit" value='Login' />
                    {
                        loginError && <p className='text-red-600'>{loginError}</p>
                    }
                </form>
                <p>New to Doctor's Portal? <Link className='text-secondary' to='/signup'>Create New Account.</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;