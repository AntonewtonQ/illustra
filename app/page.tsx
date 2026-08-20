import { Approach } from "@/components/sections/approach";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Work } from "@/components/sections/work";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

const organizationId = `${siteConfig.url}/#organization`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      email: siteConfig.email,
      telephone: siteConfig.telephone,
      logo: `${siteConfig.url}/brand/illustra-icon.svg`,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: siteConfig.email,
        telephone: siteConfig.telephone,
        areaServed: siteConfig.address.country,
        availableLanguage: ["Portuguese"],
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.address.locality,
        addressCountry: siteConfig.address.country,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: siteConfig.language,
      publisher: { "@id": organizationId },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />
      <main id="conteudo">
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
