"use client";
import * as React from "react";
export const AI = () => {
  return (
    <aside className="col-span-3 hidden overflow-y-auto md:sticky md:top-16 md:-mr-6 md:block md:h-[calc(100vh-12rem)] md:flex-none md:overflow-y-auto md:pr-6 ">
      <nav className="border-l border-[#bbb]/20 pl-6">
        <h2 className="font-mono text-sm font-medium text-black dark:text-gray-200">
          ON THIS PAGE
        </h2>
        <ol className="mt-4 space-y-3 text-sm">
          <li>
            <a className="text-green-400">Definition</a>
            <ol className="mt-2 space-y-3 pl-5">
              <li>Was sind Extremwertaufgaben</li>
              <li>Beispiele</li>
            </ol>
          </li>
        </ol>
      </nav>
    </aside>
  );
};
