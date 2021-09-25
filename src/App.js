import './App.css';
import CartoonList from './component/CartoonList/CartoonList';

function App() {
  // const cartoons = [
  //   { id: 1, name: "Maleficent", movie: "Sleeping Beauty", year: "1959", rank: 17, img:"https://i1.wp.com/screenagewasteland.com/wp-content/uploads/2020/04/Maleficent.png?resize=1024%2C576&ssl=1", sponsorCost: 500},
  //   { id: 2, name: "The Queen", movie: "Snow White and the Seven Dwarfs", year: "1937", rank: 15, img: "https://i2.wp.com/screenagewasteland.com/wp-content/uploads/2020/04/MV5BMDMwZTFiYzUtZTQzNS00ZTNlLTliNDItOTZlOGRiM2NhZjkzL2ltYWdlXkEyXkFqcGdeQXVyNDIzNDExOQ@@._V1_SY1000_CR0013331000_AL_1.jpg?w=1024&ssl=1", sponsorCost: 300 },
  //   { id: 3, name: "Tigger", movie: "Tigger", year: "1968", rank: 14, img: "https://i1.wp.com/screenagewasteland.com/wp-content/uploads/2020/04/Tigger.jpg?resize=1024%2C576&ssl=1", sponsorCost: 600 },
  //   { id: 4, name: "Jiminy Cricket", movie: "Pinocchio ", year: "1940", rank: 13, img: "https://i1.wp.com/screenagewasteland.com/wp-content/uploads/2020/04/Jiminy_Cricket.png?w=995&ssl=1", sponsorCost: 200 }
  // ]
  return (
    <div className="App">
      <CartoonList></CartoonList>                                        
    </div>
  );
}

export default App;
