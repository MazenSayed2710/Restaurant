import SignupForm from "./SignupForm";

function SignupPage() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-sky-500">
      <div className="p-8 rounded-lg flex flex-col items-center gap-6 shadow-lg bg-white">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Sign Up</h1>
        <SignupForm />
      </div>
    </div>
  );
}

export default SignupPage;
