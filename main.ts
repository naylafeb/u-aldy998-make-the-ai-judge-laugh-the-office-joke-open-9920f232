import * as fs from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const JOKE =
  "I asked IT to fix my slow laptop, so they sent me a ticket to fix the ticketing system — it's been pending since 2019, right next to my raise.";

fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.writeFileSync(`${OUTPUT_DIR}/${OUTPUT_FILE}`, JOKE, "utf8");
