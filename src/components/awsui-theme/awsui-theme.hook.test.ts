import { renderHook } from '@testing-library/react-hooks';
import TestAwsuiThemeRootSelectorProvider from '../../test-utils/test-awsui-theme-root-selector-provider';
import useAwsuiTheme from './awsui-theme.hook';

describe('useAwsuiTheme', (): void => {
  it('should use the root selector if present', (): void => {
    const { result } = renderHook(useAwsuiTheme, {
      initialProps: Object.create(null),
      wrapper: TestAwsuiThemeRootSelectorProvider,
    });
    expect(result.current.css).toMatch(/\.test-awsui-theme-root {/);
  });

  it('should use a unique class name if no root selector is present', (): void => {
    const { result } = renderHook(useAwsuiTheme, {
      initialProps: Object.create(null),
    });
    expect(result.current.css).toMatch(/\.awsui-theme-\d+-[a-z0-9]+ {/);
  });

  it('should return a unique class name', (): void => {
    const { result: result1 } = renderHook(useAwsuiTheme, {
      initialProps: Object.create(null),
    });
    const { result: result2 } = renderHook(useAwsuiTheme, {
      initialProps: Object.create(null),
    });
    expect(result1.current.className).not.toBe(result2.current.className);
  });

  it('should return CSS variables', (): void => {
    const { result } = renderHook(useAwsuiTheme, {
      initialProps: {
        colorBackgroundContainerContent: 'red',
      },
    });
    expect(result.current.css).toMatch(
      /--color-background-container-content-[\w-]+: red !important;/,
    );
  });

  it('should ignore unknown properties', (): void => {
    const { result } = renderHook(useAwsuiTheme, {
      initialProps: {
        ['colorTest' as 'colorBackgroundContainerContent']: 'red',
      },
    });
    expect(result.current.css).toMatch(/{\s*;\s*}/);
  });
});
