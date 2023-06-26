import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { store } from "../../store/configureStore";
import Navbar from "./Navbar";

test("Show list of books", async () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Navbar />
    </Provider>
  );

  const searchInput = getByTestId("search-input");
  fireEvent.change(searchInput, { target: { value: "Lord of the rings" } });

  await waitFor(() => {
    const booksList = getByTestId("books-list");
    expect(booksList).toBeInTheDocument();
  });
});
