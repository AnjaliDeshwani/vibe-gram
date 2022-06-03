import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../reducers/authSlice";
import { Loader } from "../../components";

export const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, authStatus } = useSelector((state) => state.auth);
  const [signUpForm, setSignUpForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const formChangeHandler = (e) => {
    setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signupUser(signUpForm));
  };

  useEffect(() => {
    if (token)
      navigate(location?.state?.from.pathname || "/", { replace: true });
  });

  return (
    <>
      {authStatus === "loading" ? (
        <Loader />
      ) : (
        <div className="min-h-screen flex flex-col items-center gap-4 sm:py-12">
          <div className="mt-4 p-2 font-bold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400 italic">
            Vibegram
          </div>
          <div className="mx-auto text-center sm:max-w-xl sm:w-full">
            <span className="text-2xl font-light">Register your Account</span>
            <div className="mt-4 bg-white shadow-md rounded-lg text-left">
              <div className="h-2 bg-sky-400 rounded-t-md"></div>
              <form className="py-6 px-8" onSubmit={submitHandler}>
                <label className="block font-semibold">Enter First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-sky-600 rounded-md"
                  name="firstName"
                  value={signUpForm.firstName}
                  onChange={formChangeHandler}
                  required
                />
                <label className="block font-semibold">Enter Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-sky-600 rounded-md"
                  name="lastName"
                  value={signUpForm.lastName}
                  onChange={formChangeHandler}
                  required
                />
                <label className="block font-semibold">Enter Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-sky-600 rounded-md"
                  name="email"
                  value={signUpForm.email}
                  onChange={formChangeHandler}
                  required
                />
                <label className="block mt-3 font-semibold">
                  Enter Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-sky-600 rounded-md"
                  name="password"
                  value={signUpForm.password}
                  onChange={formChangeHandler}
                  required
                />
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:items-baseline">
                  <button
                    type="submit"
                    className="mt-4 bg-sky-500 py-2 px-6 rounded-md hover:bg-sky-600 font-semibold"
                  >
                    Signup
                  </button>
                  <Link to="/login" className="text-sm hover:underline">
                    Already have an account? Sign In
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
