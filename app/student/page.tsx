import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { Article } from "./Article";
import { Footer } from "./Footer";

export const Student = () => {
  return (
    <div className="font-inter flex h-screen bg-gray-100 text-[#687076] dark:bg-[#1c1c1c] dark:text-[#bbbbbb]">
      <Sidebar />
      <main className="w-full overflow-auto">
        <Navbar />
        <Article />
        <Footer />
      </main>
    </div>
  );
};
