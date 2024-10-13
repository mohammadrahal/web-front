// src/pages/Login.tsx
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/api/login`,
        {
          email,
          password,
        }
      );

      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 3000,
      });

      // Navigate to home page on successful login
       setTimeout(() => {
        navigate('/');
      }, 3000); // Wait for 3 seconds

      console.log(response.data);
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Login failed", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <div>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border border-gray-300 rounded w-full p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border border-gray-300 rounded w-full p-2"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors w-full ${
                loading && "opacity-50"
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
        <div className="mt-4 text-center">
          <p className="text-gray-700">
            Don't have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Register
            </span>
          </p>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
