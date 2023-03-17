"use client";
import { useEffect, useState } from "react";
import { GPT_CONDITIONER, GPT_MODEL, GPT_ROLE } from "utils/constants";

const ChatBox = ({ assistant, options }) => {
  const [message, setMessage] = useState();
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState();

  useEffect(() => {
    if (assistant) {
      const value = options.filter((item) => item.value === assistant);
      setSelectedOption(...value);
      setChats([]);
    } else {
      setSelectedOption(options[0]);
    }
  }, [assistant]);

  const sendMessage = () => {
    setLoading(true);

    if (message) {
      setChats([...chats, message]);
      fetchData();
      setMessage("");
    }
  };

  const fetchData = async () => {
    const formData = {
      model: GPT_MODEL,
      messages: [
        {
          role: GPT_ROLE,
          content: GPT_CONDITIONER + `${selectedOption.value}, ` + message,
        },
      ],
    };

    const apiURL = process.env.NEXT_PUBLIC_CHATGPT_API;

    const res = await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const json = await res.json();
    const response =
      `<strong>MindMate:</strong>` + json.choices[0]?.message.content;
    const chatWithoutQuotes = response.replace(/"/g, "");

    setChats([...chats, message, chatWithoutQuotes]);

    setLoading(false);
  };

  return (
    <div className="chatbox bg-white shadow-lg rounded-lg mt-10  p-6 max-w-lg mx-auto">
      <div className="flex flex-col gap-2">
        <div className="bg-gray-100 p-2 rounded-xl text-sm text-black">
          <strong>Instructions:</strong> {selectedOption?.instruction}
        </div>
        {chats.length > 0 &&
          chats.map((chat, index) => {
            return (
              <div
                key={index}
                className={`${chat} bg-gray-100 p-2 rounded-xl text-sm text-black`}
                dangerouslySetInnerHTML={{ __html: chat }}
              ></div>
            );
          })}
        {loading ? (
          <div className="bg-gray-100 p-4 rounded-xl text-sm text-black">
            <div className="flex items-center justify-start space-x-2">
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="flex items-center mt-4">
        <input
          type="text"
          className="border border-gray-300 rounded-full px-4 py-2 w-full mr-2"
          placeholder="Type your message here..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button
          className={`${
            loading ? "bg-gray-500" : "bg-blue-500"
          } text-white rounded-full h-10 w-10 flex items-center justify-center`}
          onClick={() => sendMessage()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-send-fill"
            viewBox="0 0 16 16"
          >
            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />{" "}
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
