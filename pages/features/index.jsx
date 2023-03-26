"use client";
import ChatBox from "components/ChatBox";
import { useEffect, useState } from "react";
import { getLocalStorageItem } from "utils/common";
import { OPTION_KEY } from "utils/constants";

// const right = Righteous({
//   weight: "400",
//   style: ["normal"],
//   subsets: ["latin"],
// });

const MainPage = () => {
  const option = getLocalStorageItem(OPTION_KEY);
  const [feature, setFeature] = useState();
  useEffect(() => {
    setFeature(option.value);
  }, [option]);
  return (
    <div
      className={`header-text-container flex flex-col justify-center mt-20 p-2 text-sm`}
    >
      <h1 className="text-3xl font-bold text-center text-white">
        <span className="font-bold feature">{feature?.toUpperCase()}</span>
      </h1>
      <ChatBox option={option} />
    </div>
  );
};

export default MainPage;
