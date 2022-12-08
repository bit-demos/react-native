import React from 'react';
import { render } from '@testing-library/react';
import { BasicFileContent } from './file-content.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicFileContent />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
