import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Register from '../pages/Register';

it('Renderiza a page Register corretamente', () => {
  const { history } = renderWithRouter(<Register />);

  history.push('/register');

  const emailInput = screen.getByPlaceholderText(/Email/iu);
  const passwordInput = screen.getByPlaceholderText(/Senha/iu);
  const HVEXLOGO = screen.getByAltText(/HVEX LOGO/iu);

  expect(emailInput).toBeTruthy();
  expect(passwordInput).toBeTruthy();

  fireEvent.click(HVEXLOGO);

  expect(history.location.pathname).toBe('/');
});
