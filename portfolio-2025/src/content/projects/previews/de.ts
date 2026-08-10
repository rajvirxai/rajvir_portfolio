import thumbnailSmartFit from "../../../assets/images/projects/smartfit/placeholder.png";
import thumbnailTypingSpeedTest from "../../../assets/images/projects/typing/placeholder.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "SmartFit",
    slug: "smartfit",
    thumbnail: thumbnailSmartFit,
    description: "KI Fitness Concierge",
  },
  {
    title: "Typing Speed Test",
    slug: "typing-speed-test",
    thumbnail: thumbnailTypingSpeedTest,
    description: "Terminal-basierter Tippgeschwindigkeitstest",
  },
] as const satisfies ProjectPreview[];
