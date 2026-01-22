/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useMemo, useState } from "react";
import { Rocket, Sparkles, Timer, Waves, Zap } from "lucide-react";

type ThemeKey = "aurora" | "sunrise" | "midnight";

const THEMES: Record<
  ThemeKey,
  {
    label: string;
    accent: string;
    glow: string;
    ring: string;
    backdrop: string;
  }
> = {
  aurora: {
    label: "Aurora",
    accent: "from-emerald-300 via-sky-400 to-indigo-500",
    glow: "rgba(56, 189, 248, 0.3)",
    ring: "ring-sky-400/40",
    backdrop: "bg-gradient-to-br from-slate-900 via-slate-950 to-black",
  },
  sunrise: {
    label: "Sunrise",
    accent: "from-amber-200 via-rose-300 to-purple-400",
    glow: "rgba(251, 191, 36, 0.35)",
    ring: "ring-amber-300/40",
    backdrop: "bg-gradient-to-br from-rose-900 via-purple-900 to-slate-900",
  },
  midnight: {
    label: "Midnight",
    accent: "from-violet-300 via-purple-500 to-blue-400",
    glow: "rgba(139, 92, 246, 0.32)",
    ring: "ring-purple-400/40",
    backdrop: "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950",
  },
};

const cadences = [
  {
    id: "calm",
    label: "Calm cadence",
    description: "Soft echo with a mellow finish.",
  },
  {
    id: "excited",
    label: "Excited cadence",
    description: "Adds joyful emphasis and sparkle.",
  },
  {
    id: "chaotic",
    label: "Chaotic cadence",
    description: "All caps with punchy syncopation.",
  },
] as const;

type CadenceId = (typeof cadences)[number]["id"];

