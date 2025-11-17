import { render } from '@testing-library/react';

import UiFields from './ui-kit';

describe('UiFields', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiFields />);
    expect(baseElement).toBeTruthy();
  });
});
