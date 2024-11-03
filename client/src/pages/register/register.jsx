import { useState, useContext } from "react";
import { AuthContext } from "../../../context/userContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { url } from "@/App";

const Register = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
        CheckPassword: "",
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
            await axios.post(`${url}/auth/register`, credentials);
            dispatch({ type: "REGISTER_SUCCESS" });
            navigate("/");
        } catch (error) {
            dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
        }
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('https://pbs.twimg.com/media/FsURmoXakAEizoE.jpg:large')" }}
        >
            <div className="bg-white shadow-2xl rounded-lg p-8 w-72 max-w-md">
                <h2 className="text-xl font-bold text-center text-gray-800 mb-8">
                    ลงทะเบียน
                </h2>
                <input
                    type="text"
                    placeholder="Username"
                    id="username"
                    onChange={handleChange}
                    value={credentials.username}
                    className="w-full p-4 mb-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    onChange={handleChange}
                    value={credentials.email}
                    className="w-full p-4 mb-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    onChange={handleChange}
                    value={credentials.password}
                    className="w-full p-4 mb-6 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  id="CheckPassword"
                  onChange={handleChange}
                  value={credentials.CheckPassword}
                  className="w-full p-4 mb-6 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    // disabled={loading}
                    onClick={handleClick}
                    className={`w-full py-3 text-lg font-semibold tracking-wide text-white rounded-lg shadow-xl transition duration-300 ${
                        loading
                            ? "bg-[#2596be] cursor-not-allowed"
                            : "bg-[#2596be] focus:ring-4"
                    }`}
                >ลงทะเบียน</button>
                <div className="login-link flex justify-center mt-6 space-x-2 text-gray-600">
                    <span>มีบัญชีอยู่แล้ว?</span>
                    <button onClick={() => navigate("/")} className="text-[#2596be] hover:text-[#76b9cc] font-semibold">
                        เข้าสู่ระบบ
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

export default Register;


// import React from "react";
// import { useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';
// import { useNavigate } from "react-router-dom";
// import { api } from "../../App";
// import { FaUser, FaLock } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import "../register/register.css";
// import 'react-toastify/dist/ReactToastify.css';

// export default function Register() {
//   const navigate = useNavigate();
//   const [data, setData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     CheckPassword: "",
//   });
//   const [dataLogin, setDataLogin] = useState({
//     username: "",
//     password: "",
//   });
//   const [isLogin, setIsLogin] = useState(false);

//   const registerUser = async (e) => {
//     e.preventDefault();
//     console.log("Hello");
//     const { username, email, password, CheckPassword } = data;
//     try {
//       const { data } = await axios.post(`${api}/api/auth/register`, {
//         username,
//         email,
//         password,
//         CheckPassword
//       });
//       console.log({CheckPassword, password})
//       if (data.error) {
//         toast.warn(data.error);
//       } else {
//         setData({});
//         navigate("/home");
//       }
//     } catch (error) {}
//   };

//   const loginUser = async (e) =>{
//     e.preventDefault()
//     const {username, password} = dataLogin
//     console.log({username,password})
//     try {
//       const response = await axios.post(`${api}/api/auth/login`, {
//         username,
//         password
//       })
//       const data = response.data;
//       if (data.error) {
//         toast.warn(data.error);
//       } else {
//         setDataLogin({});
//         // toast.success("Login Successful");
//         navigate("/home");

//       }
//     }
//     catch (error) {
      
//     }
//   }

//   const handleSubmit = (e) => {
//     if (isLogin) {
//       loginUser(e);
//     } else {
//       registerUser(e);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen px-4 py-6 wrapper flex-col">
//       <ToastContainer />
//       <div className="form-box">
//         <form onSubmit={handleSubmit} method="post">
//           <h1>{isLogin ? "เข้าสู่ระบบ" : "ลงทะเบียน"}</h1>
//           {!isLogin && (
//             <div className="input-box">
//               <div className="input-group">
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   value={data.email}
//                   onChange={(e) => setData({ ...data, email: e.target.value })}
//                 />
//                 <MdEmail />
//               </div>
//             </div>
//           )}
//           <div className="input-box">
//             <div className="input-group">
//               <input
//                 type="text"
//                 placeholder="Username"
//                 value={isLogin ? dataLogin.username : data.username}
//                 onChange={(e) => 
//                   isLogin 
//                     ? setDataLogin({ ...dataLogin, username: e.target.value })
//                     : setData({ ...data, username: e.target.value })
//                 }
//               />
//               <FaUser />
//             </div>
//           </div>
//           <div className="input-box">
//             <div className="input-group">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={isLogin ? dataLogin.password : data.password}
//                 onChange={(e) => 
//                   isLogin 
//                     ? setDataLogin({ ...dataLogin, password: e.target.value })
//                     : setData({ ...data, password: e.target.value })
//                 }
//               />
//               <FaLock />
//             </div>
//           </div>
//           {!isLogin && (
//             <div className="input-box">
//               <div className="input-group">
//                 <input
//                   type="password"
//                   placeholder="Confirm Password"
//                   value={data.CheckPassword}
//                   onChange={(e) => setData({ ...data, CheckPassword: e.target.value })}
//                 />
//                 <FaLock />
//               </div>
//             </div>
//           )}
//           <button type="submit" className="w-full px-4 py-3 text-sm tracking-wide text-white bg-yellow-500 rounded-lg shadow-xl hover:bg-yellow-600 focus:outline-none">
//             ยืนยัน
//           </button>
//           <div className="register-link" onClick={() => setIsLogin(!isLogin)}>
//             <p>
//               {isLogin ? "ไม่มีบัญชี? " : "มีบัญชีแล้ว? "}
//               <a href="#">{isLogin ? "ลงทะเบียน" : "เข้าสู่ระบบ"}</a>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
