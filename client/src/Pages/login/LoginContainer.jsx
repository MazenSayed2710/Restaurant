function LoginContainer({ children }) {
  return (
    <div className=" w-[100vw] flex items-center justify-center h-screen  bg-gradient-to-br from-indigo-500 to-sky-500">
      <div className="flex sm:flex-row flex-col shadow-2xl bg-white ">
        {children}
      </div>
    </div>
  );
}

export default LoginContainer;
