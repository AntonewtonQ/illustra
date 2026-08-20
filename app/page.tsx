import { Approach } from "@/components/sections/approach";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Work } from "@/components/sections/work";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Work />
        <Approach />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
