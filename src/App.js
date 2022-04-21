import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemlistContainer';

function App() {
  return (
    <div className="App">
<NavBar />
<ItemListContainer greeting='{Mis productos}' />
    
    </div>

  );
}

export default App;


