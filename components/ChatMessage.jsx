import React from "react";
import { AUTHOR_GPT } from "utils/constants";
import { CodeBlock } from "./codeblock";

const regExCodeBlock = /```([\s\S]*?)```/g;
const regExCodeTerm = /`([\s\S]*?)`/g;

const displayResponse = (chat) => {
  if (AUTHOR_GPT === chat.author) {
    /**
     * function for getting the [codes term] from chat message and codeBlocks
     *
     */

    const gptResponse = chat.message.split(regExCodeBlock);
    const components = [];

    for (let i = 0; i < gptResponse.length; i++) {
      if (i % 2 === 0) {
        const text = gptResponse[i].split(regExCodeTerm);
        for (let j = 0; j < text.length; j++) {
          if (j % 2 === 0) {
            // its is a regular string
            const str = text[j];
            components.push(str);
          } else {
            // its is a code term
            const codeTerm = text[j];
            components.push(
              <code className="font-bold" key={`${i}-${j}`}>
                `{codeTerm}`
              </code>
            );
          }
        }
      } else {
        //it is a code block
        const codeBlock = gptResponse[i];
        components.push(<CodeBlock key={i} code={codeBlock} />);
      }
    }

    return components;
  }

  return chat.message;
};

const ChatMessage = ({ chat }) => {
  return (
    <div
      className={`${
        AUTHOR_GPT === chat.author && "bg-gray-300 text-gray-800"
      } bg-gray-100 p-2 rounded-xl text-md text-black whitespace-pre-line`}
    >
      {displayResponse(chat)}
    </div>
  );
};

export default ChatMessage;
