import React from "react";

const LogoutButton = ({ signOut }) => {
  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => signOut()}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
