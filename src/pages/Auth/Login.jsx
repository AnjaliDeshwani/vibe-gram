import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center gap-4 sm:py-12">
      <div className="mt-4 p-2 font-bold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400 -tracking-wide italic">
        Vibegram
      </div>
      <div className="mx-auto text-center sm:max-w-xl sm:w-full">
        <span className="text-2xl font-light">Login to your Account</span>
        <div className="mt-4 bg-white shadow-md rounded-lg text-left">
          <div className="h-2 bg-sky-400 rounded-t-md"></div>
          <form className="py-6 px-8">
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-sky-600 rounded-md"
            />
            <label className="block mt-3 font-semibold">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-sky-600 rounded-md"
            />
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:items-baseline">
              <button
                type="submit"
                className="mt-4 bg-sky-500 py-2 px-6 rounded-md hover:bg-sky-600 font-semibold"
              >
                Login
              </button>
              <Link to="/signup" className="text-sm hover:underline">
                Need an account? Sign Up
              </Link>
            </div>
            <button
              type="submit"
              className="flex mt-4 mx-auto border-sky-500 border-2 py-2 px-6 rounded-md hover: bg-gradient-to-r hover:from-sky-500 hover:to-cyan-400 font-semibold"
            >
              Login with Test Credentials
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
