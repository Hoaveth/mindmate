"use client"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { setLocalStorageItem } from "utils/common"
import { OPTION_KEY } from "utils/constants"

const FeatureCard = ({ index, option }) => (
  <Link
    href={`/features/`}
    onClick={() => setLocalStorageItem(OPTION_KEY, option)}
  >
    <div
      id={`${
        option.img === "smart-recruiter"
          ? "smart-recruiter-card"
          : option.img === "twitter"
          ? "twitter-card"
          : "assist-card"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
      className={`p-6 bg-white rounded-lg flex lg:w-96 sm:w-60 mt-5 align-center cursor-pointer border-solid border-2 border-white transition duration-200 ease-in-out animate__animated animate__fadeInUp animate__faster`}
    >
      <div className="mb-5">
        <Image
          width={70}
          height={70}
          alt={option.value}
          src={
            option.img === "smart-recruiter"
              ? `/features/${option.img}.png`
              : option.img === "twitter"
              ? `/features/${option.img}.png`
              : "/features/assistant.png"
          }
        />
      </div>
      <div className="mx-7">
        <h3 className="text-xl font-medium mb-2 text-[var(--featured-text)]">
          <u className="no-underline">{option.value}</u>
        </h3>
        <p className="text-sm leading-6 text-gray-500">{option.description}</p>
      </div>
    </div>
  </Link>
)

export default FeatureCard
