import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {useState} from "react";
import { toast } from "react-toastify";
function Login() {
  const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  function login(){
    // api call to login
    if (isButtonClicked)
      { 
        toast.error("Button clicked multiple times");
       return;
       } // If the button has already been clicked, do nothing
    setIsButtonClicked(true); 
    fetch("http://localhost:8000/api/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
        })
        
        .then(response => response.json())
        .then(data => {
          if(data.token)
          {
            localStorage.setItem("token",data.token);
            localStorage.setItem("id",data.uid)
            navigate("/");
            toast.success('Logged in')
          }
          else{
            toast.error('Invalid Credentials')
          }
        })
        .catch(error => console.error(error))
        .finally(() => {
          setIsButtonClicked(false); // Reset the state after the API call is complete
        });
    }
  
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="bg-white shadow-xl border p-4 w-[26%] rounded-md">
        <div className="text-lg font-bold">Login to your account</div>

        <div className="text-sm mt-3 mb-1">Email address</div>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          className="w-full border p-2 rounded"
          placeholder="Email address here"
        />

        <div className="text-sm mt-3 mb-1">Password</div>
        <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="w-full border p-2 rounded"
          placeholder="Password here"
        />

        <button onClick={()=>login()} className="w-full bg-black text-white mt-3 p-2 rounded text-sm">
          Login
        </button>
        {/* Link is responsible for making SPA framework  */}
        <Link to="/register">
          <div className="text-center text-sm mt-4 underline">
            I don't have an account
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Login;