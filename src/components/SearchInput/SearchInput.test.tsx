import { render, fireEvent, screen } from "@testing-library/react";
import { store } from "../../store/configureStore";
import SearchInput from "./SearchInput";
import { Provider } from "react-redux";

test("Set the input value correctly", () => {
  render(
    <Provider store={store}>
      <SearchInput />
    </Provider>
  );
  const input = screen.getByTestId("search-input") as HTMLInputElement;

  fireEvent.change(input, { target: { value: "The Lord of the Rings" } });

  expect(input.value).toBe("The Lord of the Rings");
});
