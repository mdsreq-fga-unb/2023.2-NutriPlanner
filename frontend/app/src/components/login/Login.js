function Login() {

    const handleLogin = async(e) => {
        e.preventDefault();
        console.log('teste quero dormir');
    }

    return (
        <div className="login-form-wrap">
            <h2>Bem Vindo</h2>
            <form className="login-form">
                <input type="pin" name="pin" placeholder="pin" required />
            </form>
            <button type="submit" 
                    className="btn-login"
                    onClick={(e) => handleLogin(e)}>Login</button>
        </div>
    );
}

export default Login;