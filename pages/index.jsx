"use client";
import Head from "next/head";
import ChatBox from "components/ChatBox";
import { useEffect, useState } from "react";
import { getLocalStorageItem } from "utils/common";
import { USER_KEY } from "utils/constants";
import { useRouter } from "next/router";
import FeatureCard from "components/FeatureCard";
import { Righteous } from "next/font/google";

const right = Righteous({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
});

const options = [
  {
    value: "Assistant",
    label: "General Assistant",
    description:
      "MindMate will answer your questions and be amazed by how powerful it is.",
    link: "assistant",
  },
  {
    value: "Smart Recruiter",
    label: "Smart Recruiter",
    description:
      "Let the Smart Recruiter review your resume and see the results.",
    link: "smart-recruiter",
  },
  {
    value: "Twitter Savvy",
    label: "Twitter Savvy",
    description: "Generate a tweet for your favorite application, Twitter!",
    link: "tweets",
  },
];

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const user = getLocalStorageItem(USER_KEY);
    if (!user) {
      router.push("/login");
    }
  }, []);

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
      <p className={`${right.className} text-center text-bold  mt-10 text-4xl`}>
        FEATURES
      </p>

      <div className="flex flex-col flex-wrap items-center flex-wrap p-5">
        {options.map((option, index) => {
          return <FeatureCard option={option} />;
        })}
      </div>
    </div>
  );
}
