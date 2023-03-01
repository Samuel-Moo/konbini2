import { connect } from "react-redux"
import { useState } from 'react';
import axios from 'axios';

function SignUp(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://127.0.0.1:8000/register/', {
      username: username,
      password: password,
      email: email,
    })
      .then(response => {
        console.log(response.data);
        // handle successful registration
        alert('Registration successful!'); // Show an alert message
      })
      .catch(error => {
        console.log(error.response.data);
        setError(error.response.data.error);
        alert('Could not register username');
      });
  };
    return(
      <form onSubmit={handleSubmit}>
        <div className="min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div className="card-compact rounded-lg flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">SignUp</h1>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Here" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username Here" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password Here" className="input input-bordered" />
              </div>

              <div className="form-control mt-6">
                {error && <div>{error}</div>}
                <button type="submit" className="btn btn-primary">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>

    )
}



const mapStateToProps=state=>({

})
export default connect(mapStateToProps,{

}) (SignUp)

