import { describe, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import { NotFoundPage } from './pages/NotFound/NotFoundPage';
import { AboutPage } from './pages/About/AboutPage';
import { ProductsPage } from './pages/Home/HomePage';
import { Navigation } from './components/Navigation';
import { Search } from './components/Search/Search';
import { SubmitModal } from './pages/Forms/SubmitModal/SubmitModal';
import { HomeModal } from './pages/Home/HomeModal/HomeModal';
import { testItems } from './components/data/testData';
import { Product } from './components/Product';
import { FormItems } from './pages/Forms/Form-item/FormItems';

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

const search = vi.fn();
describe('Search tests', function () {
  test('should set search by pressing Enter key', () => {
    render(<Search />);

    const input = screen.getByTestId('search') as HTMLInputElement;
    fireEvent.keyDown(input, { key: 'Enter', code: 13, charCode: 13 });
  });
});

const formModalClose = vi.fn();
describe('Form modal', function () {
  test('Form modal render and close', async () => {
    render(<SubmitModal />);
    const button = screen.getByRole('formModalClose');
    expect(button).toBeInTheDocument();
    userEvent.click(button);
  });
});

const homeModalProductsOpen = vi.fn();
describe('Products tests', function () {
  test('Product render', () => {
    render(<Product product={testItems[0]} />);

    const button = screen.getByRole('openModal');
    expect(button).toBeInTheDocument();
    userEvent.click(button);
  });
});

const homeModalClose = vi.fn();
describe('Home modal', function () {
  test('Home modal render and button close', async () => {
    render(
      <HomeModal />
    );

    const button = screen.getByRole('homeModalClose');
    expect(button).toBeInTheDocument();
    userEvent.click(button);
  });
});

describe('Home modal', function () {
  test('Home modal render and background close', async () => {
    render(
      <HomeModal />
    );

    const button = screen.getByRole('backgroundClose');
    expect(button).toBeInTheDocument();
    userEvent.click(button);
  });
});

describe('Home modal', function () {
  test('Home modal contains name and alt_description', async () => {
    render(
      <HomeModal />
    );

    expect(screen.getByText(`${testItems[0].alt_description}`)).toBeInTheDocument();
    expect(screen.getByText(`${testItems[0].user.name}`)).toBeInTheDocument();
  });
});

const testCardsItems = [
  {
    date: '20-12-2022',
    category: 'jewelery',
    image: 'image1',
    title: 'title1',
    norobot: false,
    sale: 'YES',
    price: '100',
  },
  {
    date: '19-02-2023',
    category: 'jewelery',
    image: 'image2',
    title: 'title2',
    norobot: true,
    sale: 'NO',
    price: '1023',
  },
];

describe('CardsItems tests', function () {
  test('render CardsItems', () => {
    render(<FormItems />);

    const cards = screen.getAllByRole('form');
    expect(cards).toHaveLength(testCardsItems.length);
  });
});
