import { useContext, useState } from "react";
import { AuthContext } from "../../../context/userContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { url } from "@/App";


const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    });
    const { loading, error, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post(`${url}/auth/login`, credentials);
            const { isAdmin } = res.data;
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
            if (isAdmin) {
                navigate("/");
            } else {
                navigate("/home");
            }
        } catch (error) {
            dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
        }
    };
    const goToRegister = () => {
        navigate("/register");
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    เข้าสู่ระบบ
                </h2>
                <input
                    type="text"
                    placeholder="Username"
                    id="username"
                    onChange={handleChange}
                    className="w-full p-4 mb-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    onChange={handleChange}
                    className="w-full p-4 mb-6 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    disabled={loading}
                    onClick={handleClick}
                    className={`w-full py-3 text-lg font-semibold tracking-wide text-white rounded-lg shadow-xl transition duration-300 ${
                        loading
                            ? "bg-yellow-400 cursor-not-allowed"
                            : "bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300"
                    }`}
                >
                    {"เข้าสู่ระบบ"}
                </button>
                <div className="register-link flex justify-center mt-6 space-x-2 text-gray-600">
                    <span>ไม่มีบัญชี?</span>
                    <button onClick={goToRegister} className="text-yellow-600 hover:text-yellow-700 font-semibold">
                        ลงทะเบียน
                    </button>
                </div>
                {error && (
                    <span className="block mt-4 text-center text-red-600 font-medium">
                        {error.message}
                    </span>
                )}
            </div>
        </div>
    );
};

export default Login;
