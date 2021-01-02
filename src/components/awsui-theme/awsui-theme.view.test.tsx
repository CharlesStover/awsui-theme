import * as useAwsuiTheme from './awsui-theme.hook';
const MOCK_USE_AWSUI_THEME = jest.spyOn(useAwsuiTheme, 'default');

import { render } from '@testing-library/react';
import AwsuiTheme from '../..';

const TEST_CLASS_NAME = 'test-class-name';
const TEST_CSS = '.test-css {}';

describe('AwsuiTheme', (): void => {
  beforeEach((): void => {
    MOCK_USE_AWSUI_THEME.mockReturnValue({
      className: TEST_CLASS_NAME,
      css: TEST_CSS,
    });
  });

  afterEach((): void => {
    MOCK_USE_AWSUI_THEME.mockClear();
  });

  it('should mount a stylesheet', (): void => {
    const { container } = render(<AwsuiTheme />);
    const styleCollection: HTMLCollectionOf<HTMLStyleElement> = container.getElementsByTagName(
      'style',
    );
    const style: HTMLStyleElement | null = styleCollection.item(0);
    if (style === null) {
      throw new Error('Expected style sheet to exist.');
    }
    expect(style.innerHTML).toBe(TEST_CSS);
  });

  it('should wrap its children in a className', (): void => {
    const { container } = render(<AwsuiTheme />);
    const elements: HTMLCollectionOf<Element> = container.getElementsByClassName(
      TEST_CLASS_NAME,
    );
    expect(Array.from(elements)).toHaveLength(1);
  });
});
