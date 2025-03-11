import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {register} from "../services/AuthService.js"

const Register = () => {
    const [userData, setUserData] = useState({
        fullName: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
    });

    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value});
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await register(userData);
            navigate("/login");
        } catch (error) {
            setError(error);
        }
    }
    return (
        <div>
            <h2>Register</h2>
            {error && <p style={{color: "red"}}>{error}</p>}
            <form onSubmit={handleRegister}>
                <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required/>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required/>
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required/>
                <input type="text" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required/>
                <input type="text" name="address" placeholder="Address" onChange={handleChange} required/>
                <button type="submit">Register</button>
            </form>
        </div>
    );

};

export default Register;