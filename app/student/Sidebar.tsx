export const Sidebar = () => {
  return (
    <aside className="!lg:left-0 absolute -left-72 top-0 ml-0 flex h-screen w-0 flex-col dark:border-stone-800 border-stone-200/30 border-r lg:relative lg:left-0 lg:w-96">
      <div className="relative px-5 py-16 lg:px-10">
        <a className="sticky top-0 z-10 mt-8 pt-8 font-mono text-sm font-medium lg:block">
          UNTERRICHT
        </a>
        <ul className="flex flex-col pb-5">
          <div className="my-3 text-black dark:text-gray-200">
            Extremwertaufgaben
          </div>
          <li className="mb-1.5 text-sm text-green-400">Einführung</li>
          <li className="mb-1.5 text-sm">Anwendung</li>
        </ul>
      </div>
    </aside>
  );
};
