import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { AxiosInstace } from "../../libs/axios";
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await AxiosInstace.post("/Login", {
        username,
        password,
      });

      console.log(response);
      localStorage.setItem("token", response.data.token); // Simpan token

      if (typeof onLogin === "function") {
        onLogin(); // Panggil fungsi login dari props untuk mengubah status login
      } else {
        console.error("onLogin prop is not a function");
      }

      toast.success("Login berhasil!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "bg-zinc-900 text-white",
        bodyClassName: "flex items-center",
      });
    } catch (error) {
      toast.error("Username atau password salah.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "bg-zinc-900 text-zinc-100",
        bodyClassName: "flex items-center",
      });
      console.error(
        "Login failed:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl text-white font-semibold text-center mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <AiOutlineUser />
              </span>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="pl-10 py-2 w-full bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <FiLock />
              </span>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 py-2 w-full bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition duration-300">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

// PropTypes validation
Login.propTypes = {
  onLogin: PropTypes.func.isRequired, // Ensure onLogin is a required function
};

export default Login;
