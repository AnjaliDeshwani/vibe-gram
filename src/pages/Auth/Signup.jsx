import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../reducers/authSlice";
import { Loader } from "../../components";
import { useShowPassword } from "../../hooks/useShowPassword";

export const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, authStatus, signupError } = useSelector((state) => state.auth);
  const { showPass, togglePassword } = useShowPassword();
  const [signUpForm, setSignUpForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const { firstName, lastName, email, username, password } = signUpForm;

  const [formErrors, setFormErrors] = useState({
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    usernameError: "",
    passwordError: "",
  });

  const formChangeHandler = (e) => {
    setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
  };

  const authValidation = () => {
    if (firstName === "" || !/^[a-zA-Z]+$/.test(firstName)) {
      formErrors.firstNameError = "Invalid firstname";
    }
    if (lastName === "" || !/^[a-zA-Z]+$/.test(lastName)) {
      formErrors.lastNameError = "Invalid lastname";
    }
    if (email === "" || !/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)) {
      formErrors.emailError = "invalid email";
    }
    if (username === "" || !/^[a-zA-Z0-9_.]+$/.test(username)) {
      formErrors.usernameError =
        "Invalid username: username can have only letters, numbers, _ and .";
    }
    if (password === "" || !/^(?=.*\d).{8,}$/.test(password)) {
      formErrors.passwordError =
        "Password should be atleast 8 characters in length";
    }
    if (Object.values(formErrors).some((x) => x !== "")) {
      return false;
    }
    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // if (!authValidation()) {
    //   setFormErrors(formErrors);
    // } else
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
                  className="border w-full h-5 px-3 py-5 mt-1 hover:outline-none focus:outline-none focus:ring-1 focus:ring-sky-600 rounded-md"
                  name="firstName"
                  value={signUpForm.firstName}
                  onChange={formChangeHandler}
                  required
                />
                {formErrors.firstNameError.length > 0 && (
                  <div className="my-1 text-red-600 font-medium">
                    {formErrors.firstNameError}
                  </div>
                )}
                <label className="block font-semibold mt-4">
                  Enter Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border w-full h-5 px-3 py-5 mt-1 hover:outline-none focus:outline-none focus:ring-1 focus:ring-sky-600 rounded-md"
                  name="lastName"
                  value={signUpForm.lastName}
                  onChange={formChangeHandler}
                  required
                />
                {formErrors.lastNameError.length > 0 && (
                  <div className="my-1 text-red-600 font-medium">
                    {formErrors.lastNameError}
                  </div>
                )}
                <label className="block font-semibold mt-4">Enter Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="border w-full h-5 px-3 py-5 mt-1 hover:outline-none focus:outline-none focus:ring-1 focus:ring-sky-600 rounded-md"
                  name="email"
                  value={signUpForm.email}
                  onChange={formChangeHandler}
                  required
                />
                {formErrors.emailError.length > 0 && (
                  <div className="my-1 text-red-600 font-medium">
                    {formErrors.emailError}
                  </div>
                )}
                <label className="block font-semibold mt-4">
                  Enter Username
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  className="border w-full h-5 px-3 py-5 mt-1 hover:outline-none focus:outline-none focus:ring-1 focus:ring-sky-600 rounded-md"
                  name="username"
                  value={signUpForm.username}
                  onChange={formChangeHandler}
                  required
                />
                {formErrors.usernameError.length > 0 && (
                  <div className="my-1 text-red-600 font-medium">
                    {formErrors.usernameError}
                  </div>
                )}
                <label className="block font-semibold mt-4">
                  Enter Password
                </label>
                <div className="relative flex items-center mt-1">
                  <input
                    type={`${showPass ? "text" : "password"}`}
                    placeholder="Password"
                    className="border w-full h-5 px-3 py-5 hover:outline-none focus:outline-none focus:ring-1 focus:ring-sky-600 rounded-md"
                    name="password"
                    value={signUpForm.password}
                    onChange={formChangeHandler}
                    required
                  />
                  <span
                    className="absolute right-3 cursor-pointer"
                    onClick={togglePassword}
                  >
                    <i
                      className={`fa-solid ${
                        showPass ? "fa-eye " : "fa-eye-slash"
                      }`}
                    ></i>
                  </span>
                </div>
                {formErrors.passwordError.length > 0 && (
                  <div className="my-1 text-red-600 font-medium">
                    {formErrors.passwordError}
                  </div>
                )}
                {signupError?.length > 0 && (
                  <div className="mt-4 text-center text-red-600 font-medium">
                    {signupError}
                  </div>
                )}
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
