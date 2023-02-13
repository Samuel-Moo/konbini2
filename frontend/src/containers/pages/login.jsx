
function LoginButton(props) {
   return (
    <div>
        <button className='underline' style={{padding: '20px 40px'}} onClick={props.onClick}>
            Login
        </button>
        <button onClick={props.onClick} style={{padding: '20px 40px'}}>
            Logout
        </button>
        <button onClick={props.onClick} style={{padding: '20px 40px'}}>
            Create Account
        </button>
    </div>
   );
 }

  function LogoutButton(props) {
   return (
     <button onClick={props.onClick}>
       Logout
     </button>
   );
 }

  export {LoginButton, LogoutButton}


