import Image from "next/image";
import {
  ArrowDown01Icon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { SectionLabel } from "@/components/brand/section-label";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section id="inicio" className="scroll-mt-18 overflow-hidden">
      <div className="mx-auto max-w-[90rem] border-x">
        <div className="grid min-h-[calc(100svh-4.5rem)] lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:py-24">
            <SectionLabel index="01">Design · Engenharia · Produto</SectionLabel>

            <div className="my-auto py-14 lg:py-20">
              <h1 className="max-w-[11ch] text-[clamp(3.4rem,7.4vw,7.8rem)] leading-[0.87] font-medium tracking-[-0.065em] text-balance">
                Transformamos ideias em produtos digitais
                <span className="text-brand-blue">.</span>
              </h1>

              <div className="mt-10 grid gap-8 border-t pt-6 sm:grid-cols-[minmax(0,28rem)_auto] sm:items-end lg:mt-14">
                <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                  Combinamos pensamento estratégico, design e tecnologia para
                  criar produtos claros, úteis e preparados para crescer.
                </p>
                <a
                  href="#servicos"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "w-fit rounded-full bg-transparent"
                  )}
                >
                  Explorar
                  <HugeiconsIcon
                    icon={ArrowDown01Icon}
                    data-icon="inline-end"
                    strokeWidth={1.8}
                  />
                </a>
              </div>
            </div>

            <div className="flex items-center justify-between border-t pt-4 font-mono text-[0.62rem] tracking-[0.12em] text-muted-foreground uppercase">
              <span>Luanda · Angola</span>
              <span>Scroll para explorar</span>
            </div>
          </div>

          <div
            className="brand-grid-dark relative min-h-[34rem] overflow-hidden border-t bg-brand-black text-brand-white lg:min-h-full lg:border-t-0 lg:border-l"
            aria-hidden="true"
          >
            <div className="brand-blue-glow absolute top-[-8%] right-[-32%] h-[116%] w-3/4" />
            <div className="absolute inset-y-0 right-[18%] w-px bg-brand-blue/70 shadow-[0_0_32px_8px_rgba(79,70,255,0.42)]" />

            <span className="absolute top-6 left-6 font-mono text-[0.62rem] tracking-[0.18em] text-brand-white/44 uppercase sm:top-8 sm:left-8">
              Sistema / 01
            </span>
            <span className="absolute top-6 right-6 font-mono text-[0.62rem] text-brand-white/44 sm:top-8 sm:right-8">
              X 064 · Y 024
            </span>

            <Image
              src="/brand/illustra-mark-inverse.svg"
              alt=""
              width={288}
              height={432}
              className="absolute top-1/2 left-[44%] w-[12rem] -translate-x-1/2 -translate-y-1/2 opacity-95 sm:w-[15rem] lg:w-[17rem]"
            />

            <div className="absolute top-[22%] left-[15%] size-2 border border-brand-blue">
              <span className="absolute top-1/2 left-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 bg-brand-blue" />
              <span className="absolute top-1/2 left-1/2 h-6 w-px -translate-x-1/2 -translate-y-1/2 bg-brand-blue" />
            </div>

            <div className="absolute right-6 bottom-6 left-6 grid grid-cols-[1fr_auto] items-end border border-white/14 bg-brand-black/82 p-4 backdrop-blur-sm sm:right-8 sm:bottom-8 sm:left-8 sm:p-5">
              <div>
                <span className="font-mono text-[0.58rem] tracking-[0.18em] text-brand-blue uppercase">
                  Clareza em cada etapa
                </span>
                <p className="mt-2 max-w-[15rem] text-sm leading-5 text-brand-white/72">
                  Da estratégia ao produto em produção.
                </p>
              </div>
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                size={22}
                strokeWidth={1.5}
                className="text-brand-blue"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
