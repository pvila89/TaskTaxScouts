import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";
import BooksList from "./BookList";

import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();

test("Show spinner while books loading", () => {
  const store = mockStore({
    books: {
      books: [],
      status: "loading",
    },
    search: {
      query: "the lord of the rings",
    },
  });

  render(
    <Provider store={store}>
      <BooksList />
    </Provider>
  );

  const spinner = screen.getByTestId("spinner");
  expect(spinner).toBeInTheDocument();
});

test("Show books if there are books to show", () => {
  const store = mockStore({
    books: {
      books: [
        {
          title: "Mr Potato",
          author_name: ["Autor 1"],
          cover_i: "123456",
          first_publish_year: "2021",
          id_amazon: ["23452345"],
        },
        {
          title: "Lord of the rings",
          author_name: ["Autor 2"],
          cover_i: "7890112",
          first_publish_year: "2022",
          id_amazon: ["234546345"],
        },
      ],
      status: "idle",
    },
    search: {
      query: "the lord of the rings",
    },
  });

  render(
    <Provider store={store}>
      <BooksList />
    </Provider>
  );

  const booksList = screen.getByTestId("books-list");
  expect(booksList).toBeInTheDocument();

  const bookCards = screen.getAllByTestId("book-card");
  expect(bookCards.length).toBe(2);
});

test("Show message when fetching books fail", () => {
  const store = mockStore({
    books: {
      books: [],
      status: "failed",
    },
    search: {
      query: "the lord of the rings",
    },
  });
  render(
    <Provider store={store}>
      <BooksList />
    </Provider>
  );

  const errorMessage = screen.getByText(
    "This feature is not available right now"
  );
  expect(errorMessage).toBeInTheDocument();
});
