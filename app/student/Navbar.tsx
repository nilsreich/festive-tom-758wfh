export const Navbar = () => {
  return (
    <nav className="border-b border-stone-200/30 px-5 py-4 backdrop-blur backdrop-filter dark:border-stone-800">
      <div className="font-mono text-sm font-medium lg:hidden">UNTERRICHT</div>
      <div className="hidden items-center justify-end gap-3 px-2.5 py-1 text-xs lg:flex">
        <a>Dashboard</a>
      </div>
    </nav>
  );
};
