"use client";
import * as React from "react";

import { Toolbar } from "./Toolbar";
import { Article } from "./Article";

const Editor = () => {
  return (
    <div className="font-inter flex h-screen bg-gray-100 text-[#687076] dark:bg-[#1c1c1c] dark:text-[#bbbbbb]">
      <main className="w-full overflow-auto">
        <Toolbar />
        <Article />
      </main>
    </div>
  );
};

export default Editor;
