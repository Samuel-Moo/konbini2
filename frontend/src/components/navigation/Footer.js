import { connect } from "react-redux"


    

function Footer(){
    return(
      <footer className="footer p-10 bg-secondary text-neutral-content static bottom-0">
      <div>
        <span className="footer-title">Services</span> 
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div> 
      <div>
        <span className="footer-title">Company</span> 
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div> 
      <div>
        <span className="footer-title">Legal</span> 
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
    )
}

const mapStateToProps=state=>({

})
export default connect(mapStateToProps,{

}) (Footer)