import './App.css';
import CartoonList from './component/CartoonList/CartoonList';
import Header from './component/Header/Header';

function App() {
  return (
    <div className="App">
      {/* Header Component */}
      <Header></Header>
      {/* Cartoon Content */}
      <CartoonList></CartoonList>                                        
    </div>
  );
}

export default App;
