import placeholder from "../../../assets/images/projects/typing/placeholder.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Typing Speed Test",
  theme: "dark",
  tags: ["python", "curses", "wpm", "filehandling", "terminalui"],
  videoBorder: false,
  source: "https://github.com/rajvirxai/typing-speed-test-python.git",
  description:
    "A Python terminal-based typing speed test built with the curses library. It supports random text selection, real-time WPM calculation, color-coded correct and incorrect characters, backspace support, multiple rounds, and ESC to exit.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: placeholder,
        alt: "Typing Speed Test Preview",
        caption: "Typing Speed Test Preview",
      },
    },
  ],
} as const satisfies ProjectContent;
