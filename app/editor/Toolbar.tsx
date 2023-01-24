"use client";
import * as React from "react";
import {
  FontBoldIcon,
  FontItalicIcon,
  UnderlineIcon,
  StrikethroughIcon,
  VideoIcon,
  ImageIcon,
  Pencil1Icon,
  Pencil2Icon,
  CaretSortIcon,
  LightningBoltIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  Cross1Icon,
  TrashIcon,
  LockClosedIcon,
} from "@radix-ui/react-icons";
import {
  TextFont,
  RowDelete,
  RowInsert,
  Cursor_1,
  FunctionMath,
  ListBulleted,
  ListNumbered,
  Link,
  Draw,
  TextAlignCenter,
  TextAlignLeft,
  TextAlignRight,
  TextColor,
  ColumnInsert,
  ColumnDelete,
  Launch,
} from "@carbon/icons-react";

import * as Select from "@radix-ui/react-select";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import DialogAI from "./DialogAI";
import DialogTask from "./DialogTask";

export const Toolbar = () => {
  return (
    <div className=" sticky z-10 top-0 border-b border-[#bbb]/10 bg-[#1e1e1e] flex justify-between items-center py-2 px-6">
      <div className="flex items-center gap-8">
        <div className=" text-sm text-white/90 ">
          <span>BGY22a</span>
          <span className="px-4 text-white/20">/</span>
          <span>Steckbriefaufgaben</span>
        </div>
        <nav className="flex text-[#bbb]/50 items-center  ">
          <div className="p-2  rounded">
            <ArrowLeftIcon />
          </div>
          <div className="p-2  rounded">
            <ArrowRightIcon />
          </div>
          <Select.Root defaultValue="BGY22a">
            <Select.Trigger className="flex items-center rounded outline-none  justify-between border border-[#bbbbbb]/20 px-2 py-1.5 text-xs w-32 mx-3">
              <Select.Value placeholder="Wähle eine Klasse" />
              <Select.Icon>
                <CaretSortIcon />
              </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
              <Select.Content
                className="z-10 text-xs bg-[#1e1e1e] rounded border border-[#bbbbbb]/20 mt-1 w-32"
                position="popper"
              >
                <Select.ScrollUpButton />
                <Select.Viewport>
                  <Select.Item
                    value="BGY22a"
                    className="data-[state='checked']:bg-[#bbb]/20 flex justify-between py-2 px-2 rounded-t outline-none  hover:bg-[#bbb]/10"
                  >
                    <Select.ItemText>
                      <span className=" font-medium text-white/70">
                        Paragraph
                      </span>
                    </Select.ItemText>
                  </Select.Item>
                  <Select.Item
                    value="BGY22b"
                    className="data-[state='checked']:bg-[#bbb]/20 flex justify-between py-2 px-2 hover:rounded outline-none  hover:bg-[#bbb]/10"
                  >
                    <Select.ItemText>
                      <span className="grow font-medium text-white/70">
                        Überschrift 1
                      </span>
                    </Select.ItemText>
                  </Select.Item>
                  <Select.Item
                    value="BGY22c"
                    className="data-[state='checked']:bg-[#bbb]/20 flex justify-between py-2 px-2 rounded-b outline-none  hover:bg-[#bbb]/10"
                  >
                    <Select.ItemText>
                      <span className="grow font-medium text-white/70">
                        Überschrift 2
                      </span>
                    </Select.ItemText>
                  </Select.Item>
                </Select.Viewport>
                <Select.ScrollDownButton />
              </Select.Content>
            </Select.Portal>
          </Select.Root>

          <div className="p-2 bg-[#bbb]/10 rounded">
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
          <div className="border-l border-[#bbb]/20 w-px mx-2 h-4"></div>
          <div className="p-2 hover:bg-[#1c1c1c] hover:bg-opacity-20  ">
            <VideoIcon />
          </div>
          <div className="p-2 hover:bg-[#1c1c1c] hover:bg-opacity-20  ">
            <ImageIcon />
          </div>
          <div className="p-2 hover:bg-[#1c1c1c] hover:bg-opacity-20  ">
            <Pencil1Icon />
          </div>
          <div className="border-l border-[#bbb]/20 w-px mx-2 h-4"></div>

          <div className="p-2 hover:bg-[#1c1c1c] hover:bg-opacity-20  ">
            <DialogAI />
          </div>
          <div className="p-2 hover:bg-[#1c1c1c] hover:bg-opacity-20  ">
            <DialogTask />
          </div>
          <div className="p-2 hover:bg-[#1c1c1c] hover:bg-opacity-20  ">
            <Draw />
          </div>
          <div className="p-2 hover:bg-[#1c1c1c] hover:bg-opacity-20  ">
            <Link />
          </div>
          <div className="p-2 hover:bg-[#1c1c1c] hover:bg-opacity-20  ">
            <ListBulleted />
          </div>
          <div className="p-2 hover:bg-[#1c1c1c] hover:bg-opacity-20  ">
            <ListNumbered />
          </div>
          <div className="p-2 hover:bg-[#1c1c1c] hover:bg-opacity-20  ">
            <RowDelete />{" "}
          </div>
          <div className="p-2 hover:bg-[#1c1c1c] hover:bg-opacity-20  ">
            <RowInsert />{" "}
          </div>
          <div className="p-2 hover:bg-[#1c1c1c] hover:bg-opacity-20  ">
            <TextAlignLeft />{" "}
          </div>
          <div className="p-2 hover:bg-[#1c1c1c] hover:bg-opacity-20  ">
            <TextAlignCenter />{" "}
          </div>
          <div className="p-2 hover:bg-[#1c1c1c] hover:bg-opacity-20  ">
            <TextAlignRight />{" "}
          </div>
          <div className="p-2 hover:bg-[#1c1c1c] hover:bg-opacity-20  ">
            <TextColor />{" "}
          </div>
          <div className="p-2 hover:bg-[#1c1c1c] hover:bg-opacity-20  ">
            <ColumnInsert />{" "}
          </div>
          <div className="p-2 hover:bg-[#1c1c1c] hover:bg-opacity-20  ">
            <ColumnDelete />{" "}
          </div>
          <div className="p-2 hover:bg-[#1c1c1c] hover:bg-opacity-20  ">
            <FunctionMath />{" "}
          </div>
          <div className="p-2 hover:bg-[#1c1c1c] hover:bg-opacity-20  ">
            <Launch />{" "}
          </div>
          <div className="p-2 hover:bg-[#1c1c1c] hover:bg-opacity-20  ">
            <Cursor_1 />{" "}
          </div>
        </nav>
      </div>

      <Select.Root defaultValue="BGY22a">
        <Select.Trigger className="flex items-center rounded outline-none bg-[#bbb]/10 justify-between border border-[#bbbbbb]/20 px-2 py-1.5 text-xs w-32 mx-3">
          <Select.Value placeholder="Wähle eine Klasse" />
          <Select.Icon>
            <CaretSortIcon />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            className="z-10 text-xs bg-[#1e1e1e] rounded border border-[#bbbbbb]/20 mt-1 w-32"
            position="popper"
          >
            <Select.ScrollUpButton />
            <Select.Viewport>
              <Select.Item
                value="BGY22a"
                className="data-[state='checked']:bg-[#bbb]/20 flex justify-between py-2 px-2 rounded-t outline-none  hover:bg-[#bbb]/10"
              >
                <Select.ItemText>
                  <span className=" font-medium text-white/70">Speichern</span>
                </Select.ItemText>
              </Select.Item>
              <Select.Item
                value="BGY22b"
                className="data-[state='checked']:bg-[#bbb]/20 flex justify-between py-2 px-2 hover:rounded outline-none  hover:bg-[#bbb]/10"
              >
                <Select.ItemText>
                  <span className="grow font-medium text-white/70">
                    Abbrechen
                  </span>
                </Select.ItemText>
              </Select.Item>
              <Select.Item
                value="BGY22c"
                className="data-[state='checked']:bg-[#bbb]/20 flex justify-between py-2 px-2 rounded-b outline-none  hover:bg-[#bbb]/10"
              >
                <Select.ItemText>
                  <span className="grow font-medium text-white/70">
                    Löschen
                  </span>
                </Select.ItemText>
              </Select.Item>
            </Select.Viewport>
            <Select.ScrollDownButton />
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};
