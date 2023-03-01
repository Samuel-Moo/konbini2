import { connect } from "react-redux";
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login(){
  //const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginFail, setLoginFailed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://127.0.0.1:8000/login/', {
      username: username,
      password: password,
    })
      .then(response => {
        console.log(response.data);
        //navigate('/');
        setIsLoggedIn(true); 
        // handle successful login
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
        <div className="alert alert-success" role="alert">
          You are logged in!
        </div>
      )}
      {loginFail && (
        <div className="alert alert-success" role="alert">
          Login Incorrect
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
                  <span className="label-text">Username:</span>
                </label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Write your username" className="input input-bordered" />
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
   /*
    <div>
        <form method='POST'>
            <div>
                <label id='email'>
                    <input placeholder="Enter Your Email Here">

                    </input>
                </label>
            </div>
            <br></br>
            <div>
                <label id='password'>
                    <input placeholder="Enter Your Password Here">

                    </input>
                </label>
            </div>
            <div>
                <button className="btn">Login</button>
            </div>

        </form> 
    </div> */
    
    )
}



const mapStateToProps=state=>({

})
export default connect(mapStateToProps,{

}) (Login)

