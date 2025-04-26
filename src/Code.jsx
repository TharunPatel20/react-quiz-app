import React from "react";

export default function Code(props) {
  const { code } = props;
  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md">
      <pre className="whitespace-pre-wrap break-words">
        <code>{code}</code>
      </pre>
    </div>
  );
}
