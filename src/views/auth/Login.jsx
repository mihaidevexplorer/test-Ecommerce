//Login.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className="min-w-screen min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-[350px] text-black p-2">
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl mb-3 font-bold text-gray-900">Welcome to Ecommerce</h2>
          <p className="text-sm mb-3 font-medium text-gray-600">Please sign in to your account</p>

          <form onSubmit={submit}>
            <div className="flex flex-col w-full gap-2 mb-4">
              <label htmlFor="email" className="text-gray-700">Email</label>
              <input
                onChange={inputHandle}
                value={state.email}
                className="px-3 py-2 outline-none border border-gray-300 bg-white rounded-md focus:border-blue-500"
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                required
              />
            </div>

            <div className="flex flex-col w-full gap-2 mb-4">
              <label htmlFor="password" className="text-gray-700">Password</label>
              <input
                onChange={inputHandle}
                value={state.password}
                className="px-3 py-2 outline-none border border-gray-300 bg-white rounded-md focus:border-blue-500"
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                required
              />
            </div>

            <button className="bg-blue-700 w-full hover:bg-blue-800 text-white rounded-md px-4 py-2 mb-4">Sign In</button>

            <div className="flex items-center mb-4 gap-3 justify-center">
              <p>Don&apos;t have an account? <Link className="font-bold text-blue-700 hover:underline" to="/register">Sign Up</Link></p>
            </div>

            <div className="w-full flex justify-center items-center mb-4">
              <div className="w-[45%] bg-gray-300 h-[1px]"></div>
              <div className="w-[10%] flex justify-center items-center">
                <span className="pb-1 text-gray-500">Or</span>
              </div>
              <div className="w-[45%] bg-gray-300 h-[1px]"></div>
            </div>

            <div className="flex justify-center items-center gap-4">
              <div className="w-[135px] h-[40px] flex rounded-md bg-red-600 shadow-md hover:shadow-red-600/50 justify-center cursor-pointer items-center overflow-hidden">
                <span className="text-white"><FaGoogle /></span>
              </div>

              <div className="w-[135px] h-[40px] flex rounded-md bg-blue-800 shadow-md hover:shadow-blue-800/50 justify-center cursor-pointer items-center overflow-hidden">
                <span className="text-white"><FaFacebook /></span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
