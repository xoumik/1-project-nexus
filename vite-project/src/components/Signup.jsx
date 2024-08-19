import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md border-2 border-gradient-to-r from-green-400 via-blue-500 to-purple-600">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Sign Up
        </h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 mb-2 font-semibold"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 mb-2 font-semibold"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 mb-2 font-semibold"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="submit"
          >
            Sign Up
          </button>
          <div className="mt-4 text-center">
            <p className="text-gray-700 font-semibold">
              Already have an account?
            </p>
            <Link
              to="/"
              className="text-blue-500 hover:underline font-bold no-underline"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
