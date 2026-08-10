import thumbnailSmartFit from "../../../assets/images/projects/smartfit/placeholder.png";
import thumbnailTypingSpeedTest from "../../../assets/images/projects/typing/placeholder.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "SmartFit",
    slug: "smartfit",
    thumbnail: thumbnailSmartFit,
    description: "AI Fitness Concierge",
  },
  {
    title: "Typing Speed Test",
    slug: "typing-speed-test",
    thumbnail: thumbnailTypingSpeedTest,
    description: "Terminal-based typing speed test",
  },
] as const satisfies ProjectPreview[];
