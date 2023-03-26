import React from "react";
import { AUTHOR_GPT } from "utils/constants";
import { CodeBlock } from "./codeblock";

const displayResponse = (chat) => {
  if (chat.message.includes("```") && AUTHOR_GPT === chat.author) {
    const gptResponse = chat.message.split(/```([\s\S]*)```/);
    for (let i = 1; i < gptResponse.length; i += 2) {
      gptResponse[i] = <CodeBlock key={i} code={gptResponse[i]} />;
      return gptResponse;
    }
  }

  return chat.message;
};

const ChatMessage = ({ chat }) => {
  return (
    <div
      className={`${
        AUTHOR_GPT === chat.author ? "bg-gray-300 text-gray-800" : null
      } bg-gray-100 p-2 rounded-xl text-md text-black`}
    >
      {displayResponse(chat)}
    </div>
  );
};

export default ChatMessage;
