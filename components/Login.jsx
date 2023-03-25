"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { setLocalStorageItem } from "utils/common";
import { USER_KEY } from "utils/constants";
import { loginUser } from "lib/auth";

function LoginPage() {
  const router = useRouter();

  const emailRef = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldError, setFieldError] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setFieldError({ email: "" });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setFieldError({ password: "" });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    //Todo: I think we should consider react hook form and yup
    if (email === "") {
      return setFieldError({ email: "Email is required" });
    }
    if (password === "") {
      return setFieldError({ password: "Password is required" });
    }

    setLoading(true);
    const login = await loginUser(email, password, setEmail);

    if (login.message) {
      setError("Invalid email or password");
      setLoading(false);
      return;
    }
    setLocalStorageItem(USER_KEY, login.user);
    setError("");
    router.push("/");
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <form
        className="bg-white p-6 rounded-lg shadow-lg auth-form text-slate-800"
        onSubmit={handleLogin}
      >
        <div className="flex justify-center">
          <Link href="/" className="flex justify-between">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="30"
                height="30"
                fill="gray"
              >
                <path d="M184 0C214.9 0 240 25.07 240 56V456C240 486.9 214.9 512 184 512C155.1 512 131.3 490.1 128.3 461.9C123.1 463.3 117.6 464 112 464C76.65 464 48 435.3 48 400C48 392.6 49.27 385.4 51.59 378.8C21.43 367.4 0 338.2 0 304C0 272.1 18.71 244.5 45.77 231.7C37.15 220.8 32 206.1 32 192C32 161.3 53.59 135.7 82.41 129.4C80.84 123.9 80 118 80 112C80 82.06 100.6 56.92 128.3 49.93C131.3 21.86 155.1 0 184 0zM383.7 49.93C411.4 56.92 432 82.06 432 112C432 118 431.2 123.9 429.6 129.4C458.4 135.7 480 161.3 480 192C480 206.1 474.9 220.8 466.2 231.7C493.3 244.5 512 272.1 512 304C512 338.2 490.6 367.4 460.4 378.8C462.7 385.4 464 392.6 464 400C464 435.3 435.3 464 400 464C394.4 464 388.9 463.3 383.7 461.9C380.7 490.1 356.9 512 328 512C297.1 512 272 486.9 272 456V56C272 25.07 297.1 0 328 0C356.9 0 380.7 21.86 383.7 49.93z" />
              </svg>
            </span>
            <span className="font-semibold text-xl tracking-tight ml-2 text-gray-700">
              MindMate
            </span>
          </Link>
        </div>

        <div className="mb-4 mt-5">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            ref={emailRef}
            className={`bg-transparent border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline ${
              fieldError.email && "border border-red-500"
            } `}
            type="email"
            id="email"
            value={email}
            onChange={handleInputChange}
          />
          <span className="text-red-500">{fieldError.email}</span>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className={`bg-transparent border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline  ${
              fieldError.password && "border border-red-500"
            }`}
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <span className="text-red-500">{fieldError.password}</span>
        </div>
        <button
          type="submit"
          className="relative inline-flex w-full items-center justify-center px-2 py-3 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm transition duration-150 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {loading ? (
            <span className="absolute inset-y-0  flex items-center justify-center mx-auto pl-3">
              <svg
                class="w-5 h-5 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm12 0a8 8 0 100-16v3a5 5 0 010 10v3l-2-1.5"
                ></path>
              </svg>
            </span>
          ) : (
            "Login"
          )}
        </button>
        <p className="text-gray-600 mt-4 text-sm">
          No Account?
          <Link href="/signup">
            {" "}
            <u>Sign up here. </u>
          </Link>
        </p>
        <p className="text-red-600 mt-2 text-sm">{error}</p>
      </form>
    </div>
  );
}

export default LoginPage;
