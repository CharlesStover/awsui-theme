/* istanbul ignore file */
// Screw coverage on this file. 🙃

const CSS_VAR = /^--/;

export default function getCssVars(): string[] {
  const cssVars: string[] = [];
  for (const sheet of Array.from(document.styleSheets)) {
    try {
      for (const rule of Array.from(sheet.rules)) {
        if (!(rule instanceof CSSStyleRule)) {
          continue;
        }
        if (rule.selectorText !== ':root') {
          continue;
        }
        try {
          for (const style of Array.from(rule.style)) {
            if (!CSS_VAR.test(style)) {
              continue;
            }
            cssVars.push(style);
          }
        } catch (_e) {
          continue;
        }
      }
    } catch (_e) {
      continue;
    }
  }
  return cssVars;
}
