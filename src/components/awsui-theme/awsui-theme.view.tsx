import { ReactElement, memo, ReactNode } from 'react';
import Theme from '../../types/theme';
import * as useAwsuiThemeHook from './awsui-theme.hook';

const { default: useAwsuiTheme } = useAwsuiThemeHook;

interface Props extends Theme {
  children: ReactNode;
  [key: string]: ReactNode | string | undefined;
}

function AwsuiTheme({ children, ...theme }: Props): ReactElement {
  const { className, css } = useAwsuiTheme(theme);

  return (
    <>
      <style type="text/css">{css}</style>
      <div className={className}>{children}</div>
    </>
  );
}

export default memo(AwsuiTheme);
