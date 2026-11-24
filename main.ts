import * as fs from "node:fs";
import * as path from "node:path";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";

function buildJoke(): string {
  const setup = "I asked IT to fix my slow laptop, ";
  const twist = "so they sent me a ticket to fix the ticketing system — ";
  const punchline = "it's been pending since 2019, right next to my raise.";
  return setup + twist + punchline;
}

function entryPath(dir: string, file: string): string {
  return path.join(dir, file);
}

function writeEntry(filePath: string, text: string): void {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, text, "utf8");
}

function main(): void {
  const joke = buildJoke();
  writeEntry(entryPath(OUTPUT_DIR, OUTPUT_FILE), joke);
}

main();
