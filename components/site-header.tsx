import {
  ArrowUpRight01Icon,
  Menu01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { BrandLogo } from "@/components/brand/brand-logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "Serviços", href: "#servicos" },
  { label: "Projectos", href: "#projectos" },
  { label: "Sobre", href: "#sobre" },
];

const navLinkClass =
  "text-sm font-medium text-foreground/66 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/92 backdrop-blur-xl supports-[backdrop-filter]:bg-background/82">
      <div className="mx-auto flex h-18 max-w-[90rem] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="#inicio"
          aria-label="Illustra — página inicial"
          className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
        >
          <BrandLogo priority />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className={navLinkClass}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contacto"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-10 rounded-full px-5"
            )}
          >
            Fale connosco
            <HugeiconsIcon
              icon={ArrowUpRight01Icon}
              data-icon="inline-end"
              strokeWidth={1.8}
            />
          </a>
        </div>

        <details className="group relative lg:hidden">
          <summary
            className={cn(
              buttonVariants({ variant: "outline", size: "icon" }),
              "cursor-pointer list-none rounded-full [&::-webkit-details-marker]:hidden"
            )}
            aria-label="Abrir menu"
          >
            <HugeiconsIcon icon={Menu01Icon} strokeWidth={1.8} />
          </summary>
          <nav
            className="absolute right-0 mt-3 flex w-64 flex-col gap-1 rounded-xl border bg-popover p-2 shadow-xl"
            aria-label="Menu móvel"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              className={cn(
                buttonVariants(),
                "mt-1 w-full justify-between rounded-lg"
              )}
            >
              Fale connosco
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                data-icon="inline-end"
                strokeWidth={1.8}
              />
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
