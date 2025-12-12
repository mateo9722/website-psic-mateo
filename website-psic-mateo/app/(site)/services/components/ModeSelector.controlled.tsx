"use client";

type Mode = "virtual" | "presencial";

interface Props {
    mode: Mode;
    setMode: (m: Mode) => void;
}

export default function ModeSelector({ mode, setMode }: Props) {
    return (
        <div className="flex justify-center gap-4">
            {(["virtual", "presencial"] as Mode[]).map((m) => (
                <button
                    key={m}
                    onClick={() => setMode(m)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all
                        ${
                        mode === m
                            ? "bg-[#FFBC7D] text-black shadow-md"
                            : "bg-[#E9F9F1] text-gray-700 border border-[#99DFBD]"
                    }
                    `}
                >
                    {m.charAt(0).toUpperCase() + m.slice(1)}
                </button>
            ))}
        </div>
    );
}