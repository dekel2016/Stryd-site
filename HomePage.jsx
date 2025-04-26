import React from 'react';
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans p-10">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">STRYD</h1>
        <button className="bg-black text-white px-4 py-2 rounded-full">קנה עכשיו</button>
      </header>
      <main className="text-center">
        <h2 className="text-4xl mb-6">לא רק לראות את הדרך. לשלוט בה.</h2>
        <p className="text-lg mb-4">משקפי רכיבה מקצועיים - עיצוב יוקרתי, ביצועים אופטימליים.</p>
      </main>
    </div>
  );
}
