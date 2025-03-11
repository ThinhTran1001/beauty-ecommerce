import {useContext, useState} from "react";
import {AuthContext} from "../context/AuthContext.js";
import {useNavigate} from "react-router-dom";
import {login} from "../services/AuthService.js";
import {jwtDecode} from "jwt-decode";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const {loginUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userData = await login(email, password);
            loginUser(userData);

            const decodedToken = jwtDecode(userData.token);
            const userRole = decodedToken.role;

            if (userRole === "ADMIN") {
                navigate("/dashboard");
            } else {
                navigate("/home");
            }

        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{color: "red"}}>{error}</p>}
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                       required/>
                <input type="password" placeholder="Password" value={password}
                       onChange={(e) => setPassword(e.target.value)} required/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default login;