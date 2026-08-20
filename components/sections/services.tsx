import {
  ArrowUpRight01Icon,
  CodeIcon,
  ComputerProgramming01Icon,
  SmartPhone01Icon,
  WebDesign01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { SectionLabel } from "@/components/brand/section-label";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    index: "01",
    title: "Softwares personalizados",
    description:
      "Soluções sob medida para processos complexos, operações críticas e decisões mais rápidas.",
    icon: ComputerProgramming01Icon,
  },
  {
    index: "02",
    title: "Websites e plataformas",
    description:
      "Experiências rápidas, acessíveis e desenhadas para converter atenção em confiança.",
    icon: WebDesign01Icon,
  },
  {
    index: "03",
    title: "Aplicações web",
    description:
      "Produtos robustos que simplificam fluxos, conectam dados e crescem com o negócio.",
    icon: CodeIcon,
  },
  {
    index: "04",
    title: "Apps mobile",
    description:
      "Aplicações intuitivas para iOS e Android, pensadas para o contexto real de uso.",
    icon: SmartPhone01Icon,
  },
];

export function Services() {
  return (
    <section id="servicos" className="scroll-mt-18 border-t">
      <div className="mx-auto max-w-[90rem] border-x">
        <div className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
          <SectionLabel index="02">O que fazemos</SectionLabel>
          <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-end">
            <h2 className="max-w-[12ch] text-4xl leading-[0.98] font-medium tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Soluções digitais que geram valor.
            </h2>
            <p className="max-w-lg text-base leading-7 text-muted-foreground lg:justify-self-end lg:text-lg lg:leading-8">
              Entramos no problema certo, alinhamos negócio e utilizadores e
              transformamos complexidade em experiências simples.
            </p>
          </div>
        </div>

        <div className="grid border-t md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <Card
              key={service.index}
              className="group min-h-[25rem] rounded-none bg-transparent py-8 ring-0 transition-colors hover:bg-card md:border-r md:last:border-r-0 xl:min-h-[30rem]"
            >
              <CardHeader className="px-6 sm:px-8">
                <div className="flex size-12 items-center justify-center border bg-background transition-colors group-hover:border-brand-blue group-hover:text-brand-blue">
                  <HugeiconsIcon
                    icon={service.icon}
                    size={22}
                    strokeWidth={1.5}
                  />
                </div>
                <CardAction className="font-mono text-[0.65rem] tracking-[0.12em] text-brand-blue">
                  / {service.index}
                </CardAction>
              </CardHeader>
              <CardContent className="mt-auto px-6 sm:px-8">
                <CardTitle className="max-w-[13ch] text-2xl leading-tight tracking-[-0.03em]">
                  {service.title}
                </CardTitle>
                <CardDescription className="mt-4 max-w-xs leading-6">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="px-6 sm:px-8">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Falar sobre o projecto
                  <HugeiconsIcon
                    icon={ArrowUpRight01Icon}
                    size={16}
                    strokeWidth={1.7}
                  />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
