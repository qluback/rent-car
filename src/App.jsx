import CartContextProvider from "./store/CartContext";
import Header from "./components/Header";
import Main from "./pages/Main";

function App() {
  return (
    <CartContextProvider>
      {/* <Header /> */}
      <Main />
    </CartContextProvider>
  );
}

export default App;
