import { useState } from "react";
import useLogin from "./useLogin";
import MiniSpinner from "../../Components/MiniSpinner";
import { NavLink } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: login, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  const handleDemoAccount = () => {
    setEmail("user@example.com");
    setPassword("123456789");
  };

  return (
    <form
      className="sm:w-1/2 flex flex-col gap-6 justify-center p-5"
      onSubmit={handleSubmit}
    >
      <h2 className="font-bold text-2xl">Welcome</h2>
      <p>Log into your account to order food</p>

      <label>Email</label>
      <input
        type="email"
        className="border-gray-400 border-[1px] p-2 rounded-xl outline-none"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label>Password</label>
      <input
        type="password"
        className="border-gray-400 border-[1px] p-2 rounded-xl outline-none"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button
        disabled={isPending}
        className="bg-blue-500 hover:bg-blue-700 text-white py-3 rounded-lg w-full disabled:opacity-50"
      >
        {isPending ? <MiniSpinner /> : "Login"}
      </button>

      <button
        type="button"
        onClick={handleDemoAccount}
        disabled={isPending}
        className="border border-blue-500 text-blue-500 hover:bg-blue-50 py-3 rounded-lg w-full transition-colors disabled:opacity-50"
      >
        Use Demo Account
      </button>

      <div className="w-full flex items-center justify-center">
        <p>Don&rsquo;t have an account?</p>
        <NavLink to="/signup" className="text-blue-700 underline">
          Sign Up
        </NavLink>
      </div>
    </form>
  );
}

export default LoginForm;
