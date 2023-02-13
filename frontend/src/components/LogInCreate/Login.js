import { connect } from "react-redux"


function Login(){
    return(
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="text-center">
                <h1 className="text-5xl font-bold">Login now!</h1>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Email Here" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="Password Here" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
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

