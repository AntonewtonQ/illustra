import { SectionLabel } from "@/components/brand/section-label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const steps = [
  {
    index: "01",
    title: "Descobrir",
    description:
      "Alinhamos contexto, objectivos e prioridades para resolver o problema certo.",
  },
  {
    index: "02",
    title: "Desenhar",
    description:
      "Transformamos estratégia em fluxos, interfaces e um sistema visual coerente.",
  },
  {
    index: "03",
    title: "Construir",
    description:
      "Engenharia, validação e evolução contínua até um produto sólido em produção.",
  },
];

export function Approach() {
  return (
    <section
      id="sobre"
      className="scroll-mt-18 bg-brand-black text-brand-white"
    >
      <div className="brand-grid-dark mx-auto grid max-w-[90rem] border-x border-white/10 lg:grid-cols-2">
        <div className="relative overflow-hidden border-b border-white/10 px-5 py-16 sm:px-8 sm:py-20 lg:border-r lg:border-b-0 lg:px-12 lg:py-28">
          <SectionLabel index="04" inverse>
            Como trabalhamos
          </SectionLabel>
          <h2 className="mt-10 max-w-[10ch] text-4xl leading-[0.98] font-medium tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Método claro. Execução precisa.
          </h2>
          <p className="mt-8 max-w-md text-base leading-7 text-brand-white/58 sm:text-lg sm:leading-8">
            Uma equipa próxima, decisões visíveis e ciclos curtos. Cada etapa
            reduz incerteza e aproxima o produto do seu valor real.
          </p>

          <div className="mt-14 flex flex-wrap gap-2">
            {["Tecnologia", "Precisão", "Simplicidade", "Criatividade"].map(
              (value) => (
                <Badge
                  key={value}
                  variant="outline"
                  className="rounded-full border-white/20 bg-white/5 px-3 text-brand-white"
                >
                  {value}
                </Badge>
              )
            )}
          </div>

          <div className="brand-blue-glow absolute -right-64 -bottom-72 size-[34rem] opacity-60" />
        </div>

        <div className="flex flex-col bg-brand-black/86 px-5 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-20">
          {steps.map((step, index) => (
            <div key={step.index} className="flex flex-1 flex-col justify-center py-8">
              <div className="grid gap-5 sm:grid-cols-[4rem_1fr]">
                <span className="font-mono text-xs tracking-[0.14em] text-brand-blue">
                  / {step.index}
                </span>
                <div>
                  <h3 className="text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-md leading-7 text-brand-white/52">
                    {step.description}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 ? (
                <Separator className="mt-8 bg-white/12" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
