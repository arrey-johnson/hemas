import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hemas Decor",
    short_name: "Hemas Decor",
    description:
      "Event decoration, rentals, and catering in Jacksonville, FL.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffcf8",
    theme_color: "#5c3d52",
  };
}
