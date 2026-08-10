export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "python"
  | "googleadk"
  | "gemini"
  | "multiagent"
  | "mcp"
  | "fastapi"
  | "hitl"
  | "curses"
  | "wpm"
  | "filehandling"
  | "terminalui";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  python: "Python",
  googleadk: "Google ADK",
  gemini: "Gemini",
  multiagent: "Multi-Agent Systems",
  mcp: "MCP",
  fastapi: "FastAPI",
  hitl: "Human-in-the-Loop",
  curses: "Curses",
  wpm: "WPM Calculation",
  filehandling: "File Handling",
  terminalui: "Terminal UI",
} as const satisfies Record<TagVariant, string>;
