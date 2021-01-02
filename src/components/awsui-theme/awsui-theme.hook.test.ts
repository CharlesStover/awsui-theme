import { renderHook } from '@testing-library/react-hooks';
import useAwsuiTheme from './awsui-theme.hook';

describe('useAwsuiTheme', (): void => {
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
        backgroundContainerContent: 'red',
      },
    });
    expect(result.current.css).toMatch(
      /--color-background-container-content-[\w-]+: red;/,
    );
  });
});
