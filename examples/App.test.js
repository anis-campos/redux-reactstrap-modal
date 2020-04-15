import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import App from './App';

test('Can render button, open and close modal', async () => {

  // Button is present
  const { getByText } = render(<App />);
  const button = getByText(/Open Dialog/i);
  expect(button).toBeInTheDocument();

  // Modal opens
  fireEvent.click(button);
  await waitFor(() => {
    expect(screen.getByText("Modal title")).toBeInTheDocument();
  });


  // Modal closes
  const cancelModal = screen.getByText(/Cancel/i);
  expect(cancelModal).toBeInTheDocument();
  fireEvent.click(cancelModal);
  await waitFor(() => {
    expect(screen.queryByText("Modal title")).toBeNull();
  });

});


