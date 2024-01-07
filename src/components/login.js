import React from "react";
import { navigate } from "gatsby";
import { handleLogin, isLoggedIn } from "../services/auth";
import Logo from "../components/NavBar/NavBarImages/Hardware_Logo.svg";
import { Link } from "gatsby";
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
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center lg:w-[40%] w-[75%] rounded shadow-md">
          <Link to="/app/HomePage" className="hover:cursor-pointer">
            <img
              src={Logo}
              alt="Logo"
              className="h-32 w-auto mb-1 mx-auto"
            />
          </Link>
          <form
            className="w-full flex justify-center flex-col mx-1"
            method="post"
            onSubmit={(event) => {
              this.handleSubmit(event);
            }}
          >
            <input
              className="border-b m-3 focus:outline-none w-[95%]"
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={this.handleUpdate}
            />

            <div className="relative">
              <input
                className="border-b m-3 focus:outline-none w-[95%]"
                placeholder="Password"
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

            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}

            <input
              className="border mx-auto bg-primary rounded w-[95%] text-white p-2 font-bold my-5 text-center hover:bg-blue-800 cursor-pointer transition duration-300"
              type="submit"
              value="Log In"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