export default function Home() {
  const [echoes, setEchoes] = useState(4);
  const [cadence, setCadence] = useState<CadenceId>("excited");
  const [theme, setTheme] = useState<ThemeKey>("aurora");
  const [tempo, setTempo] = useState(120);
  const [waveIndex, setWaveIndex] = useState(0);

  const chant = useMemo(() => {
    const base = Array.from({ length: echoes }, (_, index) => {
      if (index === 0) return "Hi";
      if (index % 2 === 0) return "gi";
      return "hi";
    }).join("");

    if (cadence === "calm") {
      return `${base}~`;
    }

    if (cadence === "excited") {
      const emphasis = "!".repeat(Math.max(1, Math.min(3, Math.round(echoes / 3))));
      return `${base}${emphasis}`;
    }

    return `${base.toUpperCase()}!!!`;
  }, [echoes, cadence]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWaveIndex((prev) => (prev + 1) % 3);
    }, Math.max(180, 1200 - tempo * 6));

    return () => clearInterval(interval);
  }, [tempo]);

  return (
    <div className={`min-h-screen w-full overflow-hidden ${THEMES[theme].backdrop}`}>
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 py-16 sm:px-10 lg:px-16">
        <header className="flex flex-col gap-6 text-white sm:mt-8">
          <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm backdrop-blur-lg">
            <Sparkles size={16} className="text-white/90" />
            <span className="uppercase tracking-[0.2em] text-white/70">Higihihih Studio</span>
          </div>
          <h1 className="text-balance text-4xl font-medium tracking-tight text-white drop-shadow-2xl sm:text-5xl lg:text-6xl">
            Sculpt the ultimate <span className="font-semibold text-white/90">“Higihihih”</span> with
            rhythm, glow, and endless playful echoes.
          </h1>
          <p className="max-w-2xl text-lg text-white/70 sm:text-xl">
            Fine-tune the cadence, craft the vibe, and let the syllables shimmer. This micro-lab turns
            a simple greeting into a living, breathing soundscape.
          </p>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_40px_90px_-35px_rgba(14,165,233,0.35)] backdrop-blur-xl">
            <div
              className="pointer-events-none absolute inset-0 blur-3xl"
              style={{ background: THEMES[theme].glow }}
            />
            <div className="relative flex h-full flex-col gap-8 text-white">
              <div className="space-y-5">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">Chant Preview</p>
                <p
                  className={`bg-gradient-to-r bg-clip-text text-pretty text-4xl font-semibold leading-tight tracking-tight text-transparent sm:text-5xl lg:text-6xl ${THEMES[theme].accent}`}
                >
                  {chant}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="flex items-center gap-3 text-white/70">
                    <Waves size={20} className="text-white/60" />
                    <span className="text-sm uppercase tracking-[0.3em]">Echo power</span>
                  </div>
                  <p className="mt-3 text-3xl font-semibold text-white">{echoes}</p>
                  <p className="mt-2 text-sm text-white/60">
                    Each notch adds another syllable swirl to the signature wave.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="flex items-center gap-3 text-white/70">
                    <Timer size={20} className="text-white/60" />
                    <span className="text-sm uppercase tracking-[0.3em]">Tempo</span>
                  </div>
                  <p className="mt-3 text-3xl font-semibold text-white">{tempo} bpm</p>
                  <p className="mt-2 text-sm text-white/60">
                    Faster tempos tighten the cadence and sharpen the energy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-black/30 p-6 text-white backdrop-blur-xl">
            <h2 className="text-lg font-semibold tracking-tight">Control desk</h2>
            <div className="space-y-3">
              <label className="flex items-center justify-between text-sm text-white/60">
                Echo layers
                <span className="text-white/80">{echoes}</span>
              </label>
              <input
                type="range"
                min={2}
                max={12}
                value={echoes}
                onChange={(event) => setEchoes(Number(event.target.value))}
                className="h-1 w-full cursor-pointer appearance-none rounded-full bg-white/25 accent-white"
              />
            </div>

            <div className="space-y-3">
              <div className="text-sm text-white/60">Cadence</div>
              <div className="flex flex-col gap-2">
                {cadences.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setCadence(option.id)}
                    className={`flex flex-col gap-1 rounded-2xl border px-4 py-3 text-left transition ${
                      cadence === option.id
                        ? `border-white/50 bg-white/15 ${THEMES[theme].ring} backdrop-blur-lg`
                        : "border-white/10 bg-white/5 hover:border-white/30"
                    }`}
                  >
                    <span className="text-sm font-medium text-white">{option.label}</span>
                    <span className="text-xs text-white/60">{option.description}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-sm text-white/60">Tempo</div>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min={60}
                  max={180}
                  step={5}
                  value={tempo}
                  onChange={(event) => setTempo(Number(event.target.value))}
                  className="h-1 w-full cursor-pointer appearance-none rounded-full bg-white/25 accent-white"
                />
                <span className="w-12 text-right text-sm text-white/70">{tempo}</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-sm text-white/60">Vibe palette</div>
              <div className="flex flex-wrap gap-2">
                {Object.entries(THEMES).map(([key, value]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setTheme(key as ThemeKey)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      theme === key
                        ? "border-white/70 bg-white/10"
                        : "border-white/20 bg-white/5 hover:border-white/50"
                    }`}
                  >
                    {value.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-dashed border-white/15 bg-white/5 p-4">
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/50">
                <Zap size={14} className="text-white/70" />
                wave state
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                {
                  ["Tranquil shimmer engaged.", "Resonant pulse in motion.", "Vibrant echo peaking."][
                    waveIndex
                  ]
                }
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-white/80 backdrop-blur-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <Rocket className="text-white/70" size={24} />
            <h3 className="mt-4 text-xl font-semibold text-white">Launch your greeting</h3>
            <p className="mt-2 text-sm leading-relaxed">
              Export the chant as you tweak it—perfect for intros, notifications, or playful brand
              stingers.
            </p>
          </article>
          <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-white/80 backdrop-blur-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <Waves className="text-white/70" size={24} />
            <h3 className="mt-4 text-xl font-semibold text-white">Dial in the texture</h3>
            <p className="mt-2 text-sm leading-relaxed">
              Mix cadence and tempo to discover silky whispers, upbeat loops, or energetic bursts.
            </p>
          </article>
          <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-white/80 backdrop-blur-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <Sparkles className="text-white/70" size={24} />
            <h3 className="mt-4 text-xl font-semibold text-white">Share the spark</h3>
            <p className="mt-2 text-sm leading-relaxed">
              Post your favourite combo with #Higihihih and let friends hear the evolution of a
              greeting.
            </p>
          </article>
        </section>
      </div>

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="h-full w-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      </div>
    </div>
  );
}
