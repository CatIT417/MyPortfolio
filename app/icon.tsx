import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
          fontSize: 34,
          fontWeight: 800,
          fontFamily: "sans-serif",
          backgroundImage: "linear-gradient(90deg, #6366f1, #c084fc)",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        CD
      </div>
    ),
    { ...size }
  );
}
