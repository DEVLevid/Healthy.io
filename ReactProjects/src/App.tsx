import "./App.css";
import Form from "./components/form/form.tsx";
import ProductDetails from "./components/productDetails/productDetails.tsx";

function App() {
  return (
    <div className="container">
      <Form />
      <ProductDetails />
    </div>
  );
}

export default App;
