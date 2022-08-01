import './SingleCard.css';

export default function SingleCard({ card, handleChoice, flipped }) {

    const handleClick = () => {
        handleChoice(card);
    }

  return (
    <div className="card">
            <div className={flipped ? "flipped" : ""}>
              <img className='front' src={`/img/${card.src}.png`} alt="card front" />
              <img
                className='back'
                src="/img/cover.png"
                alt="card back"
                onClick = {handleClick}
             />
            </div>
    </div>
  )
}
