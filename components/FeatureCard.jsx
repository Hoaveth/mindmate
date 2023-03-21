import Image from "next/image";
import Link from "next/link";
import React from "react";
import { setLocalStorageItem } from "utils/common";
import { OPTION_KEY } from "utils/constants";

const FeatureCard = ({ option }) => {
  return (
    <Link
      href={`/feature/${option.link}`}
      onClick={() => setLocalStorageItem(OPTION_KEY, option)}
    >
      <div class="p-6 bg-gray-600 rounded-lg flex lg:w-96 sm:w-60 mt-5 align-center cursor-pointer">
        <div class="mb-5">
          <Image
            width={50}
            height={50}
            alt={option.value}
            src={
              option.value === "Smart Recruiter"
                ? "/person.svg"
                : option.value === "Twitter Savvy"
                ? "/twitter.svg"
                : "/pen.svg"
            }
          />
        </div>
        <div className="mx-7">
          <h3 class="text-lg font-bold mb-2">
            <u>{option.value}</u>
          </h3>
          <p class="text-sm leading-6 text-white-600">{option.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default FeatureCard;
