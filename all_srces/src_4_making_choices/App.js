import { useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

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

  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  //shuffle cards
  const shuffleCards = () =>{
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(()=> Math.random() - 0.5)
      .map((card)=> ({...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }


  return (
    <div className="App">
      <h1>Magic Board</h1>
      <button onClick = {shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card)=>(
          <SingleCard
            key = {card.id}
            card = {card}
            handleChoice = { handleChoice }
          />
        ))}
      </div>
      <div className="turns">
        {turns}
      </div>
    </div>
  );
}

export default App;
