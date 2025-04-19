import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";
import { NavLink } from "react-router-dom";

function SignupForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { mutate, isLoading } = useSignup();
  const { errors } = formState;

  const inputStyle = `py-3 px-3 outline-none border-[1px] rounded-lg ${
    errors?.[name] ? "border-red-500" : "border-gray-700"
  }`;

  const errorStyle = "text-red-500 text-sm mt-1";

  const onSubmit = ({ email, password }) => {
    mutate({ email, password });
    reset();
  };

  const onError = (error) => {
    console.log(error);
  };

  return (
    <form
      className="flex flex-col gap-5 sm:w-[45wh]"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <div className="flex flex-col">
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          {...register("firstName", {
            required: "This field is required",
          })}
          className={inputStyle}
        />
        {errors?.firstName && (
          <p className={errorStyle}>{errors.firstName.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          {...register("lastName", { required: "This field is required" })}
          className={inputStyle}
        />
        {errors?.lastName && (
          <p className={errorStyle}>{errors.lastName.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <input
          type="email"
          id="email"
          placeholder="Email"
          {...register("email", { required: "This field is required" })}
          className={inputStyle}
        />
        {errors?.email && <p className={errorStyle}>{errors.email.message}</p>}
      </div>

      <div className="flex flex-col">
        <input
          type="password"
          id="password"
          placeholder="Password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "The password must be at least 8 characters",
            },
          })}
          className={inputStyle}
        />
        {errors?.password && (
          <p className={errorStyle}>{errors.password.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password"
          {...register("confirmPassword", {
            required: "This field is required",
            validate: (value) =>
              value === getValues("password") || "Passwords do not match",
          })}
          className={inputStyle}
        />
        {errors?.confirmPassword && (
          <p className={errorStyle}>{errors.confirmPassword.message}</p>
        )}
      </div>

      <button
        disabled={isLoading}
        className="bg-blue-500 hover:bg-blue-700 text-white py-3 rounded-lg w-full"
      >
        Sign Up
      </button>

      <div className="flex items-center justify-center mt-4">
        <p>Already have an account?</p>
        <NavLink to="/login" className="text-blue-500 hover:underline">
          Sign In
        </NavLink>
      </div>
    </form>
  );
}

export default SignupForm;
