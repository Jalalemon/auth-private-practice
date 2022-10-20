import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Register = ({children}) => {
const { createUser, signWithgoggle } = useContext(AuthContext);

    const submitRegister =(event) =>{
        event.preventDefault();

        const form = event.target;
        const email =form.email.value;
        const password = form.password.value;
        const name = form.name.value;

        console.log(email, password);
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset()
        })
        .catch(error => console.error('error', error))


    }

    const handlGoogleSignIn = () =>{
        signWithgoggle()
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.error(error))
    }
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Register now!</h1>
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
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    name="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
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
                  {/* <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label> */}
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">register</button>
                  <button
                    onClick={handlGoogleSignIn}
                    className="btn btn-outline btn-secondary"
                  >
                    <FontAwesomeIcon icon={faCoffee} /> google{" "}
                    <FontAwesomeIcon icon="fa-brands fa-google-drive" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;