import * as getCssVars from '../utils/get-css-vars';
const MOCK_GET_CSS_VARS = jest.spyOn(getCssVars, 'default');

import cssVarMap from './css-var-map';

describe('mapCamelCaseToCssVars', (): void => {
  beforeEach((): void => {
    MOCK_GET_CSS_VARS.mockReturnValue(['--color-undefined']);
  });

  afterEach((): void => {
    MOCK_GET_CSS_VARS.mockClear();
  });

  it('should return known values', (): void => {
    expect(cssVarMap.get('colorBackgroundContainerContent')).not.toBeNull();
  });

  it('should return empty array for undefined values', (): void => {
    expect(cssVarMap.get('colorTest')).toStrictEqual([]);
  });
});
