import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} — Study in Canada with expert guidance`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default social-share image for every page. TODO: refresh once the final logo exists. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0B4A57 0%, #0F5E6E 60%, #1F7A8C 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 72, height: 72, borderRadius: 18, background: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 26, height: 26, borderRadius: 13, background: "#E59A2F" }} />
          </div>
          <div style={{ fontSize: 40, fontWeight: 800 }}>{siteConfig.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05 }}>Your path to studying in Canada starts here</div>
          <div style={{ fontSize: 30, marginTop: 24, color: "#CFE3E6" }}>Admission guidance · Study permits · Licensed professionals</div>
        </div>
      </div>
    ),
    size,
  );
}
