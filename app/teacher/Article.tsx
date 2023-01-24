import { TOC } from "./TOC";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { Pencil2Icon } from "@radix-ui/react-icons";
export const Article = () => {
  return (
    <div className="flex flex-col w-full ">
      <div className="flex justify-between border-b border-[#bbbbbb]/5 items-center px-5">
        <div className=" p-4  text-sm text-white/90 ">
          <span>BGY22a</span>
          <span className="px-4 text-white/20">/</span>
          <span>Steckbriefaufgaben</span>
        </div>
        <div className="flex gap-2 items-center rounded border border-[#bbbbbb]/10 bg-[#bbbbbb]/10 px-2 py-1 text-xs">
          <Pencil2Icon />
          <div className="font-medium pt-px text-white/90">Bearbeiten</div>
        </div>
      </div>
      <ScrollArea.Root className="w-full h-screen rounded overflow-hidden ">
        <ScrollArea.Viewport className="w-full h-full rounded">
          <div className="relative mx-auto grid max-w-7xl grid-cols-12 gap-4 px-5 py-16 pb-0">
            <article className="prose relative col-span-12 max-w-none md:col-span-9">
              <h1 className="text-4xl text-black dark:text-gray-200">
                Einführung
              </h1>
              <hr className="my-9  border-t border-[#bbb]/20"></hr>
              <p className="leading-8">
                In der ersten Aufgabe geht es darum, ein Kantenmodell eines
                Quaders mit möglichst großem Volumen aus einem 120 cm langen
                Draht herzustellen. Dabei soll eine Kante des Quaders dreimal so
                lang sein wie die anderen Kanten. Um das Problem zu lösen,
                betrachten wir zunächst die Hauptbedingung, die das Volumen
                maximieren soll. Die Volumenfunktion des Quaders lautet V(a, b,
                c) = abc, wobei a, b und c die Längen der Kanten des Quaders
                sind. Da die Funktion drei Unbekannte hat, können wir nicht
                direkt die Hochpunkte bestimmen. Um die Lösung zu finden,
                benötigen wir Nebenbedingungen. In der Aufgabenstellung ist
                angegeben, dass eine Kante des Quaders dreimal so lang wie eine
                der anderen Kanten ist. Daraus ergibt sich die Nebenbedingung a
                = 3b. Außerdem ist bekannt, dass der Draht eine Länge von 120 cm
                hat. Dadurch erhalten wir die Nebenbedingung 120 = 4a + 4b + 4c,
                wobei wir die erste Nebenbedingung direkt einsetzen können.
                Indem wir die Nebenbedingungen in die Hauptbedingung einsetzen,
                erhalten wir die Zielfunktion V(b) = 3b^2(30-4b). Diese Funktion
                hängt nur von der Variable b ab und kann leicht auf Extremwerte
                untersucht werden. Um die Extremwerte zu finden, nehmen wir die
                Ableitung der Zielfunktion V'(b) = 180b - 36b^2 und setzen sie
                gleich Null. Daraus ergibt sich die Gleichung 36b(5-b) = 0. Die
                Lösungen sind b_1 = 0 und b_2 = 5. Da ein dreidimensionaler
                Quader mit b = 0 nicht möglich ist, ist die richtige Lösung b =
                5. Durch Einsetzen von b in die Nebenbedingungen können wir die
                Längen der anderen Kanten a und c berechnen. Dabei erhalten wir
                a = 15 und c = 10. Nun kennen wir die Werte von a, b und c und
                können das maximale Volumen bestimmen, indem wir V = abc
                berechnen. Das maximale Volumen, das mit den gegebenen
                Bedingungen erreicht werden kann, beträgt 750 cm³. In der
                zweiten Aufgabe haben wir eine kubische Funktion gegeben, die
                einen Hochpunkt bei A(3|4) hat, die x-Achse bei x = -2 schneidet
                und die y-Achse bei y = 4. Indem wir die gegebenen Bedingungen
                in die allgemeine Funktionsgleichung einsetzen und die
                Gleichungen lösen, erhalten wir die Funktion f(x) = 0.4x³ - 3.6x
                + 4.
              </p>
              <p className="leading-8">
                In der ersten Aufgabe geht es darum, ein Kantenmodell eines
                Quaders mit möglichst großem Volumen aus einem 120 cm langen
                Draht herzustellen. Dabei soll eine Kante des Quaders dreimal so
                lang sein wie die anderen Kanten. Um das Problem zu lösen,
                betrachten wir zunächst die Hauptbedingung, die das Volumen
                maximieren soll. Die Volumenfunktion des Quaders lautet V(a, b,
                c) = abc, wobei a, b und c die Längen der Kanten des Quaders
                sind. Da die Funktion drei Unbekannte hat, können wir nicht
                direkt die Hochpunkte bestimmen. Um die Lösung zu finden,
                benötigen wir Nebenbedingungen. In der Aufgabenstellung ist
                angegeben, dass eine Kante des Quaders dreimal so lang wie eine
                der anderen Kanten ist. Daraus ergibt sich die Nebenbedingung a
                = 3b. Außerdem ist bekannt, dass der Draht eine Länge von 120 cm
                hat. Dadurch erhalten wir die Nebenbedingung 120 = 4a + 4b + 4c,
                wobei wir die erste Nebenbedingung direkt einsetzen können.
                Indem wir die Nebenbedingungen in die Hauptbedingung einsetzen,
                erhalten wir die Zielfunktion V(b) = 3b^2(30-4b). Diese Funktion
                hängt nur von der Variable b ab und kann leicht auf Extremwerte
                untersucht werden. Um die Extremwerte zu finden, nehmen wir die
                Ableitung der Zielfunktion V'(b) = 180b - 36b^2 und setzen sie
                gleich Null. Daraus ergibt sich die Gleichung 36b(5-b) = 0. Die
                Lösungen sind b_1 = 0 und b_2 = 5. Da ein dreidimensionaler
                Quader mit b = 0 nicht möglich ist, ist die richtige Lösung b =
                5. Durch Einsetzen von b in die Nebenbedingungen können wir die
                Längen der anderen Kanten a und c berechnen. Dabei erhalten wir
                a = 15 und c = 10. Nun kennen wir die Werte von a, b und c und
                können das maximale Volumen bestimmen, indem wir V = abc
                berechnen. Das maximale Volumen, das mit den gegebenen
                Bedingungen erreicht werden kann, beträgt 750 cm³. In der
                zweiten Aufgabe haben wir eine kubische Funktion gegeben, die
                einen Hochpunkt bei A(3|4) hat, die x-Achse bei x = -2 schneidet
                und die y-Achse bei y = 4. Indem wir die gegebenen Bedingungen
                in die allgemeine Funktionsgleichung einsetzen und die
                Gleichungen lösen, erhalten wir die Funktion f(x) = 0.4x³ - 3.6x
                + 4.
              </p>
              <p className="leading-8">
                In der ersten Aufgabe geht es darum, ein Kantenmodell eines
                Quaders mit möglichst großem Volumen aus einem 120 cm langen
                Draht herzustellen. Dabei soll eine Kante des Quaders dreimal so
                lang sein wie die anderen Kanten. Um das Problem zu lösen,
                betrachten wir zunächst die Hauptbedingung, die das Volumen
                maximieren soll. Die Volumenfunktion des Quaders lautet V(a, b,
                c) = abc, wobei a, b und c die Längen der Kanten des Quaders
                sind. Da die Funktion drei Unbekannte hat, können wir nicht
                direkt die Hochpunkte bestimmen. Um die Lösung zu finden,
                benötigen wir Nebenbedingungen. In der Aufgabenstellung ist
                angegeben, dass eine Kante des Quaders dreimal so lang wie eine
                der anderen Kanten ist. Daraus ergibt sich die Nebenbedingung a
                = 3b. Außerdem ist bekannt, dass der Draht eine Länge von 120 cm
                hat. Dadurch erhalten wir die Nebenbedingung 120 = 4a + 4b + 4c,
                wobei wir die erste Nebenbedingung direkt einsetzen können.
                Indem wir die Nebenbedingungen in die Hauptbedingung einsetzen,
                erhalten wir die Zielfunktion V(b) = 3b^2(30-4b). Diese Funktion
                hängt nur von der Variable b ab und kann leicht auf Extremwerte
                untersucht werden. Um die Extremwerte zu finden, nehmen wir die
                Ableitung der Zielfunktion V'(b) = 180b - 36b^2 und setzen sie
                gleich Null. Daraus ergibt sich die Gleichung 36b(5-b) = 0. Die
                Lösungen sind b_1 = 0 und b_2 = 5. Da ein dreidimensionaler
                Quader mit b = 0 nicht möglich ist, ist die richtige Lösung b =
                5. Durch Einsetzen von b in die Nebenbedingungen können wir die
                Längen der anderen Kanten a und c berechnen. Dabei erhalten wir
                a = 15 und c = 10. Nun kennen wir die Werte von a, b und c und
                können das maximale Volumen bestimmen, indem wir V = abc
                berechnen. Das maximale Volumen, das mit den gegebenen
                Bedingungen erreicht werden kann, beträgt 750 cm³. In der
                zweiten Aufgabe haben wir eine kubische Funktion gegeben, die
                einen Hochpunkt bei A(3|4) hat, die x-Achse bei x = -2 schneidet
                und die y-Achse bei y = 4. Indem wir die gegebenen Bedingungen
                in die allgemeine Funktionsgleichung einsetzen und die
                Gleichungen lösen, erhalten wir die Funktion f(x) = 0.4x³ - 3.6x
                + 4.
              </p>
            </article>
            <TOC />
          </div>{" "}
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
          orientation="vertical"
        >
          <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar
          className="flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner className="bg-blackA8" />
      </ScrollArea.Root>
    </div>
  );
};
