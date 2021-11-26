import './App.scss';
import Product from './components/Product/Product';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';

function App( props ) {
  return (
    <section className="section-container">
      <Product name="New Mac" price={props.price}/>
      <Checkout price={props.price}/>
      <Footer></Footer>
    </section>
  );
}

export default App;
