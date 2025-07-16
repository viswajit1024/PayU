import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, {
        username,
        password
      });

      // store token and firstName in localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("firstName", response.data.firstName);

      // navigate to dashboard
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed: " + err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          
          <InputBox
            placeholder="Viswajit@gmail.com"
            label={"Email"}
            onChange={(e) => setUsername(e.target.value)}
          />

          <InputBox
            placeholder="123456"
            label={"Password"}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="pt-4">
            <Button label={"Sign in"} onClick={handleSignin} />
          </div>

          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};
