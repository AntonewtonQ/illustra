import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const socialImageAlt =
  "Illustra — Estratégia, design e engenharia de produtos digitais";
export const socialImageSize = { width: 1200, height: 630 };
export const socialImageContentType = "image/png";

const logo = await readFile(
  join(process.cwd(), "public/brand/illustra-logo-inverse.svg"),
  "base64"
);
const logoSource = `data:image/svg+xml;base64,${logo}`;

export function createSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#08080d",
          color: "#f5f3ee",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Arial, sans-serif",
          height: "100%",
          justifyContent: "space-between",
          padding: "64px 72px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={siteConfig.name}
            height="72"
            src={logoSource}
            style={{ height: "72px", width: "264px" }}
            width="264"
          />
          <div
            style={{
              color: "#a1a1aa",
              display: "flex",
              fontSize: 20,
              letterSpacing: "0.13em",
              textTransform: "uppercase",
            }}
          >
            Estúdio digital · Luanda
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 82,
              fontWeight: 600,
              letterSpacing: "-0.055em",
              lineHeight: 0.95,
              maxWidth: 980,
            }}
          >
            <div style={{ display: "flex" }}>Ideias transformadas em</div>
            <div style={{ display: "flex" }}>
              produtos digitais<span style={{ color: "#4f46ff" }}>.</span>
            </div>
          </div>
          <div
            style={{
              color: "#a1a1aa",
              display: "flex",
              fontSize: 25,
              marginTop: 32,
            }}
          >
            Estratégia · Design de produto · Engenharia de software
          </div>
        </div>

        <div
          style={{
            alignItems: "center",
            borderTop: "1px solid rgba(245, 243, 238, 0.18)",
            display: "flex",
            fontSize: 20,
            justifyContent: "space-between",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex" }}>illustra.site</div>
          <div
            style={{
              background: "#4f46ff",
              display: "flex",
              height: 14,
              width: 14,
            }}
          />
        </div>
      </div>
    ),
    socialImageSize
  );
}
