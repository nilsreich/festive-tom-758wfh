import {
  HomeIcon,
  PersonIcon,
  FileTextIcon,
  ArchiveIcon,
  GearIcon,
  AvatarIcon,
} from "@radix-ui/react-icons";
import * as Tooltip from "@radix-ui/react-tooltip";

export const Rail = () => {
  return (
    <div className="flex flex-col items-center border-r border-[#1e1e1e]/5 dark:border-[#bbb]/5">
      <div className="p-4">
        <img
          src="https://app.supabase.com/img/supabase-logo.svg"
          alt=""
          className="w-5"
        />
      </div>
      <Tooltip.Provider delayDuration={0}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <div className="m-2 rounded bg-[#1e1e1e]/10 dark:bg-[#bbb]/10 p-2">
              <HomeIcon />
            </div>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              side="right"
              className="rounded bg-stone-100 dark:bg-stone-950 dark:text-[#bbb] text-[#1e1e1e] px-2 py-1 text-xs"
              sideOffset={5}
            >
              Dashboard
              <Tooltip.Arrow className="dark:fill-black fill-stone-100" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>

      <div className="h-px w-full border-b border-[#bbbbbb]/5"></div>
      <Tooltip.Provider delayDuration={0}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <div className="m-2 p-2 rounded hover:bg-[#bbbbbb]/10 hover:text-white/90  ">
              <PersonIcon />
            </div>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              side="right"
              className="rounded bg-stone-950 text-[#bbbbbb] px-2 py-1 text-xs"
              sideOffset={5}
            >
              Schüler
              <Tooltip.Arrow className="fill-black" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
      <Tooltip.Provider delayDuration={0}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <div className="m-2 p-2 rounded hover:bg-[#bbbbbb]/10 hover:text-white/90  ">
              <FileTextIcon />
            </div>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              side="right"
              className="rounded bg-stone-950 text-[#bbbbbb] px-2 py-1 text-xs"
              sideOffset={5}
            >
              Dokumente
              <Tooltip.Arrow className="fill-black" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>

      <div className="h-px w-full border-b border-[#bbbbbb]/5"></div>
      <div className="h-px w-full border-b border-[#bbbbbb]/5"></div>
      <Tooltip.Provider delayDuration={0}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <div className="m-2 p-2 rounded hover:bg-[#bbbbbb]/10 hover:text-white/90  ">
              <ArchiveIcon />
            </div>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              side="right"
              className="rounded bg-stone-950 text-[#bbbbbb] px-2 py-1 text-xs"
              sideOffset={5}
            >
              Archiv
              <Tooltip.Arrow className="fill-black" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>

      <Tooltip.Provider delayDuration={0}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <div className="m-2 p-2 rounded hover:bg-[#bbbbbb]/10 hover:text-white/90  ">
              <GearIcon />
            </div>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              side="right"
              className="rounded bg-stone-950 text-[#bbbbbb] px-2 py-1 text-xs"
              sideOffset={5}
            >
              Einstellungen
              <Tooltip.Arrow className="fill-black" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>

      <div className="grow"></div>
      <Tooltip.Provider delayDuration={0}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <div className="m-2 p-2 rounded hover:bg-[#bbbbbb]/10 hover:text-white/90   hover:text-white">
              <AvatarIcon />
            </div>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              side="right"
              className="rounded bg-stone-950 text-[#bbbbbb] px-2 py-1 text-xs"
              sideOffset={5}
            >
              Account
              <Tooltip.Arrow className="fill-black" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  );
};
