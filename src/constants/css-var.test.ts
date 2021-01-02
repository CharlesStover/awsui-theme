import CSS_VAR from './css-var';

describe('CSS_VAR', (): void => {
  it('should match CSS variables', (): void => {
    expect(CSS_VAR.test('var(--color-xyz)')).toBe(true);
  });

  it('should match CSS variables with fallbacks', (): void => {
    expect(CSS_VAR.test('var(--color-xyz, #ffffff)')).toBe(true);
  });
});
