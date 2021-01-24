import { useContext, useMemo } from 'react';
import RootSelector from '../../contexts/awsui-theme-root-selector';
import Theme from '../../types/theme';
import cssVarMap from '../../utils/css-var-map';

interface State {
  className: string;
  css: string;
}

let instance = 0;

export default function useAwsuiTheme(theme: Theme): State {
  const rootSelector: null | string = useContext(RootSelector);

  const className: string = useMemo((): string => {
    instance++;
    return `awsui-theme-${instance}-${Date.now().toString(36)}`;
  }, []);

  const selector: string = useMemo((): string => {
    if (rootSelector === null) {
      return `.${className}`;
    }
    return rootSelector;
  }, [className, rootSelector]);

  const css: string = useMemo((): string => {
    const attributes: string[] = [];
    for (const [camelCase, value] of Object.entries(theme)) {
      const cssVars: string[] = cssVarMap.get(camelCase);
      for (const cssVar of cssVars) {
        attributes.push(`${cssVar}: ${value} !important;`);
      }
    }
    return `
      ${selector} {
        ${attributes.join('\n')};
      }
    `;
  }, [selector, theme]);

  return {
    className,
    css,
  };
}
