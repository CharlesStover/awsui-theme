import { useMemo } from 'react';
import Theme from '../../types/theme';
import cssVarMap from '../../utils/css-var-map';

interface State {
  className: string;
  css: string;
}

let instance = 0;

export default function useAwsuiTheme(theme: Theme): State {
  const className: string = useMemo((): string => {
    instance++;
    return `awsui-${instance}-${Date.now().toString(36)}`;
  }, []);

  const css: string = useMemo((): string => {
    const attributes: string[] = [];
    for (const [camelCase, value] of Object.entries(theme)) {
      const cssVars: string[] = cssVarMap.get(camelCase);
      for (const cssVar of cssVars) {
        attributes.push(`${cssVar}: ${value};`);
      }
    }
    return `
      .${className} {
        ${attributes.join('\n')};
      }
    `;
  }, [className, theme]);

  return {
    className,
    css,
  };
}
