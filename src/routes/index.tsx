import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

import collageMobile from "@/assets/collage-mobile.jpg";
import collageWide from "@/assets/collage-wide.jpg";
import { Motes } from "@/components/Motes";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ELOTV — Animated Worlds. Own Them Forever." },
      {
        name: "description",
        content:
          "Discover amazing animated movies and TV shows from talented creators. Purchase once and unlock forever, even if the Internet goes dark.",
      },
      { property: "og:title", content: "ELOTV — Animated Worlds. Own Them Forever." },
      {
        property: "og:description",
        content:
          "Discover amazing animated movies and TV shows from talented creators. Purchase once and unlock forever, even if the Internet goes dark.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-background">
      {/* Background artwork collage */}
      <div aria-hidden className="absolute inset-0">
        <img
          src={collageMobile}
          alt=""
          width={1088}
          height={1920}
          className="h-full w-full object-cover md:hidden"
        />
        <img
          src={collageWide}
          alt=""
          width={1920}
          height={1088}
          className="hidden h-full w-full object-cover md:block"
        />
      </div>

      {/* Dark purple / black cinematic overlays */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(120%_85%_at_50%_45%,oklch(0.18_0.06_300/0.35)_0%,oklch(0.10_0.04_292/0.68)_55%,oklch(0.05_0.02_285/0.9)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.06_0.02_285/0.72)_0%,oklch(0.09_0.04_295/0.35)_35%,oklch(0.07_0.03_290/0.5)_65%,oklch(0.04_0.01_285/0.88)_100%)]"
      />
      {/* Warm ember bloom low-center, like the reference */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[55%] bg-[radial-gradient(70%_100%_at_50%_100%,oklch(0.55_0.14_45/0.26)_0%,transparent_70%)]"
      />

      <Motes />

      {/* Content */}
      <section className="relative z-10 mx-auto flex w-full max-w-[22rem] flex-col items-center px-6 py-12 text-center sm:max-w-xl md:max-w-2xl md:py-14 lg:max-w-3xl xl:max-w-4xl">
        <h1 className="font-display font-extrabold tracking-tight">
          <span className="block whitespace-nowrap text-[clamp(1.4rem,7vw,2.5rem)] leading-[1.02] tracking-[-0.02em] text-foreground text-glow-white md:text-[clamp(2.5rem,5vw,3.75rem)] lg:text-[clamp(3rem,4.5vw,4.5rem)]">
            Animated Worlds.
          </span>
          <span className="mt-1 block whitespace-nowrap bg-[linear-gradient(180deg,oklch(0.89_0.13_92),oklch(0.79_0.15_62))] bg-clip-text text-[clamp(1rem,5vw,1.85rem)] leading-[1.08] tracking-[-0.02em] text-transparent text-glow-gold md:mt-2 md:text-[clamp(2.3rem,4.6vw,3.4rem)] lg:text-[clamp(2.75rem,4.1vw,4.05rem)]">
            Own Them Forever.
          </span>
        </h1>

        <p className="mt-6 max-w-[18rem] text-balance text-[0.875rem] leading-[1.7] text-muted-foreground sm:max-w-md sm:text-[0.9375rem] md:mt-7 md:max-w-xl md:text-base lg:max-w-2xl lg:text-lg lg:leading-[1.65]">
          Discover amazing animated movies and TV shows from talented creators. Purchase once and
          unlock forever even if the Internet goes dark
        </p>

        <div className="mt-7 flex w-full flex-col items-center md:mt-9">
          <span className="badge-glass inline-flex w-full max-w-[15rem] items-center justify-center gap-2 rounded-full px-4 py-2.5 sm:w-auto sm:max-w-none md:px-5 md:py-3">
            <Sparkles className="size-3 shrink-0 text-gold md:size-3.5" aria-hidden />
            <span className="text-[0.625rem] font-semibold tracking-[0.22em] text-gold md:text-[0.6875rem] lg:text-xs">
              INTRODUCING ELOTV
            </span>
          </span>

          <button
            type="button"
            onClick={(event) => event.preventDefault()}
            className="cta-gold mt-5 inline-flex w-full max-w-[12.5rem] items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-sm font-bold outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:max-w-[13.5rem] md:mt-7 md:py-3.5 md:text-base lg:max-w-[15rem] lg:text-lg"
          >
            Get Started
            <ArrowRight className="size-3.5 shrink-0 md:size-4" aria-hidden />
          </button>
        </div>
      </section>
    </main>
  );
}
