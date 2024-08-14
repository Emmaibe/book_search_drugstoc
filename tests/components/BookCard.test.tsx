import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import {BookCard} from "../../src/components/BookCard";
import '@testing-library/jest-dom/vitest';
import useFormatDate from '../../src/hooks/useFormatDate';

describe('BookCard Component', () => {
  const book = {
    volumeInfo: {
      title: 'BookStoc',
      authors: ['Emmanuel Ibenwankwo'],
      imageLinks: {
        thumbnail: 'https://via.placeholder.com/150',
      },
      publishedDate: '2024-08-13',
    },
  };

  it('Should render book title', () => {

    render(<BookCard book={book} />);

    const heading = screen.getByRole('heading');

    // Check if the book title is rendered
    expect(heading).toBeInTheDocument();

    // Check if the book title is correct
    expect(heading).toHaveTextContent('BookStoc');
  });

  it('Should render author', () => {

    render(<BookCard book={book} />);

    const author = screen.getByText('Emmanuel Ibenwankwo');

    // Check if the book author is rendered
    expect(author).toBeInTheDocument();
  });

  it('Should render the book image', () => {
    render(<BookCard book={book} />);

    // Use getByRole to find the image element
    const img = screen.getByRole('img', { name: /book cover/i });

    // Check if the image is rendered
    expect(img).toBeInTheDocument();

    // Check if the image has the correct src attribute
    expect(img).toHaveAttribute('src', 'https://via.placeholder.com/150');
  });

  it('Should render the publish date', () => {
    render(<BookCard book={book} />);

    const formattedDate = useFormatDate(book.volumeInfo.publishedDate);

    // Use getByText to find the publish date
    const publishDate = screen.getByText(`${formattedDate}`);

    // Check if the publish date is rendered
    expect(publishDate).toBeInTheDocument();
  });

});