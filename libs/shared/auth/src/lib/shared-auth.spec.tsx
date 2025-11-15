import { render } from '@testing-library/react';

import SharedAuth from './shared-auth';

describe('SharedAuth', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedAuth />);
    expect(baseElement).toBeTruthy();
  });
});
