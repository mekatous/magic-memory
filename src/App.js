import { useEffect, useState } from "react";
import './App.css'
import Card from "./components/Card";

const cardImages = [
  {src: 'img/helmet-1.png'},
  {src: 'img/potion-1.png'},
  {src: 'img/ring-1.png'},
  {src: 'img/scroll-1.png'},
  {src: 'img/shield-1.png'},
  {src: 'img/sword-1.png'},
  {src: 'img/nwaf-1.png'},
  {src: 'img/nwaf-2.png'}
];

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0);
  const [choice1,setChoice1] = useState(null);
  const [choice2,setChoice2] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const handleChoice = (card) =>{
    choice1 ? setChoice2(card) : setChoice1(card);
  }

  const shuffleCards = ()=>{
    const shuffledCards = [...cardImages,...cardImages]
      .sort(()=>Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random(), matched: false}))

      setCards(shuffledCards);
      setChoice1(null);
      setChoice2(null);
      setTurns(0);
      setDisabled(false);
  }

  useEffect(()=>{
    if(choice1 && choice2){
      setDisabled(true);
      if(choice1.src === choice2.src) {
        setCards(prevCards=>{
          return prevCards.map((card)=>{
            if(card.src === choice1.src) return {...card, matched: true};
            else return card;
          })
        })
        resetTurns();
      }else{
        setTimeout(()=>resetTurns(),1000);
      }
    }
  },[choice1,choice2])

  const resetTurns = ()=>{
    setChoice1(null);
    setChoice2(null);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
  }
  useEffect(()=>{
    shuffleCards();
  },[])
  
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <div className="turns">
        <p>Turns : {turns}</p>
      </div>
      <button onClick = {shuffleCards}>Start Game</button>
      {/* render card grids */}
      <div className="card-grid">
        {
          cards.map((card)=>(
            <Card
              card = {card}
              key={card.id}
              handleChoice={handleChoice}
              flipped = {card === choice1 || card === choice2 || card.matched}
              disabled = {disabled}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
