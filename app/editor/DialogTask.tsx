"use client";
import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { TokensIcon, LightningBoltIcon } from "@radix-ui/react-icons";

const DialogTask = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="">
        <TokensIcon />
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-[#161616]  data-[state=open]:bg-opacity-75  z-20 fixed inset-0" />
      <Dialog.Content className="text-[#bbb]/90 z-30 fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[900px] translate-x-[-50%] translate-y-[-50%] rounded bg-[#1e1e1e] border border-[#bbb]/10 p-5 focus:outline-none">
        <Dialog.Title className="flex gap-2 text-[#bbb]/40 items-center mb-4">
          <Dialog.Close asChild>
            <button className="rounded-sm focus:outline-none bg-[#bbb]/10 px-2 py-0.5">
              <Cross2Icon />
            </button>
          </Dialog.Close>
          <div className="text-xs  font-medium ">Aufgaben</div>
        </Dialog.Title>

        <div className="">
          <div className="flex">
            <div className="border-light/20 w-[300px] ">
              <div className="">
                <div className="">
                  <input
                    type="text"
                    className="border-light/20 placeholder:text-light/80 w-full rounded border bg-transparent px-2 py-2 text-sm placeholder:italic"
                    placeholder="Suche nach Aufgaben..."
                  />
                </div>
                <div className="mx-1 mb-1 mt-4 text-xs text-white">Level:</div>

                <div className="text-light/60 mflex mx-4 items-center gap-2 truncate text-xs">
                  <input
                    type="checkbox"
                    className="border-light/20 checked:bg-brand h-3 w-3 appearance-none rounded-sm border"
                  />
                  <label for="vehicle1">leicht</label>
                  <input
                    type="checkbox"
                    className="border-light/20 checked:bg-brand ml-6 h-3 w-3 appearance-none rounded-sm border"
                  />
                  <label for="vehicle2">mittel</label>
                  <input
                    type="checkbox"
                    className="border-light/20 checked:bg-brand ml-8 h-3 w-3 appearance-none rounded-sm border"
                  />

                  <label for="vehicle3">schwer</label>
                </div>
                <div className="mx-4 mb-1 mt-4 text-xs text-white">Dauer:</div>

                <div className="border-light/20 text-light/60 mx-4 mt-2 flex items-center gap-2 truncate pb-2 text-xs">
                  <input
                    type="checkbox"
                    className="border-light/20 checked:bg-brand h-3 w-3 appearance-none rounded-sm border"
                  />
                  <label for="vehicle1"> 5min </label>
                  <input
                    type="checkbox"
                    className="border-light/20 checked:bg-brand ml-2 h-3 w-3 appearance-none rounded-sm border"
                  />
                  <label for="vehicle2">5-10min</label>
                  <input
                    type="checkbox"
                    className="border-light/20 checked:bg-brand ml-2 h-3 w-3 appearance-none rounded-sm border"
                  />
                  <label for="vehicle3">10min</label>
                </div>
              </div>

              <div className="bg-light/20 mt-1 h-px"></div>
              <div className="h-[400px] overflow-y-scroll">
                <div className="hover:bg-light/10 mt-1 rounded p-4">
                  <div className="text-light/40 mb-1 truncate font-medium">
                    Berechnung der Ableitung einer linearen Funktion
                  </div>
                  <div className="text-light/50 max-h-12 truncate whitespace-normal text-xs">
                    Gegeben ist eine Funktion der Form f(x) = mx + b. Berechne
                    die Ableitung f'(x).
                  </div>
                </div>
                <div className="hover:bg-light/40 bg-light/5 mt-1 rounded p-4">
                  <div className="mb-1 truncate font-medium text-light/50">
                    Ableitung einer Potenzfunktion
                  </div>
                  <div className="text-light max-h-12 truncate whitespace-normal text-xs">
                    Ermittle die Ableitung der Funktion
                  </div>
                </div>
                <div className="hover:bg-light/10 mt-1 rounded p-4">
                  <div className="text-light/70 mb-1 truncate font-medium">
                    Logarithmusregeln anwenden
                  </div>
                  <div className="text-light/50 max-h-12 truncate whitespace-normal text-xs">
                    Gegeben ist eine Funktion der Form f(x) = log_a(x), wobei a
                    eine Konstante ist. Berechne die Ableitung f'(x) unter
                    Anwendung der Logarithmusregeln.
                  </div>
                </div>
                <div className="hover:bg-light/10 mt-1 rounded p-4">
                  <div className="text-light/70 mb-1 truncate font-medium">
                    Kombination verschiedener Ableitungsregeln
                  </div>
                  <div className="text-light/50 max-h-12 truncate whitespace-normal text-xs">
                    Gegeben ist eine komplexe Funktion, die verschiedene
                    Ableitungsregeln erfordert. Bestimme die Ableitung der
                    Funktion unter Anwendung der entsprechenden Regeln.
                  </div>
                </div>
                <div className="hover:bg-light/10 mt-1 rounded p-4">
                  <div className="text-light/70 mb-1 truncate font-medium">
                    Kombination verschiedener Ableitungsregeln
                  </div>
                  <div className="text-light/50 max-h-12 truncate whitespace-normal text-xs">
                    Gegeben ist eine komplexe Funktion, die verschiedene
                    Ableitungsregeln erfordert. Bestimme die Ableitung der
                    Funktion unter Anwendung der entsprechenden Regeln.
                  </div>
                </div>
              </div>
            </div>
            <div className="relative pl-8  text-white">
              <div className="text-3xl">
                Berechnung der Ableitung einer linearen Funktion
              </div>
              <div className="text-light my-4">
                Bilde die Ableitungen der folgenden Funktionen:
              </div>
              <div className="grid grid-cols-2 gap-4 whitespace-nowrap px-4">
                <div>a) 3x^2-4</div>
                <div>b) 4x-4</div>
                <div>c) -1x^4-x^3+2x^2-4</div>
                <div>d) 4x^3-x^3-x^2-4</div>
                <div>e) -5x^2-x^3+5x^2-4</div>
                <div>f) 7x^5+4x^2-7</div>
              </div>
              <div className="absolute bottom-4 right-4 flex gap-3">
                <div className="hover:bg-light/30 rounded-sm px-4 py-2">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.85355 2.14645C5.04882 2.34171 5.04882 2.65829 4.85355 2.85355L3.70711 4H9C11.4853 4 13.5 6.01472 13.5 8.5C13.5 10.9853 11.4853 13 9 13H5C4.72386 13 4.5 12.7761 4.5 12.5C4.5 12.2239 4.72386 12 5 12H9C10.933 12 12.5 10.433 12.5 8.5C12.5 6.567 10.933 5 9 5H3.70711L4.85355 6.14645C5.04882 6.34171 5.04882 6.65829 4.85355 6.85355C4.65829 7.04882 4.34171 7.04882 4.14645 6.85355L2.14645 4.85355C1.95118 4.65829 1.95118 4.34171 2.14645 4.14645L4.14645 2.14645C4.34171 1.95118 4.65829 1.95118 4.85355 2.14645Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="hover:bg-light/30 rounded-sm px-4 py-2">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.84998 7.49998C1.84998 4.66458 4.05979 1.84998 7.49998 1.84998C10.2783 1.84998 11.6515 3.9064 12.2367 5H10.5C10.2239 5 10 5.22386 10 5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V4.31318C12.2955 3.07126 10.6659 0.849976 7.49998 0.849976C3.43716 0.849976 0.849976 4.18537 0.849976 7.49998C0.849976 10.8146 3.43716 14.15 7.49998 14.15C9.44382 14.15 11.0622 13.3808 12.2145 12.2084C12.8315 11.5806 13.3133 10.839 13.6418 10.0407C13.7469 9.78536 13.6251 9.49315 13.3698 9.38806C13.1144 9.28296 12.8222 9.40478 12.7171 9.66014C12.4363 10.3425 12.0251 10.9745 11.5013 11.5074C10.5295 12.4963 9.16504 13.15 7.49998 13.15C4.05979 13.15 1.84998 10.3354 1.84998 7.49998Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="bg-brand text-dark rounded-sm bg-opacity-80 px-4 py-2 hover:bg-opacity-100">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogTask;
