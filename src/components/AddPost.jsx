"use client";

import { useState } from "react";
import TipTap from "@/components/TipTap";

export default function AddPost({ action }) {
  const [content, setContent] = useState("");

  return (
    <form action={action} className="flex flex-col space-y-4">
      <input
        type="text"
        name="title"
        placeholder="Post title..."
        className="text-black px-3 py-2 rounded"
      />

      <TipTap value={content} onChange={setContent} />

      <input type="hidden" name="content" value={content} />

      <button className="bg-green-400 px-4 py-2 text-xl text-black rounded">
        Submit post
      </button>
    </form>
  );
}