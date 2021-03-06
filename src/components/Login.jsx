import React, {Component} from 'react';
import '../css/login.css';

class Login extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
        
            <form className="box" action="/login" method="POST">
                <h1>Login</h1>
                <input type="text" placeholder="Username" name="username" autoComplete="off" required />
                <input type="password" placeholder="Password" name="password" autoComplete="off" required />
                <input type="button" value="Sign Up" name="register" />
                <input type="submit" value="Login" name="login" />
            </form>
        
        );
    }
    
}

export default Login;