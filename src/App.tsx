import { Provider } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import { store } from "./store/configureStore";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <Navbar />
      </Provider>
    </>
  );
}

export default App;
