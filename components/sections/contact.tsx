import {
  ArrowUpRight01Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { BrandLogo } from "@/components/brand/brand-logo";
import { SectionLabel } from "@/components/brand/section-label";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-18 border-t">
      <div className="mx-auto max-w-[90rem] border-x">
        <div className="grid lg:grid-cols-[1fr_18rem]">
          <div className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
            <SectionLabel index="05">Começar um projecto</SectionLabel>
            <h2 className="mt-10 max-w-[12ch] text-5xl leading-[0.92] font-medium tracking-[-0.055em] sm:text-7xl lg:text-[6.75rem]">
              Vamos construir algo que importa
              <span className="text-brand-blue">.</span>
            </h2>
            <p className="mt-8 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Conte-nos o desafio, o contexto e onde quer chegar. Nós ajudamos a
              transformar o próximo passo num produto claro e executável.
            </p>
            <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${siteConfig.email}`}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 rounded-full px-6"
                )}
              >
                {siteConfig.email}
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  data-icon="inline-end"
                  strokeWidth={1.8}
                />
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 rounded-full bg-transparent px-6"
                )}
              >
                <HugeiconsIcon
                  icon={WhatsappIcon}
                  data-icon="inline-start"
                  strokeWidth={1.8}
                />
                WhatsApp · +244 943 670 112
              </a>
            </div>
          </div>

          <div className="brand-dot-grid relative hidden overflow-hidden border-l lg:block">
            <BrandLogo
              markOnly
              className="absolute top-1/2 left-1/2 w-28 -translate-x-1/2 -translate-y-1/2"
            />
            <span className="absolute top-10 right-10 size-2 bg-brand-blue" />
            <span className="absolute right-10 bottom-10 font-mono text-[0.6rem] tracking-[0.14em] text-muted-foreground uppercase [writing-mode:vertical-rl]">
              Quiet confidence in product building
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
