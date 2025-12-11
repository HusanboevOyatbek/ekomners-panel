import React from 'react'
import { useNavigate } from 'react-router-dom';

function LoginPage({ setIsAuth }) {

    const navigate = useNavigate();

    const submit = (e) =>{
        e.preventDefault();
        if(e.target[0].value === "+998970215191" && e.target[1].value === "1234567"){
            setIsAuth(true);
            localStorage.setItem("auth", true);
            navigate("/contact");
        }
    }


  return (
      <div className="min-h-screen  flex items-center justify-center p-4" style={{ backgroundImage: "url('/imgs/login-bg.png')" }}>
          <div className="bg-white/20 backdrop-blur-md p-8 rounded-xl shadow-xl w-[350px]">
              <h2 className="text-2xl font-bold text-center mb-6 text-white tracking-wide">
                  Login
              </h2>


              <form onSubmit={submit} className="space-y-5">
                  <div>
                      <label
                          htmlFor="tel"
                          className="block mb-2 text-sm font-medium text-white"
                      >
                          Tel
                      </label>
                      <input
                          type="tel"
                          id="tel"
                          className="bg-gray-100 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full px-3 py-2 shadow-sm placeholder:text-gray-500"
                          placeholder="telfon raqamingzni kiriting"
                          required
                      />
                  </div>


                  <div>
                      <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-white"
                      >
                          Parol
                      </label>
                      <input
                          type="password"
                          id="password"
                          className="bg-gray-100 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full px-3 py-2 shadow-sm placeholder:text-gray-500"
                          placeholder="••••••••"
                          required
                      />
                  </div>


                  


                  <button
                      type="submit"
                      className="w-full text-white bg-[#4a2f21] cursor-pointer hover:bg-amber-700 focus:ring-4 focus:ring-amber-300 shadow-md font-medium leading-5 rounded-lg text-sm px-4 py-2"
                  >
                      Kirish
                  </button>
              </form>
          </div>
      </div>
      )
}

export default LoginPage