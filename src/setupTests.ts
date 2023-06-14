// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom';
import Vi from 'vitest';
// Polyfill "window.fetch"
import 'whatwg-fetch';

import { SWAP_TOKENS } from 'constants/tokens';
import useTokenApproval from 'hooks/useTokenApproval';

vi.mock('utilities/isFeatureEnabled');
vi.mock('hooks/useTokenApproval');

// Mock Lottie
vi.mock('@lottiefiles/react-lottie-player', () => ({
  Player: () => null,
}));

// Mock React Markdown library
vi.mock('@uiw/react-md-editor', () => ({
  default: null,
  commands: {
    title1: '',
    title2: '',
    title3: '',
    title4: '',
    unorderedListCommand: '',
    link: '',
    bold: '',
    italic: '',
  },
}));
vi.mock('@uiw/react-markdown-preview', () => ({
  default: null,
}));

const useTokenApprovalOriginalOutput = useTokenApproval(
  // These aren't used since useTokenApproval is mocked
  {
    token: SWAP_TOKENS.cake,
    spenderAddress: '',
    accountAddress: '',
  },
);

beforeEach(() => {
  vi.clearAllMocks();
});

afterEach(() => {
  (useTokenApproval as Vi.Mock).mockImplementation(() => useTokenApprovalOriginalOutput);
});
