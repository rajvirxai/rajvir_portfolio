import placeholder from "../../../assets/images/projects/smartfit/placeholder.png";

import type { ProjectContent } from "../../types";

export default {
  title: "SmartFit",
  theme: "dark",
  tags: ["python", "googleadk", "gemini", "multiagent", "mcp", "fastapi", "hitl"],
  videoBorder: false,
  source: "https://github.com/rajvirxai/smartfit.git",
  description:
    "Ein adaptiver KI-Fitness- und Ernährungs-Concierge, entwickelt mit einer graphenbasierten Multi-Agenten-Architektur. Es umfasst einen Sicherheits-Checkpoint, spezialisierte Fitness- und Ernährungsagenten, einen MCP-Server für lokalen Datenzugriff und einen Human-in-the-Loop-Genehmigungsworkflow.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: placeholder,
        alt: "SmartFit Vorschau",
        caption: "SmartFit Vorschau",
      },
    },
  ],
} as const satisfies ProjectContent;
