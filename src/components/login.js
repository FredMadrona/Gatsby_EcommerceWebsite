import React from "react";
import { navigate } from "gatsby";
import { handleLogin, isLoggedIn } from "../services/auth";
import { StaticImage } from "gatsby-plugin-image";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

// import Logo from "../components/NavBar/NavBarImages/Hardware_Logo.svg";
// import { Link } from "gatsby";
import { FaEye, FaEyeSlash } from "react-icons/fa";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    showPassword: false,
    error: null, // Added error state
  };

  handleUpdate = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      error: null, // Reset error when the user starts typing again
    });
  };

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const loginSuccess = await handleLogin(this.state);

      if (loginSuccess) {
        navigate(`/app/HomePage`);
      } else {
        this.setState({ error: "Incorrect username or password" });
      }
    } catch (error) {
      this.setState({ error: "An error occurred during login" });
    }
  };

  render() {
    if (isLoggedIn()) {
      navigate(`/app/HomePage`);
    }

    const { username, password, showPassword, error } = this.state;

    return (
      <div>
        <div className="grid grid-cols-12 ">
          <div className="md:col-span-5 lg:col-span-4 col-span-12 justify-center border h-screen flex-col p-5 ">
            <div className="flex-col justify-center align-center w-full mb-5 p-3">
              <StaticImage
                src="../components/NavBar/NavBarImages/Hardware_Logo.svg"
                className="w-[50%]  text-center ml-[25%] mb-5"
              />
              <p className="font-semibold mb-1 text-md text-center">
                {" "}
                Welcome Back !
              </p>
              <p className="text-center text-sm text-grey">
                Sign in to continue to HardwaresPH
              </p>
            </div>
            {/* form */}
            <div className="p-5 mt-5">
              <form
                className="w-full flex justify-center flex-col gap-3 mx-1"
                method="post"
                onSubmit={(event) => {
                  this.handleSubmit(event);
                }}
              >
                <div className="flex-col ">
                  <div className="flex justify-between text-sm text-gray-700 font-semibold mx-4">
                    <span> Username </span>
                  </div>
                  <div className="relative">
                    <input
                      className="border p-1 pl-3 mx-3 my-1 rounded bg-gray-100 focus:outline-none w-[95%]"
                      type="text"
                      placeholder="Username"
                      name="username"
                      value={username}
                      onChange={this.handleUpdate}
                    />
                  </div>
                </div>

                <div className="flex-col ">
                  <div className="flex justify-between text-sm text-gray-700 font-semibold mx-4">
                    <span> Password </span>
                    <span className="hover:text-gray-900 cursor-pointer">
                      {" "}
                      Forgot Password
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      className="border p-1 pl-3 mx-3 my-1 rounded bg-gray-100 focus:outline-none w-[95%]"
                      placeholder="Enter password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={password}
                      onChange={this.handleUpdate}
                    />
                    <button
                      type="button"
                      onClick={this.togglePasswordVisibility}
                      className="absolute top-1/2 right-5 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
                <div className="flex w-full  align-center gap-1 px-3 ml-1">
                  <input type="checkbox" className="rounded cursor-pointer" />{" "}
                  <span className="text-gray-500 mb-1 text-sm cursor-pointer hover:text-primary">
                    {" "}
                    Remember me{" "}
                  </span>
                </div>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                <input
                  className="border mx-auto bg-primary rounded w-[95%] text-white p-2 font-bold mb-5 text-center cursor-pointer hover:bg-blue-800 ease-linear transition-all duration-300"
                  type="submit"
                  value="Log In"
                />
              </form>
            </div>
            <div className="w-full flex-col justify-center align-center mb-5">
              <p className="text-gray-700 text-center font-semibold text-md hover:text-primary cursor-pointer ease-linear transition-all duration-300 ">
                {" "}
                - Sign in with -{" "}
              </p>
              <div className="flex justify-center gap-5 mt-4 align-center">
                <FaFacebook className="cursor-pointer hover:text-primary w-5 h-5 " />
                <FaXTwitter className="cursor-pointer hover:text-primary w-5 h-5 " />
                <FaGoogle className="cursor-pointer hover:text-primary w-5 h-5 " />
              </div>
            </div>

            <div className="flex w-full justify-center mt-10 align-middle">
              <p className="text-xs text-gray-400">Don't have an account ?</p>{" "}
              <span className="text-xs text-primary font-bold ml-1 cursor-pointer hover:underline">
                Sign up now
              </span>
            </div>
            <div className="w-full justify-center text-center text-gray-400 mt-5">
              {" "}
              <p className="text-xs"> &copy; 2024 HardwaresPH </p>{" "}
            </div>
          </div>
          <div className="md:col-span-8   bg-primary w-full"></div>
        </div>
      </div>
    );
  }
}

export default Login;
