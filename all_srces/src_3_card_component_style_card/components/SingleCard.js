import './SingleCard.css';

export default function SingleCard({ card }) {
  return (
    <div className="card">
            <div>
              <img src={`/img/${card.src}.png`} alt="card front" />
              <img src="/img/cover.png" alt="card back" />
            </div>
    </div>
  )
}
