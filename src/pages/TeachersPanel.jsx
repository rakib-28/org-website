import React, { useState } from "react";

const TeachersPanel = () => {
  const [notice, setNotice] = useState("");
  const [notices, setNotices] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (notice) {
      setNotices([...notices, notice]);
      setNotice("");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold text-blue-600 text-center">
        Teachers Panel
      </h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Enter your notice here..."
          value={notice}
          onChange={(e) => setNotice(e.target.value)}
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Submit Notice
        </button>
      </form>
      <div className="mt-4">
        <h2 className="text-lg font-bold">Notices:</h2>
        {notices.map((n, index) => (
          <p key={index} className="p-2 border-b">
            {n}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TeachersPanel;
