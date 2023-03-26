import { useState } from "react";
import { CopyIcon } from "./copyicon";

export const CodeBlock = ({ code = "hello world" }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyFn = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(!isCopied);
    } catch (error) {
      setIsCopied(!isCopied);
      console.error(`Failed to copy text: ${error}`);
    }
  };
  return (
    <pre>
      <div className="bg-slate-400/60 rounded-md my-2">
        <div className="flex justify-end">
          <div className="flex p-2">
            <CopyIcon />
            <button className="text-sm pl-1" onClick={() => copyFn(code)}>
              {isCopied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>
        <div className="overflow-x-auto p-2">
          <code>{code}</code>
        </div>
      </div>
    </pre>
  );
};
