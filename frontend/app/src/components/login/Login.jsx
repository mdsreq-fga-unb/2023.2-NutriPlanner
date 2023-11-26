import { useState } from "react";
import axios from 'axios';

function Login() {

    const [pin, setPin] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);

    const handleLogin = async(e) => {
        e.preventDefault();
        console.log(pin);

        try{
            const response = await axios.post('http://localhost:3000/login', 
                JSON.stringify({pin}),
                {
                    headers:{ 'Content-Type': 'application/json'}
                }
            );
            console.log(response.data);
            setUser(response.data);
        }catch (error){
            if(!error?.response){
                setError('Error');
            }else if (error.response.status == 401){
                setError('Pin inválido!');
            }
        }
    }

    return (
        <div className="login-form-wrap">
            {user == null ? 
            (
                <div>
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
                        <p>{error}</p>
                </div>
            ) : (
                <div>
                    <p>loguei</p>
                </div>
            )}
            
        </div>
    );
}

export default Login;