import { render } from '@testing-library/react';

import UiFields from './ui-fields';

describe('UiFields', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiFields />);
    expect(baseElement).toBeTruthy();
  });
});
