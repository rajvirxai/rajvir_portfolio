import placeholder from "../../../assets/images/projects/typing/placeholder.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Typing Speed Test",
  theme: "dark",
  tags: ["python", "curses", "wpm", "filehandling", "terminalui"],
  videoBorder: false,
  source: "https://github.com/rajvirxai/typing-speed-test-python.git",
  description:
    "Ein Python-terminalbasierter Tippgeschwindigkeitstest, der mit der curses-Bibliothek erstellt wurde. Es unterstützt zufällige Textauswahl, Echtzeit-WPM-Berechnung, farbcodierte richtige und falsche Zeichen, Backspace-Unterstützung, mehrere Runden und ESC zum Beenden.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: placeholder,
        alt: "Typing Speed Test Vorschau",
        caption: "Typing Speed Test Vorschau",
      },
    },
  ],
} as const satisfies ProjectContent;
