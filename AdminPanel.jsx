import React, { useState } from 'react';
export default function AdminPanel() {
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    if (password === "stryd123") setLoggedIn(true);
    else alert("סיסמה שגויה");
  };
  if (!loggedIn) {
    return (
      <div className="p-10">
        <h2 className="text-2xl mb-4">התחברות לניהול האתר</h2>
        <input
          type="password"
          placeholder="סיסמה"
          className="border p-2 rounded mr-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-black text-white px-4 py-2 rounded" onClick={handleLogin}>
          התחבר
        </button>
      </div>
    );
  }
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">ברוך הבא ללוח הניהול של STRYD</h2>
    </div>
  );
}
