/**
 * scripts/replace-size-classes.js
 *
 * Run from project root:
 *   node scripts/replace-size-classes.js
 *
 * This will replace occurrences like `size-28` in all files under src/
 * according to the mapping object below.
 *
 * IMPORTANT: commit before running so you can review and revert if needed.
 */

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const src = path.join(root, "src");

// update mapping here if you want different sizes
const mapping = {
  "28": "w-28 h-28",
  "14": "w-14 h-14",
  "12": "w-12 h-12",
  "11": "w-12 h-12",
  "10": "w-10 h-10",
  "8":  "w-8 h-8",
  "6":  "w-6 h-6",
  "4":  "w-4 h-4",
  "2":  "w-2 h-2",
  // fractional fallback
  "1.5":"w-4 h-4",
  "1":"w-3 h-3"
};

const exts = [".js", ".jsx", ".ts", ".tsx", ".html"];

function walk(dir) {
  const files = [];
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      files.push(...walk(full));
    } else {
      if (exts.includes(path.extname(full))) files.push(full);
    }
  }
  return files;
}

function replaceInFile(file) {
  let srcText = fs.readFileSync(file, "utf8");
  let replaced = srcText;
  // regex finds size-<num> or size-<num>.<num>
  replaced = replaced.replace(/size-([0-9]+(?:\.[0-9]+)?)/g, (m, num) => {
    // if exact match exists in mapping
    if (mapping[num]) return mapping[num];
    // try integer part
    const int = Math.floor(Number(num)).toString();
    if (mapping[int]) return mapping[int];
    // fallback: convert to nearest integer mapping if exists
    return `w-${int} h-${int}`;
  });

  if (replaced !== srcText) {
    fs.writeFileSync(file, replaced, "utf8");
    console.log("Updated:", file);
    return true;
  }
  return false;
}

console.log("Scanning", src);
const files = walk(src);
let count = 0;
for (const f of files) {
  try {
    if (replaceInFile(f)) count++;
  } catch (e) {
    console.error("ERR on file", f, e);
  }
}
console.log(`Done. Files updated: ${count}`);
console.log("Now run `git status` / `git diff` to review changes.");
