import {
  FileIcon,
  CaretSortIcon,
  CheckIcon,
  DotsVerticalIcon,
  Pencil1Icon,
  Cross1Icon,
  ReaderIcon,
  DownloadIcon,
} from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const Sidebar = () => {
  return (
    <div className="w-64 border-r border-[#bbbbbb]/5">
      <div className="border-b border-[#bbbbbb]/5 p-3 px-7 text-lg text-white/90">
        Teilnehmer
      </div>
      <Select.Root defaultValue="BGY22a">
        <Select.Trigger className="m-7 my-4 mt-7 flex items-center rounded outline-none  justify-between border border-[#bbbbbb]/20 px-2 py-1 text-xs w-48">
          <Select.Value placeholder="Wähle eine Klasse" />
          <Select.Icon>
            <CaretSortIcon />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            className="w-48 text-xs bg-[#1e1e1e] rounded border border-[#bbbbbb]/20 mt-1"
            position="popper"
          >
            <Select.ScrollUpButton />
            <Select.Viewport>
              <Select.Item
                value="BGY22a"
                className="data-[state='checked']:bg-[#bbb]/20 flex justify-between py-2 px-2 rounded-t outline-none  hover:bg-[#bbb]/10"
              >
                <Select.ItemText>
                  <span className=" font-medium text-white/70">Alle</span>
                </Select.ItemText>
                <Select.ItemIndicator>
                  <CheckIcon className="text-green-400 text-lg" />
                </Select.ItemIndicator>
              </Select.Item>
              <Select.Item
                value="BGY22b"
                className="data-[state='checked']:bg-[#bbb]/20 flex justify-between py-2 px-2 hover:rounded outline-none  hover:bg-[#bbb]/10"
              >
                <Select.ItemText>
                  <span className="px-2 mr-4 text-[#bbb]/50">Klasse</span>
                  <span className="grow font-medium text-white/70">BGY22b</span>
                </Select.ItemText>
                <Select.ItemIndicator>
                  <CheckIcon className="text-green-400" />
                </Select.ItemIndicator>{" "}
              </Select.Item>
              <Select.Item
                value="BGY22c"
                className="data-[state='checked']:bg-[#bbb]/20 flex justify-between py-2 px-2 rounded-b outline-none  hover:bg-[#bbb]/10"
              >
                <Select.ItemText>
                  <span className="px-2 mr-4 text-[#bbb]/50">Klasse</span>
                  <span className="grow font-medium text-white/70">BGY22c</span>
                </Select.ItemText>
                <Select.ItemIndicator>
                  <CheckIcon className="text-green-400" />
                </Select.ItemIndicator>{" "}
              </Select.Item>
            </Select.Viewport>
            <Select.ScrollDownButton />
          </Select.Content>
        </Select.Portal>
      </Select.Root>

      <div className="mx-7 my-4 flex items-center rounded border border-[#bbbbbb]/10 bg-[#bbbbbb]/10 px-2 py-1 text-xs w-48">
        <FileIcon className="mr-3" />
        <div className="font-medium text-white/90 pt-px">Neuer Teilnehmer</div>
      </div>

      <div className="mx-7 mb-4 flex items-center rounded border border-[#bbbbbb]/10 bg-[#bbbbbb]/10 px-2 py-1 text-xs w-48">
        <FileIcon className="mr-3" />
        <div className="font-medium text-white/40 pt-px">Neue Klasse</div>
      </div>
      <div className="text-xs  mx-7  mt-7 mb-1 ">Dokumente (2)</div>
      <div className="text-sm group mx-7 w-48 px-2 rounded items-center py-1 my-1 flex justify-between hover:bg-[#bbb]/5">
        <div className="text-[#bbb]/70">Extremwertaufgaben</div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="focus:outline-none hidden group-hover:block">
            <DotsVerticalIcon />
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              align="start"
              sideOffset={5}
              className=" bg-[#2f2f2f] text-[#bbb]/70 border border-[#bbb]/20 rounded"
            >
              <DropdownMenu.Item className="focus:outline-none text-xs rounded flex items-center hover:bg-[#bbb]/10  px-2 py-2 gap-3">
                <Pencil1Icon />
                <div className="text-[#bbb]">Umbenennen</div>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="focus:outline-none text-xs rounded flex items-center hover:bg-[#bbb]/10  px-2 py-2 gap-3">
                <ReaderIcon />
                <div>Drucken</div>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="focus:outline-none text-xs rounded flex items-center hover:bg-[#bbb]/10  px-2 py-2 gap-3">
                <DownloadIcon />
                <div>PDF herrunterladen</div>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="focus:outline-none text-xs rounded flex items-center hover:bg-[#bbb]/10 border-t border-[#1e1e1e]/80 px-2 py-2 gap-3">
                <Cross1Icon />
                <div>Löschen</div>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
      <div className="text-sm mx-7 w-48 px-2 rounded items-center py-1 my-1 flex justify-between bg-[#bbb]/5">
        <div className="text-[#bbb]">Steckbriefaufgaben</div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="focus:outline-none">
            <DotsVerticalIcon />
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              align="start"
              sideOffset={5}
              className=" bg-[#2f2f2f] text-[#bbb]/70 border border-[#bbb]/20 rounded"
            >
              <DropdownMenu.Item className="focus:outline-none text-xs rounded flex items-center hover:bg-[#bbb]/10  px-2 py-2 gap-3">
                <Pencil1Icon />
                <div className="text-[#bbb]">Umbenennen</div>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="focus:outline-none text-xs rounded flex items-center hover:bg-[#bbb]/10  px-2 py-2 gap-3">
                <ReaderIcon />
                <div>Drucken</div>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="focus:outline-none text-xs rounded flex items-center hover:bg-[#bbb]/10  px-2 py-2 gap-3">
                <DownloadIcon />
                <div>PDF herrunterladen</div>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="focus:outline-none text-xs rounded flex items-center hover:bg-[#bbb]/10 border-t border-[#1e1e1e]/80 px-2 py-2 gap-3">
                <Cross1Icon />
                <div>Löschen</div>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </div>
  );
};
