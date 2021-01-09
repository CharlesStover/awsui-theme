import mapKebabCaseToCamelCase from './map-kebab-case-to-camel-case';

describe('mapKebabCaseToCamelCase', (): void => {
  it('it should map kebab-case to camelCase', (): void => {
    expect(mapKebabCaseToCamelCase('test-string')).toBe('testString');
  });
});
