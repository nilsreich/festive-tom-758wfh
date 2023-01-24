"use client";
import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { LightningBoltIcon } from "@radix-ui/react-icons";

const DialogAI = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="">
        <LightningBoltIcon />
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-[#161616]  data-[state=open]:bg-opacity-75  z-20 fixed inset-0" />
      <Dialog.Content className="text-[#bbb]/90 z-30 fixed top-[25%] left-[50%] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] rounded bg-[#1e1e1e] border border-[#bbb]/10 p-5 focus:outline-none">
        <Dialog.Title className="flex gap-2 text-[#bbb]/40 items-center">
          <Dialog.Close asChild>
            <button className="rounded-sm focus:outline-none bg-[#bbb]/10 px-2 py-0.5">
              <Cross2Icon />
            </button>
          </Dialog.Close>
          <div className="text-xs  font-medium">Sasu AI</div>
        </Dialog.Title>

        <Dialog.Description className=" mt-7 text-[#bbb]/50 text-sm mb-2 font-medium">
          Vorschläge
        </Dialog.Description>
        <div className="text-sm">
          <div className="flex items-center gap-2 hover:bg-[#bbb]/10 px-2 py-2 rounded -ml-2 mb-2">
            <LightningBoltIcon className="text-green-400" />
            <div>Definition: Extremwertaufgaben</div>
          </div>
          <div className="flex items-center gap-2 hover:bg-[#bbb]/10 px-2 py-2 rounded -ml-2 mb-2">
            <LightningBoltIcon className="text-green-400" />
            <div>Stell einen 10min Timer</div>
          </div>
          <div className="flex items-center gap-2 hover:bg-[#bbb]/10 px-2 py-2 rounded -ml-2 mb-2">
            <LightningBoltIcon className="text-green-400" />
            <div>Fasse die bisherige Stunde zusammen</div>
          </div>
        </div>
        <div className="mt-24">
          <input
            className="border border-[#bbb]/30 bg-transparent w-full text-sm rounded px-2 py-1"
            placeholder="Frage Sasu AI"
          />
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogAI;
