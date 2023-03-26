import { describe, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import { NotFoundPage } from './pages/NotFound/NotFoundPage';
import { AboutPage } from './pages/About/AboutPage';
import { ProductsPage } from './pages/Home/HomePage';
import Navigation from './components/Navigation';

describe('NotFoundPage', () => {
  it('Renders not found page', () => {
    render(<NotFoundPage />);
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Oops! There is no such page!');
  });
});

describe('AboutPage', () => {
  it('Renders about page', () => {
    render(<AboutPage />);
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Lorem, ipsum dolor.');
  });
});

describe('ProductsPage', () => {
  it('Input placeholder text', () => {
    render(<ProductsPage />);
    const input = screen.getByPlaceholderText(/Search.../i);
    const findBtn = screen.getByRole('button');
    expect(input).toBeInTheDocument();
    expect(findBtn).toBeInTheDocument();
  });
});

describe('Button FIND', () => {
  it('click', () => {
    render(<ProductsPage />);
    const findBtn = screen.getByTestId('find');
    fireEvent.click(findBtn, {
      bubbles: true,
    });
  });
});

describe('ProductsPage', () => {
  it('Input change', () => {
    render(<ProductsPage />);
    const input = screen.getByPlaceholderText(/Search.../i) as HTMLInputElement | null;
    expect(input).toBeTruthy();
    expect(input?.textContent).toBe('');
    if (input) {
      input.textContent = 'qwerty';
      expect(input.textContent).toBe('qwerty');
      expect(input.type).toBe('text');
      fireEvent.change(input, {
        target: {
          value: 'qwerty',
        },
      });
      expect(input.value).toBe('qwerty');
    }
  });
});

describe('Button ABOUT', () => {
  it('click', async () => {
    render(<Navigation />, { wrapper: BrowserRouter });
    expect(screen.getByText('About us')).toBeInTheDocument();
    const user = userEvent.setup();
    const about = vi.spyOn(user, 'click');
    const aboutLink = screen.getByText(/About/i);

    await user.click(aboutLink);
    expect(about).toHaveBeenCalledTimes(1);
  });
});

describe('Button HOME', () => {
  it('click', async () => {
    render(<Navigation />, { wrapper: BrowserRouter });
    expect(screen.getByText('Home')).toBeInTheDocument();
    const user = userEvent.setup();
    const home = vi.spyOn(user, 'click');
    const homeLink = screen.getByText(/Home/i);

    await user.click(homeLink);
    expect(home).toHaveBeenCalledTimes(1);
  });
});

describe('Button FORMS', () => {
  it('click', async () => {
    render(<Navigation />, { wrapper: BrowserRouter });
    expect(screen.getByText('Forms')).toBeInTheDocument();
    const user = userEvent.setup();
    const forms = vi.spyOn(user, 'click');
    const formsLink = screen.getByText(/Forms/i);

    await user.click(formsLink);
    expect(forms).toHaveBeenCalledTimes(1);
  });
});
