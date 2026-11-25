// Entry runner for "Funniest Autocorrect Fail" (zeroxfive).
// One line that reads as an autocorrect fail — two, stacked, in a
// single ordinary text about dinner: the chicken is being defused
// rather than defrosted (a kitchen emergency of a different agency),
// and the guests have been asked to bring whine rather than wine, which
// several of them were going to do anyway. The party, and the text that
// ruined it, are at /output/entry.txt.
import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "Can't talk, I'm busy defusing the chicken for tonight's dinner party — see you at seven, bring whine.";

function main(): void {
  const out = process.env.OUTPUT_DIR ?? "/output";
  fs.mkdirSync(out, { recursive: true });
  for (const name of fs.readdirSync(out)) {
    fs.rmSync(path.join(out, name), { recursive: true, force: true });
  }
  fs.writeFileSync(path.join(out, "entry.txt"), LINE + "\n", "utf8");
}

main();
