"use client";
import Head from "next/head";
import FeatureCard from "components/FeatureCard";

const options = [
  {
    value: "Assistant",
    label: "General Assistant",
    description:
      "MindMate will answer your questions and be amazed by how powerful it is.",
    link: "assistant",
    img: "assistant",
  },
  {
    value: "Smart Recruiter",
    label: "Smart Recruiter",
    description:
      "Let the Smart Recruiter review your resume and see the results.",
    link: "smart-recruiter",
    img: "smart-recruiter",
  },
  {
    value: "Twitter Savvy",
    label: "Twitter Savvy",
    description: "Generate a tweet for your favorite application, Twitter!",
    link: "tweets",
    img: "twitter",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>MindMate</title>
        <meta
          name="description"
          content="MindMate is an AI assistant built for you. It can generate a tweet for you, review your resume or help you study. This is created on top of OpenAI's API."
        />
        <meta property="og:title" content="MindMate" key="title" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mind.svg" type="image/x-icon" />
      </Head>
      <p className={`feature text-center text-bold  mt-10 text-4xl text-white`}>
        FEATURES
      </p>

      <div className="flex flex-col flex-wrap items-center p-5">
        {options.map((option, index) => {
          return <FeatureCard key={index} option={option} />;
        })}
      </div>
    </div>
  );
}
