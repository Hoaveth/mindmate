"use client";
import { useEffect, useRef, useState } from "react";
import { GPT_CONDITIONER, GPT_MODEL, GPT_ROLE } from "utils/constants";
import ChatLoad from "./ChatLoad";

const ChatBox = ({ option }) => {
  const [message, setMessage] = useState();
  const [userMessage, setUserMessage] = useState();

  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState();
  const [error, setError] = useState("");

  const textareaRef = useRef();
  const newMessageRef = useRef();

  useEffect(() => {
    setChats([]);
    setSelectedOption(option);
  }, []);

  useEffect(() => {
    const messageObject = {
      author: "user",
      message: message,
    };
    setUserMessage(messageObject);
  }, [message]);

  //textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current?.scrollHeight}px`;

      /**
       * used to show scroll bar if greater than max height
       * for changes make sure to change also the tailwind max height
       *
       * 200px = current max height
       */
      if (textareaRef.current?.scrollHeight > 200) {
        textareaRef.current.style.overflowY = "scroll";
      }
    }
  }, [message]);

  //run side effect every new messages to scroll at the bottom
  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  const scrollToBottom = () => {
    newMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = () => {
    if (message) {
      setLoading(true);
      setChats([...chats, userMessage]);
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
          content: GPT_CONDITIONER + ` ${selectedOption.value}, ` + message,
        },
      ],
    };

    const apiURL = process.env.NEXT_PUBLIC_CHATGPT_API;
    try {
      const res = await fetch(apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const json = await res.json();
      const response = json.choices[0]?.message.content;

      const messageObject = {
        author: "gpt",
        message: response.replace(/"/g, ""),
      };

      setChats([...chats, userMessage, messageObject]);
      setUserMessage("");
      setLoading(false);
    } catch (error) {
      setError("Something went wrong Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="chatbox bg-white shadow-lg rounded-lg mt-10 p-6 max-w-lg mx-auto w-100 relative flex flex-col">
      <div className="flex flex-col gap-2 overflow-y-scroll">
        <div className="bg-gray-100 p-2 rounded-xl text-sm text-black">
          <strong>Instructions:</strong> {selectedOption?.description}
        </div>
        {chats?.length > 0 &&
          chats?.map((chat, index) => {
            return (
              <div
                key={index}
                className={`${
                  chat.author === "gpt" ? "bg-gray-300 text-gray-800" : null
                } bg-gray-100 p-2 rounded-xl text-md text-black`}
              >
                {chat.message}
              </div>
            );
          })}
        {loading && <ChatLoad />}
        <span className="text-red-500 font-sans">{error}</span>
        <div className="pb-14" ref={newMessageRef} />
      </div>
      <div className="absolute bottom-0 left-0 w-full p-2 bg-white">
        <div className="relative flex items-center mt-4 border border-gray-300 rounded-md py-2 shadow-md">
          <textarea
            ref={textareaRef}
            type="text"
            className="p-0 w-full pl-2 pr-4 whitespace-pre-wrap resize-none bg-white text-black max-h-[200px] overflow-y-hidden focus:right-0 focus-visible:ring-offset-0 border-0 focus:outline-none focus:shadow-outline"
            placeholder="Type your message here..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button
            className={`${loading ? "bg-gray-500" : "bg-blue-500"} ${
              loading ? "cursor-not-allowed" : "cursor-pointer"
            } text-white rounded-lg h-10 w-10 flex items-center justify-center absolute bottom-2 right-2`}
            onClick={() => sendMessage()}
            disabled={loading}
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
    </div>
  );
};

export default ChatBox;
