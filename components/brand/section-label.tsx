import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionLabelProps = {
  index: string;
  children: React.ReactNode;
  className?: string;
  inverse?: boolean;
};

export function SectionLabel({
  index,
  children,
  className,
  inverse = false,
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-[0.65rem] font-semibold tracking-[0.18em] uppercase",
        inverse ? "text-brand-white/64" : "text-muted-foreground",
        className
      )}
    >
      <Badge className="h-5 rounded-full bg-brand-blue px-2 font-mono text-[0.6rem] tracking-normal text-white">
        {index}
      </Badge>
      <span>{children}</span>
      <span className="h-px w-5 bg-brand-blue" aria-hidden="true" />
    </div>
  );
}
