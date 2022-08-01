import { useState } from 'react';
import './App.css';

const cardImages = [
  {src: "helmet-1"},
  {src: "potion-1"},
  {src: "ring-1"},
  {src: "scroll-1"},
  {src: "shield-1"},
  {src: "sword-1"}
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  //shuffle cards
  const shuffleCards = () =>{
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(()=> Math.random() - 0.5)
      .map((card)=> ({...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  }

  console.log(cards, turns);


  return (
    <div className="App">
      <h1>Magic Board</h1>
      <button onClick = {shuffleCards}>New Game</button>
    </div>
  );
}

export default App;
