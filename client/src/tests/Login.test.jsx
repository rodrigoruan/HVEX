import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Login from '../pages/Login';

it('Renderiza a page Login corretamente', () => {
  const { history } = renderWithRouter(<Login />);

  const registerButton = screen.getByText(/REGISTRAR/u);
  const loginButton = screen.getByText(/LOGIN/u);

  expect(registerButton).toBeTruthy();
  expect(loginButton).toBeTruthy();

  expect(history.location.pathname).toBe('/')

  fireEvent.click(registerButton)

  expect(history.location.pathname).toBe('/register')
});
