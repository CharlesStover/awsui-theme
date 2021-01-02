import mapColorToVar from './map-color-to-var';

describe('mapColorToVar', (): void => {
  it('should return variables', (): void => {
    expect(mapColorToVar('var(--color-xyz)')).toBe('--color-xyz');
    expect(mapColorToVar('var(--color-xyz, #ffffff')).toBe('--color-xyz');
  });

  it('should return non-variables as-is', (): void => {
    expect(mapColorToVar('red')).toBe('red');
  });
});
