function CompletionCheckout() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <h1 className="font-bold text-5xl text-white mb-8">Thank You ! 🎉</h1>
      <div className="bg-white rounded-full p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-12 w-12 text-green-500"
        >
          <path
            fillRule="evenodd"
            d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 6a1 1 0 011-1h2a1 1 0 011 1v3.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L10 9.586V6z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

export default CompletionCheckout;
