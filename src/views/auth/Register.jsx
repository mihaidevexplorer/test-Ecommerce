//Register.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const Register = () => {
  const [state, setState] = useState({
    name: "",
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
    <div className="min-w-screen min-h-screen bg-white flex justify-center items-center">
      <div className="w-[350px] text-black p-4">
        <div className="bg-gray-100 p-6 rounded-md shadow-md">
          <h2 className="text-2xl mb-3 font-bold text-gray-900">Welcome to Ecommerce</h2>
          <p className="text-sm mb-3 font-medium text-gray-600">Please register your account</p>

          <form onSubmit={submit}>
            <div className="flex flex-col w-full gap-2 mb-4">
              <label htmlFor="name" className="text-gray-700">Name</label>
              <input
                onChange={inputHandle}
                value={state.name}
                className="px-3 py-2 outline-none border border-gray-300 bg-white rounded-md focus:border-blue-500"
                type="text"
                name="name"
                placeholder="Name"
                id="name"
                required
              />
            </div>

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

            <div className="flex items-center w-full gap-3 mb-4">
              <input
                className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-blue-500"
                type="checkbox"
                name="checkbox"
                id="checkbox"
                required
              />
              <label htmlFor="checkbox" className="text-gray-700">I agree to the privacy policy & terms</label>
            </div>

            <button className="bg-blue-700 w-full hover:bg-blue-800 text-white rounded-md px-4 py-2 mb-4">Sign Up</button>

            <div className="flex items-center mb-4 gap-3 justify-center">
              <p>Already have an account? <Link className="font-bold text-blue-700 hover:underline" to="/login">Sign In</Link></p>
            </div>

            <div className="w-full flex justify-center items-center mb-4">
              <div className="w-[45%] bg-gray-300 h-[1px]"></div>
              <div className="w-[10%] flex justify-center items-center">
                <span className="pb-1 text-gray-500">Or</span>
              </div>
              <div className="w-[45%] bg-gray-300 h-[1px]"></div>
            </div>

            <div className="flex justify-center items-center gap-4">
              <div className="w-[135px] h-[40px] flex rounded-md bg-orange-700 shadow-md hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden">
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

export default Register;
