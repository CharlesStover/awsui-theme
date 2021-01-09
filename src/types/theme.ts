import * as tokens from '@awsui/components-react/internal/generated/styles/tokens';

type Keys = keyof typeof tokens;

type Theme = {
  [key in Keys]?: string;
};

export default Theme;
