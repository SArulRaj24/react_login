import React from "react";
import './login.css';

function Login(){
    return(
    
     <div className="wrapper">
        <form >
            <h1>Login</h1>
            <div className="input">
                <input type="text" placeholder="username"></input>
            </div>

            <div className="input">
                <input type="password" placeholder="password"></input>
            </div>

            <div className="remember">
                <label>
                    <input type="checkbox"/>Remember me  
                </label>
                <a href="#">Forget password</a>
            </div>
            <button type="submit">Login</button>


            <div className="signin">
                <p>Don't have an account <a href="#">Register</a></p>
            </div>
                
        </form>
        
    </div>    

            
       
    );
}
export default Login;