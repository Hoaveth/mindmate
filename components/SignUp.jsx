import { useState, useRef, useEffect } from "react";
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import Link from "next/link";
import { useRouter } from "next/router";
import { createUser } from "lib/auth";

function SignUpPage() {
  const router = useRouter();

  const displayNameRef = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    displayNameRef.current.focus();
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Create a new user with email and password
    const user = await createUser(displayName, email, password);
    if (user?.message) {
      setError(user.message);
      return;
    }
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <form
        className="bg-white p-6 rounded-lg shadow-lg auth-form text-slate-800 animate__animated animate__fadeInUp animate__faster"
        onSubmit={handleSignUp}
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
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="displayName"
          >
            Display Name
          </label>
          <input
            ref={displayNameRef}
            className="bg-transparent border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="displayName"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="John Doe"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="bg-transparent border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john.doe@example.com"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="bg-transparent border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
          />
        </div>
        <button
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign Up
        </button>
        <p className="text-gray-600 mt-4 text-sm">
          Have an existing account?
          <Link href="/login">
            {" "}
            <u>Login here. </u>
          </Link>
        </p>
        <p className="text-red-600 mt-2 text-sm">{error}</p>
      </form>
    </div>
  );
}

export default SignUpPage;
