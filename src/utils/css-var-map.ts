import * as componentsTokens from '@awsui/components-react/internal/generated/styles/tokens';
import * as designTokens from '@awsui/design-tokens';
import * as getCssVarsUtil from '../utils/get-css-vars';
import mapColorToVar from '../utils/map-color-to-var';
import mapKebabCaseToCamelCase from '../utils/map-kebab-case-to-camel-case';

const { default: getCssVars } = getCssVarsUtil;

/*
Scan component tokens (most complete list) and design tokens (ones actually
  mounted) in case the two packages are desyned in version number.
*/

class CssVarMap {
  private _firstRun = true;
  private _map: Map<string, Set<string>> = new Map();

  private _init(): void {
    // Use the exported variable names as camel case. For variables with hyphens
    //   in their hash, these camel case names are the most accurate.
    for (const [camelCase, color] of Object.entries(componentsTokens)) {
      const cssVar: string = mapColorToVar(color);
      this._push(camelCase, cssVar);
    }
    for (const [camelCase, color] of Object.entries(designTokens)) {
      const cssVar: string = mapColorToVar(color);
      this._push(camelCase, cssVar);
    }

    // In case exported variable names are minified or changed, use the variable
    //   name as the source of truth.
    for (const color of Object.values(componentsTokens)) {
      const cssVar: string = mapColorToVar(color);
      this._pushCssVar(cssVar);
    }

    for (const color of Object.values(designTokens)) {
      const cssVar: string = mapColorToVar(color);
      this._pushCssVar(cssVar);
    }

    // Read CSS variables from the document.
    const cssVars: string[] = getCssVars();
    for (const cssVar of cssVars) {
      this._pushCssVar(cssVar);
    }

    console.log(this._map);
  }

  private _push(camelCase: string, cssVar: string): void {
    const cssVars: Set<string> | undefined = this._map.get(camelCase);
    if (typeof cssVars === 'undefined') {
      this._map.set(camelCase, new Set([cssVar]));
    }

    // istanbul ignore else
    else {
      cssVars.add(cssVar);
    }
  }

  private _pushCssVar(cssVar: string): void {
    // Since a CSS var's random hash may contain hyphens, generate camelCase
    //   for every hyphenated substring.
    const words: string[] = cssVar.substring(2).split('-');
    const wordsCount: number = words.length;
    for (let i = 1; i < wordsCount; i++) {
      const partialCssVar: string = words.slice(0, i).join('-');
      const partialCamelCase: string = mapKebabCaseToCamelCase(partialCssVar);
      this._push(partialCamelCase, cssVar);
    }
  }

  public get(camelCase: string): string[] {
    if (this._firstRun) {
      this._firstRun = false;
      this._init();
    }
    const cssVars: Set<string> | undefined = this._map.get(camelCase);
    if (typeof cssVars === 'undefined') {
      return [];
    }
    return Array.from(cssVars);
  }
}

export default new CssVarMap();
