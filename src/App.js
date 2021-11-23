import "./styles/App.scss";
import ProductDetails from './components/ProductDetails'
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <div className="App">
      <ProductDetails/>
      <ScrollToTop/>
    </div>
  );
}

export default App;
