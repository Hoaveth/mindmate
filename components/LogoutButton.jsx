import React from "react";

const LogoutButton = ({ signOut }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => signOut()}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
