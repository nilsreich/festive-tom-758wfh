import { Sidebar } from "./Sidebar";
import { Rail } from "./Rail";

export const UserTable = () => {
  return (
    <div className="flex h-screen bg-[#bbb]/30 dark:bg-[#1e1e1e] text-[#1e1e1e]/50 dark:text-[#bbbbbb]/50">
      <Rail />
      <Sidebar />
      asChild
    </div>
  );
};
