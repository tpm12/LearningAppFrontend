import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const createAccount = () => {
    console.log("account created");
    navigate("/dashboard");
  };

  const [isAlreadySignedUp, setIsAlreadySignedUp] = useState(false);

  return (
    <div className="LoginContainer flex h-screen m-auto items-center justify-center text-white">
      <div className="LoginForm flex flex-col rounded-full p-10 bg-[#6B31E3] w-9/12 m-auto items-center rounded-lg h-3/4 text-center">
        <div className="text-5xl font-bold ">
          {isAlreadySignedUp ? "Login" : "Create Account"}
        </div>
        <button className="m-8">
          {isAlreadySignedUp ? (
            <Button buttonText="Sign in with google" />
          ) : (
            <Button buttonText="Sign up with google" />
          )}
        </button>
        <div className="text-xl ">- OR -</div>
        <form className="flex flex-col m-5 w-1/2 h-3/4">
          <Input type="text" placeholder="Username" />
          <Input type="email" placeholder="Email" />
          <Input type="text" placeholder="Password" />
          {!isAlreadySignedUp && (
            <Input type="text" placeholder="Enter your name" />
          )}
          <div className="flex justify-center text-black">
            <Button buttonText={"Create Account"} onClick={createAccount} />
          </div>
        </form>
        <p>
          Already have an account?
          <a
            className="cursor-pointer"
            onClick={() => setIsAlreadySignedUp(!isAlreadySignedUp)}
          >
            {isAlreadySignedUp ? "Sign Up" : "Login"}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
