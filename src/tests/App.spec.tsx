import React from "react";
import { render } from "@testing-library/react";

import App from '../components/App';

describe('<App />', () => {
  test('should display Hello World', async () => {
    const { findByTestId } = render(<App />);
    const heading = await findByTestId('hello');

    expect(heading).toHaveClass('hello');
  })
})
