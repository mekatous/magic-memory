import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages = [
  {src: "helmet-1", matched: false},
  {src: "potion-1", matched: false},
  {src: "ring-1", matched: false},
  {src: "scroll-1", matched: false},
  {src: "shield-1", matched: false},
  {src: "sword-1", matched: false}
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
  
  //compare two selected cards
  useEffect(()=>{
    if(choiceOne && choiceTwo){
      if(choiceOne.src === choiceTwo.src){
        setCards(prevCards => {
          return prevCards.map(card => {
            if(card.src === choiceOne.src){
              return {...card, matched: true}
            }else{
              return card
            }
          })
        })
        resetTurns();
      }
      else{
        setTimeout(()=>resetTurns(),2000);
      }      
    }
  },[choiceOne,choiceTwo])

  //reset choices and increase turns
  const resetTurns = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
  }
  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  //console.table(cards);
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
            flipped = {card === choiceOne || card === choiceTwo || card.matched}
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
