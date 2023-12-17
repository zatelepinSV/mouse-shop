import { CartContextProvider } from "./store/shopping-cart-context";
import { Header } from "./components/Header";
import { Shop } from "./components/Shop";

const App = () => (
    <CartContextProvider>
      <Header />
      <Shop />
    </CartContextProvider>
);

export default App;