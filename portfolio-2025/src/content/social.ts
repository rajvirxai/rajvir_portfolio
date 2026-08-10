export const social = [
  { url: "mailto:rajvirx.ai@gmail.com", name: "mail" },
  { url: "https://github.com/rajvirxai", name: "github" },
  { url: "https://www.linkedin.com/in/ra7vir", name: "linkedin" },
  { url: "https://x.com/Ra7vir", name: "x" },
  //{ url: "https://www.instagram.com/rajvirxai/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
