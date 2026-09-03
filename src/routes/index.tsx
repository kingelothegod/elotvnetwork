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
        className="absolute inset-0 bg-[radial-gradient(120%_85%_at_50%_45%,oklch(0.16_0.05_300/0.72)_0%,oklch(0.09_0.03_290/0.92)_55%,oklch(0.04_0.01_285/0.98)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.05_0.02_285/0.92)_0%,oklch(0.08_0.03_295/0.5)_35%,oklch(0.06_0.02_290/0.7)_65%,oklch(0.03_0.01_285/0.97)_100%)]"
      />
      {/* Warm ember bloom low-center, like the reference */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[55%] bg-[radial-gradient(70%_100%_at_50%_100%,oklch(0.55_0.14_45/0.32)_0%,transparent_70%)]"
      />

      <Motes />

      {/* Content */}
      <section className="relative z-10 mx-auto flex w-full max-w-[26rem] flex-col items-center px-6 py-16 text-center sm:max-w-2xl md:max-w-3xl md:py-20 lg:max-w-5xl xl:max-w-6xl">
        <h1 className="font-display font-extrabold tracking-tight">
          <span className="block text-[clamp(2.75rem,12.5vw,4rem)] leading-[1.02] text-foreground text-glow-white md:text-[clamp(4rem,7.5vw,6rem)] lg:text-[clamp(5rem,6.5vw,7.5rem)]">
            Animated Worlds.
          </span>
          <span className="mt-2 block bg-[linear-gradient(180deg,oklch(0.89_0.13_92),oklch(0.79_0.15_62))] bg-clip-text text-[clamp(2.4rem,11vw,3.6rem)] leading-[1.05] text-transparent text-glow-gold md:mt-3 md:text-[clamp(3.6rem,6.8vw,5.4rem)] lg:text-[clamp(4.5rem,5.9vw,6.75rem)]">
            Own Them Forever.
          </span>
        </h1>

        <p className="mt-8 max-w-[22rem] text-balance text-[1.0625rem] leading-[1.75] text-muted-foreground sm:max-w-xl sm:text-lg md:mt-10 md:max-w-2xl md:text-xl lg:max-w-3xl lg:text-2xl lg:leading-[1.7]">
          Discover amazing animated movies and TV shows from talented creators. Purchase once and
          unlock forever even if the Internet goes dark
        </p>

        <div className="mt-10 flex w-full flex-col items-center md:mt-12">
          <span className="badge-glass inline-flex w-full max-w-[20rem] items-center justify-center gap-3 rounded-full px-6 py-4 sm:w-auto sm:max-w-none md:px-8 md:py-4.5">
            <Sparkles className="size-4 shrink-0 text-gold md:size-5" aria-hidden />
            <span className="text-[0.8125rem] font-semibold tracking-[0.22em] text-gold md:text-sm lg:text-base">
              INTRODUCING ELOTV
            </span>
          </span>

          <button
            type="button"
            onClick={(event) => event.preventDefault()}
            className="cta-gold mt-8 inline-flex w-full max-w-[17rem] items-center justify-center gap-3 rounded-full px-8 py-5 font-display text-xl font-bold outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:max-w-[19rem] md:mt-10 md:py-6 md:text-2xl lg:max-w-[21rem] lg:text-[1.75rem]"
          >
            Get Started
            <ArrowRight className="size-5 shrink-0 md:size-6" aria-hidden />
          </button>
        </div>
      </section>
    </main>
  );
}
