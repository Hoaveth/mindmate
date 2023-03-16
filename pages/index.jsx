"use client";

import Head from "next/head";
import { Righteous } from "next/font/google";
import ChatBox from "components/ChatBox";
import { useState } from "react";

const roboto = Righteous({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
});

const options = [
  {
    value: "Assistant",
    label: "General Assistant",
    instruction:
      "Give the MindMate assistant any task or question that you have.",
  },
  {
    value: "Smart Recruiter",
    label: "Smart Recruiter",
    instruction: "Paste your whole resume in the text box.",
  },
  {
    value: "Twitter Savvy",
    label: "Twitter Savvy",
    instruction:
      "Give the assistant any topic you want and tell it to generate a tweet for you.",
  },
];

export default function Home() {
  const [assistant, setAssistant] = useState();
  return (
    <div>
      <Head>
        <title>MindMate</title>
        <meta
          name="description"
          content="MindMate is an AI assistant built for you. It can generate a tweet for you, review your resume or help you study. This is created on top of OpenAI's API."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mind.svg" />
      </Head>
      <div
        className={`${roboto.className} header-text-container flex justify-center mt-20 p-5 text-sm`}
      >
        <h1
          className={
            "header-text text-center text-6xl font-bold text-white-700/75"
          }
        >
          USE ME AS A
        </h1>
        <div className="dropdown ml-8 relative inline-block">
          <select
            className=" block appearance-none w-full bg-gray-300 border border-gray-200 text-gray-700 mt-2 mr-1 ml-1 py-3 px-6 pr-15 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            onChange={(e) => setAssistant(e.target.value)}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 fill-current text-gray-800 ml-10  mr-1 "
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </div>
        </div>
      </div>
      <ChatBox assistant={assistant} options={options} />
    </div>
  );
}
