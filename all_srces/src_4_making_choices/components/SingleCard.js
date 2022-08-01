import './SingleCard.css';

export default function SingleCard({ card, handleChoice }) {

    const handleClick = () => {
        handleChoice(card);
    }

  return (
    <div className="card">
            <div>
              <img src={`/img/${card.src}.png`} alt="card front" />
              <img 
                src="/img/cover.png"
                alt="card back"
                onClick = {handleClick}
             />
            </div>
    </div>
  )
}
