import ChatBox from "components/ChatBox";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Righteous } from "next/font/google";
import { getLocalStorageItem } from "utils/common";
import { OPTION_KEY } from "utils/constants";

const right = Righteous({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
});

const MainPage = () => {
  const router = useRouter();
  const option = getLocalStorageItem(OPTION_KEY);
  const [role, setRole] = useState();

  useEffect(() => {
    setRole(router.asPath.split("/").pop());
  }, []);
  return (
    <div
      className={`${right.className} header-text-container flex flex-col justify-center mt-20 p-2 text-sm`}
    >
      <h1 className="text-3xl font-bold text-center">
        <span className="font-bold">{option.value}</span>
      </h1>
      <ChatBox role={role} option={option} />
    </div>
  );
};

export default MainPage;
