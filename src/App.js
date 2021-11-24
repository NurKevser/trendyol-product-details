import "./styles/App.scss";
import ProductDetails from './components/ProductDetails'
import ScrollToTop from "./components/ScrollToTop";
import SimilarProduct from "./components/SimilarProduct";



function App() {

  return (
    <div className="App">
      <ProductDetails/>
      <ScrollToTop/>
      <h1>Benzer Ürünler</h1>
      <SimilarProduct/>
      <h1>Bu Ürünü Alanlar Bunları da Aldı</h1>
      <SimilarProduct/>
    </div>
        
  );
}

export default App;
