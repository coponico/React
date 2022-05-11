import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './pages/ItemListContainer/ItemlistContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart/cart';
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
      </Routes>
    </div>

  );
}

export default App;


