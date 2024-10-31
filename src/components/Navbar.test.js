import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar Component', () => {
  beforeEach(() => {
    localStorage.clear(); // Clear localStorage before each test
  });

  it('renders Login button when email is not in localStorage', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    
    const loginButton = screen.getByRole('link', { name: /Login/i });
    expect(loginButton).toBeInTheDocument();
  });

  it('renders Logout button when email is in localStorage', () => {
    // Set an email in localStorage to simulate a logged-in user
    localStorage.setItem('email', 'user@example.com');

    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const logoutButton = screen.getByRole('link', { name: /Logout/i });
    expect(logoutButton).toBeInTheDocument();
  });
});
