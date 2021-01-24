import { PropsWithChildren, ReactElement } from 'react';
import { AwsuiThemeRootSelector } from '..';

export default function TestAwsuiThemeRootSelectorProvider({
  children,
}: PropsWithChildren<unknown>): ReactElement {
  return (
    <AwsuiThemeRootSelector.Provider value=".test-awsui-theme-root">
      {children}
    </AwsuiThemeRootSelector.Provider>
  );
}
