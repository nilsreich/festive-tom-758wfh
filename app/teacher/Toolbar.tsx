import {
  FontBoldIcon,
  FontItalicIcon,
  UnderlineIcon,
  StrikethroughIcon,
  VideoIcon,
  ImageIcon,
  Pencil1Icon,
} from "@radix-ui/react-icons";

export const Toolbar = () => {
  return (
    <nav className="flex pl-7 top-0 z-10  border-b border-[#bbb]/5 ">
      <div className="p-2 bg-[#bbb]/20 text-[#bbbbbb]">
        <FontBoldIcon />
      </div>
      <div className=" p-2 hover:bg-[#1c1c1c] hover:bg-opacity-20  ">
        <FontItalicIcon />
      </div>
      <div className="p-2 hover:bg-[#1c1c1c] hover:bg-opacity-20  ">
        <UnderlineIcon />
      </div>
      <div className="p-2 hover:bg-[#1c1c1c] hover:bg-opacity-20  ">
        <StrikethroughIcon />
      </div>
      <div className="p-2 hover:bg-[#1c1c1c] hover:bg-opacity-20  ">
        <VideoIcon />
      </div>
      <div className="p-2 hover:bg-[#1c1c1c] hover:bg-opacity-20  ">
        <ImageIcon />
      </div>
      <div className="p-2 hover:bg-[#1c1c1c] hover:bg-opacity-20  ">
        <Pencil1Icon />
      </div>
    </nav>
  );
};
