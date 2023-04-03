import { connect } from "react-redux";
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login(){
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginFail, setLoginFailed] = useState(false);
  const [currentUser, setCurrentUser] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://127.0.0.1:8000/login/', {
      email: email,
      password: password,
    }, {withCredentials : true})
      .then(response => {
        console.log(response.data);
        navigate('/');
        setIsLoggedIn(true);
        
        
      })
      .catch(error => {
        setLoginFailed(true);
        console.log(error);
        // handle login error
      });
  };

  useEffect(() => {
    if (isLoggedIn) {
      // Display the alert message for 3 seconds
      setTimeout(() => {
        setIsLoggedIn(false);
      }, 3000);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (loginFail) {
      // Display the alert message for 3 seconds
      setTimeout(() => {
        setLoginFailed(false);
      }, 3000);
    }
  }, [loginFail]);


    return(
      <div>
      {isLoggedIn && (
        <div>
        <div className="alert alert-success shadow-lg">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>Se logueo tranqui</span>
        </div>
      </div>
      </div>
      )}
      {loginFail && (
        <div className="alert alert-error shadow-lg">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>La regaste mijo</span>
        </div>
      </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div className="card-compact rounded-lg flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="text-center">
                <h1 className="text-5xl font-bold">Login now!</h1>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Write your Email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password Here" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    </div>
  
    )
}



const mapStateToProps=state=>({

})
export default connect(mapStateToProps,{

}) (Login)

