import { render, screen, fireEvent } from '@testing-library/react';
import { BookDetailsModal } from '../../src/components/BookDetailsModal';
import { describe, it, expect } from 'vitest';
import { vi } from "vitest"
import '@testing-library/jest-dom/vitest';
import React from 'react';

// Mock the context
const setBookModalOpen = vi.fn();
const mockContextValue = {
  bookModalOpen: true,
  setBookModalOpen,
  selectedBook: {
    volumeInfo: {
      title: 'Test Book',
      authors: ['John Doe'],
      imageLinks: {
        thumbnail: 'test-thumbnail.jpg',
      },
      description: 'Test description',
      publisher: 'Test Publisher',
      publishedDate: '2022-01-01',
    },
  },
};

vi.mock('../../src/contexts/BookContext', () => ({
  useBookContext: () => mockContextValue,
}));

describe('BookDetailsModal', () => {
  it('renders correctly with book data', () => {
    render(<BookDetailsModal />);

    expect(screen.getByText('Test Book')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByText('Test Publisher')).toBeInTheDocument();
    expect(screen.getByText('1st January, 2022')).toBeInTheDocument();
    expect(screen.getByAltText('book cover')).toHaveAttribute('src', 'test-thumbnail.jpg');
  });

  it('calls setBookModalOpen with false when the overlay is clicked', () => {
    render(<BookDetailsModal />);

    const overlay = screen.getByRole('button', { hidden: true });
    fireEvent.click(overlay);

    expect(setBookModalOpen).toHaveBeenCalledWith(false);
  });

  it('calls setBookModalOpen with false when the close button is clicked', () => {
    render(<BookDetailsModal />);

    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);

    expect(setBookModalOpen).toHaveBeenCalledWith(false);
  });
});