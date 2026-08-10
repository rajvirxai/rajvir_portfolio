import placeholder from "../../../assets/images/projects/smartfit/placeholder.png";

import type { ProjectContent } from "../../types";

export default {
  title: "SmartFit",
  theme: "dark",
  tags: ["python", "googleadk", "gemini", "multiagent", "mcp", "fastapi", "hitl"],
  videoBorder: false,
  source: "https://github.com/rajvirxai/smartfit.git",
  description:
    "An adaptive AI fitness and nutrition concierge built with a graph-based multi-agent architecture. It includes a security checkpoint, specialized fitness and nutrition agents, an MCP server for local data access, and a human-in-the-loop approval workflow.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: placeholder,
        alt: "SmartFit Preview",
        caption: "SmartFit Preview",
      },
    },
  ],
} as const satisfies ProjectContent;
