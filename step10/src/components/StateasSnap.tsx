import React, { use, useState } from "react";

function StateasSnap() {
  const [message, setMessage] = useState("Type your message");
  const [to, setTo] = useState("Alice");

  function handleSubmit(e: any) {
    e.prevent.Default();
    setTimeout(() => {
      alert(`you sent ${message} to ${to}`);
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          To: {""}
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            <option value="Alice">Alice</option>
            <option value="Sarim">Sarim</option>
          </select>
        </label>

        <textarea
          value={message}
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
      <button type="submit" onSubmit={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default StateasSnap;
