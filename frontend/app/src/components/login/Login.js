import { useState } from "react";
import axios from 'axios';

function Login() {

    const [pin, setPin] = useState('');

    const handleLogin = async(e) => {
        e.preventDefault();
        console.log(pin);

        const response = await axios.post('http://localhost:3000/login', 
            JSON.stringify({pin}),
            {
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        );
    }

    return (
        <div className="login-form-wrap">
            <h2>Bem Vindo</h2>
            <form className="login-form">
                <input type="pin" 
                        name="pin" 
                        placeholder="pin" 
                        required
                        onChange={(e) => setPin(e.target.value)}
                        />
            </form>
            <button type="submit" 
                    className="btn-login"
                    onClick={(e) => handleLogin(e)}>Login</button>
        </div>
    );
}

export default Login;