import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { SectionLabel } from "@/components/brand/section-label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Work() {
  return (
    <section id="projectos" className="scroll-mt-18 border-t">
      <div className="mx-auto max-w-[90rem] border-x px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <SectionLabel index="03">Tipos de projecto</SectionLabel>

        <div className="mt-10 flex flex-col gap-6 border-b pb-10 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-[11ch] text-4xl leading-[0.98] font-medium tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Produtos que deixam marca.
          </h2>
          <p className="max-w-md text-base leading-7 text-muted-foreground lg:text-right">
            Sistemas visuais consistentes para produtos em que cada detalhe tem
            função — da primeira interacção à operação diária.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-12">
          <Card className="rounded-none bg-brand-black py-0 text-brand-white ring-0 lg:col-span-7">
            <div className="brand-grid-dark relative min-h-[30rem] overflow-hidden border-b border-white/10 p-6 sm:p-8">
              <span className="absolute top-8 left-8 size-2 bg-brand-blue" />
              <div className="brand-blue-glow absolute -right-44 -bottom-40 size-[34rem]" />
              <div className="absolute top-[18%] right-[14%] h-[70%] w-px bg-brand-blue shadow-[0_0_28px_7px_rgba(79,70,255,0.45)]" />

              <div className="absolute top-1/2 left-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2 border border-white/15 bg-brand-black/92 p-4 shadow-2xl backdrop-blur sm:p-6">
                <div className="flex items-center justify-between border-b border-white/12 pb-4">
                  <span className="text-sm font-medium">Painel operacional</span>
                  <span className="font-mono text-[0.58rem] text-brand-blue uppercase">
                    Live / 01
                  </span>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {["68%", "24", "9.4"].map((value, index) => (
                    <div key={value} className="border border-white/10 p-3">
                      <span className="font-mono text-[0.55rem] text-white/42">
                        0{index + 1}
                      </span>
                      <strong className="mt-6 block text-xl font-medium">
                        {value}
                      </strong>
                    </div>
                  ))}
                </div>
                <svg
                  viewBox="0 0 320 72"
                  className="mt-5 h-20 w-full"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 61L43 48L84 54L125 29L166 39L207 17L248 25L289 5L318 12"
                    stroke="#4F46FF"
                    strokeWidth="2"
                  />
                  <path d="M2 68H318" stroke="white" strokeOpacity=".12" />
                </svg>
              </div>
            </div>
            <CardHeader className="px-6 py-6 sm:px-8">
              <Badge className="rounded-full bg-brand-blue text-white">
                Produto digital
              </Badge>
              <CardTitle className="mt-3 flex items-center justify-between text-2xl text-brand-white">
                Plataformas operacionais
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  size={20}
                  className="text-brand-blue"
                />
              </CardTitle>
            </CardHeader>
          </Card>

          <Card className="rounded-none bg-card py-0 ring-0 lg:col-span-5">
            <div className="brand-grid relative min-h-[30rem] overflow-hidden border-b">
              <div className="absolute top-8 right-8 font-mono text-[0.6rem] tracking-[0.15em] text-brand-blue uppercase">
                Mobile first
              </div>
              <div className="absolute top-1/2 left-1/2 h-[78%] w-[48%] min-w-44 -translate-x-1/2 -translate-y-1/2 rounded-[2.2rem] border-[8px] border-brand-black bg-brand-white p-3 shadow-2xl">
                <div className="flex h-full flex-col overflow-hidden rounded-[1.45rem] border bg-brand-white">
                  <div className="flex items-center justify-between border-b p-3">
                    <span className="text-xs font-medium">illustra</span>
                    <span className="size-1.5 rounded-full bg-brand-blue" />
                  </div>
                  <div className="flex-1 p-4">
                    <span className="font-mono text-[0.5rem] text-brand-blue uppercase">
                      Experiência / 02
                    </span>
                    <p className="mt-3 text-xl leading-[1.05] font-medium tracking-tight">
                      Simples por fora. Sólido por dentro.
                    </p>
                    <div className="brand-dot-grid mt-8 h-24 border" />
                  </div>
                  <div className="grid grid-cols-3 border-t p-3">
                    <span className="mx-auto size-2 bg-brand-black" />
                    <span className="mx-auto size-2 border border-brand-black" />
                    <span className="mx-auto size-2 rounded-full bg-brand-blue" />
                  </div>
                </div>
              </div>
            </div>
            <CardContent className="px-6 py-6 sm:px-8">
              <Badge variant="outline" className="rounded-full">
                Aplicações mobile
              </Badge>
              <CardTitle className="mt-3 flex items-center justify-between text-2xl">
                Experiências essenciais
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  size={20}
                  className="text-brand-blue"
                />
              </CardTitle>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
