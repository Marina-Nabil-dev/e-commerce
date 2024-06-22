import React from "react";
import { useState } from "react";
export default function ChnageProfile({ setUsername }) {
  const [newUsername, setNewUsername] = useState("");
  return (
    <div>
      <input onChange={(e) => setNewUsername(e.target.value)} />

      <button onClick={() => setUsername(newUsername)}>Change Username</button>
    </div>
  );
}
