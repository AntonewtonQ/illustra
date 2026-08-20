import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { BrandLogo } from "@/components/brand/brand-logo";

export function SiteFooter() {
  return (
    <footer className="bg-brand-black text-brand-white">
      <div className="mx-auto grid max-w-[90rem] gap-10 border-x border-white/10 px-5 py-10 sm:px-8 lg:grid-cols-[1fr_auto] lg:px-12 lg:py-12">
        <div>
          <BrandLogo inverse priority className="w-36" />
          <p className="mt-5 max-w-xs text-sm leading-6 text-brand-white/56">
            Estratégia, design e engenharia para produtos digitais que fazem
            sentido.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm sm:grid-cols-3">
          <a className="transition-colors hover:text-brand-blue" href="#servicos">
            Serviços
          </a>
          <a className="transition-colors hover:text-brand-blue" href="#projectos">
            Projectos
          </a>
          <a className="transition-colors hover:text-brand-blue" href="#sobre">
            Sobre
          </a>
          <a
            className="inline-flex items-center gap-1 transition-colors hover:text-brand-blue"
            href="#contacto"
          >
            Contacto
            <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} />
          </a>
          <a
            className="inline-flex items-center gap-1 transition-colors hover:text-brand-blue"
            href="#inicio"
          >
            Voltar ao topo
            <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} />
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-[90rem] flex-col gap-2 border-x border-t border-white/10 px-5 py-5 text-[0.65rem] tracking-[0.14em] text-brand-white/38 uppercase sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <span>Illustra — Estúdio digital de produtos</span>
        <span>© {new Date().getFullYear()} Todos os direitos reservados</span>
      </div>
    </footer>
  );
}
