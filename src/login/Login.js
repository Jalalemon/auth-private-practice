import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import app from '../firebase/Firebase.config';

const auth = getAuth(app)
const Login = () => {
    const {signIn, user} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [success, setSuccess] = useState(false)
    const [userEmail, setUserEmail] = useState('');

     const submitRegister = (event) => {

       event.preventDefault();
        setSuccess(false)
       const form = event.target;
       const email = form.email.value;
       const password = form.password.value;

       console.log(email, password);
       signIn( email, password)
    .then(result => {
       const user = result.user;
        console.log(user);
        form.reset()
        setSuccess(true)
        navigate(from, {replace: true});
        
    })
    .catch(error =>{
        console.error(error)
    })

     };

     const handleBlurEmail = (event) =>{
        const email = event.target.value;
        setUserEmail(email);
        console.log(email);
        
     }
     const handleForgetPassword =  () =>{
        if(!userEmail){
            alert('please enter your email address')
            return ;
        }
        sendPasswordResetEmail(auth, userEmail)
        .then(() =>{
            alert('password reset sent your email')
        })
        .catch(error => console.error(error))
     }

     return (
       <div>
         <div className="hero min-h-screen bg-base-200">
           <div className="hero-content flex-col lg:flex-row-reverse">
             <div className="text-center lg:text-left">
               <h1 className="text-5xl font-bold">Login now!</h1>
               <p className="py-6">
                 Provident cupiditate voluptatem et in. Quaerat fugiat ut
                 assumenda excepturi exercitationem quasi. In deleniti eaque aut
                 repudiandae et a id nisi.
               </p>
             </div>
             <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
               <form onSubmit={submitRegister} className="card-body">
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text">Email</span>
                   </label>
                   <input onBlur={handleBlurEmail}
                     type="email"
                     placeholder="email"
                     name="email"
                     className="input input-bordered"
                   />
                 </div>
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text">Password</span>
                   </label>
                   <input
                     type="password"
                     name="password"
                     placeholder="password"
                     className="input input-bordered"
                   />
                   <label className="label">
                
                     <button onClick={handleForgetPassword} className="btn btn-link label-text-alt link link-hover">
                       Forgot password?
                     </button>
                   </label>
                 </div>
                 <div className="form-control mt-6">
                    {
                        success && <p>successfully logged</p>
                    }
                   <button className="btn btn-primary">Login</button>
                 </div>
               </form>
             </div>
           </div>
         </div>
       </div>
     );
};

export default Login;