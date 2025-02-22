import { atom, useAtom } from "jotai";
import { useEffect } from "react";

const pictures = [
  "imc2",
  "Imc1",
  "masq",
  "masq2",
  "masq3",
  "imc3",
  "imc5",
  "imc6",
  "imc7",
  "imc2",
  "masq",
  "masq3",
  "imc3",
  "imc6",
  "imc7",
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "wmc",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "djbc",
});

export const slideAtom = atom(0);

export function UI() {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    const audio = new Audio("/audios/page-flip-01a.mp3");
    audio.play();
  }, [page]);

  // Add one more page for additional dot
  const totalPages = [...pages, { front: "extra", back: "extra" }];

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 pointer-events-none">
      <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2">
        <div className="flex flex-wrap gap-3 pointer-events-auto max-w-[80vw] justify-center 
          backdrop-blur-sm bg-white/5 px-6 py-3 rounded-full border border-white/10">
          {totalPages.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 
                ${page === i 
                  ? "bg-gradient-to-r from-cyan-400 to-blue-500 scale-110 shadow-lg shadow-cyan-500/50" 
                  : "bg-white/30 hover:bg-white/50 hover:scale-105"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
