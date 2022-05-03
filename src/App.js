import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemlistContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
// import { ItemCount } from './components/ItemCount/ItemCount';

function App() {
  // const returnCount = (count) => {
  //   alert (count)
  // }
  return (
    <div className="App">
<NavBar />
    {/* <ItemCount stock={6} initial={1} onAdd={returnCount}/>   */}
<ItemListContainer greeting = 'Bienvenidos a mi tienda'/>
<ItemDetailContainer/>
    </div>

  );
}

export default App;


