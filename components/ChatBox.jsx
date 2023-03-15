"use client";
import { useEffect, useState } from "react";

const ChatBox = ({ assistant, options }) => {
  const [message, setMessage] = useState();
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState();

  useEffect(() => {
    if (assistant) {
      const value = options.filter((item) => item.value === assistant);
      setSelectedOption(...value);
    } else {
      setSelectedOption(options[0]);
    }
  }, [assistant]);

  const sendMessage = () => {
    setMessage("");
    setChats([...chats, message]);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg mt-10  p-8 max-w-lg mx-auto">
      <div className="flex flex-col gap-2">
        <div className="bg-gray-100 p-2 rounded-xl text-sm text-black">
          <strong>Instructions:</strong> {selectedOption?.instruction}
        </div>
        {chats.length > 0 &&
          chats.map((chat) => {
            return (
              <div className="bg-gray-100 p-2 rounded-xl text-sm text-black">
                {chat}
              </div>
            );
          })}
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
          className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center"
          onClick={() => sendMessage()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            class="bi bi-send-fill"
            viewBox="0 0 16 16"
          >
            {" "}
            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />{" "}
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
