import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex items-center justify-center text-2xl font-bold text-red-500 bg-fuchsia-100">
      <div className="bg-gray-100 p-14 rounded-3xl text-center">
        <p>The page you are looking for could not be found 😢</p>
        <button
          onClick={() => navigate(-1)}
          className="text-white bg-red-500 px-4 py-2 rounded-md mt-5 text-base"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage;
