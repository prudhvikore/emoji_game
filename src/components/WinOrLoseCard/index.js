import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, resetGame} = props

  const image = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const word = isWon ? 'Best Score' : 'Score'
  const result = isWon ? 'You Won' : 'You Lose'

  const resetWholeGame = () => {
    resetGame()
  }

  return (
    <div className="result-container">
      <div className="cont-1">
        <h1 className="result">{result}</h1>
        <div className="result-cont">
          <p className="word">{word}</p>
          <p className="score-res">{`${score}/12`}</p>
          <button className="btn" type="button" onClick={resetWholeGame}>
            Play Again
          </button>
        </div>
      </div>
      <img src={image} alt="win or lose" className="res-img" />
    </div>
  )
}

export default WinOrLoseCard
