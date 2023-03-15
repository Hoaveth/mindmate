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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${roboto.className} flex justify-center mt-20 `}>
        <h1 className={"text-center text-6xl font-bold text-white-700/75"}>
          USE ME AS A
        </h1>
        <div className="ml-8">
          <select
            className="block appearance-none w-full bg-gray-300 border border-gray-200 text-gray-700 mt-2 py-3 px-4 pr-15 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            onChange={(e) => setAssistant(e.target.value)}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ChatBox assistant={assistant} options={options} />
    </div>
  );
}
