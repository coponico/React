import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart/cart';
import Checkout from './components/Checkout/Checkout';
import Success from './components/Success/Success';
// import { ItemCount } from './components/ItemCount/ItemCount';

function App() {
  // const returnCount = (count) => {
  //   alert (count)
  // }
  return (
    <div className="App">
<NavBar />
<Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/success' element={<Success/>}/>
      </Routes>
    </div>

  );
}

export default App;


