import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Book from "../../entities/Book";
import BookCard from "./BookCard";

test("Renders book image", () => {
  const mockBook: Book = {
    title: "Test Book",
    author_name: ["Test Author"],
    cover_i: "123456",
    first_publish_year: "2021",
    id_amazon: ["123"],
  };

  render(<BookCard book={mockBook} />);

  const bookImage = screen.getByAltText(mockBook.title);
  expect(bookImage).toBeInTheDocument();
});

test("Renders book title", () => {
  const mockBook: Book = {
    title: "Test Book",
    author_name: ["Test Author"],
    cover_i: "123456",
    first_publish_year: "2021",
    id_amazon: ["123"],
  };

  render(<BookCard book={mockBook} />);

  const bookTitle = screen.getByText(mockBook.title);
  expect(bookTitle).toBeInTheDocument();
});

test("Renders book author name", () => {
  const mockBook: Book = {
    title: "Test Book",
    author_name: ["Test Author"],
    cover_i: "123456",
    first_publish_year: "2021",
    id_amazon: ["123"],
  };

  render(<BookCard book={mockBook} />);

  const bookAuthor = screen.getByText(`by ${mockBook.author_name.join(", ")}`);
  expect(bookAuthor).toBeInTheDocument();
});
