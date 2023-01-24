import { Sidebar } from "./Sidebar";
import { Rail } from "./Rail";
import { Article } from "./Article";

export const Teacher = () => {
  return (
    <div className="flex h-screen bg-[#bbb]/30 dark:bg-[#1e1e1e] text-[#1e1e1e]/50 dark:text-[#bbbbbb]/50">
      <Rail />
      <Sidebar />
      <Article />
    </div>
  );
};
