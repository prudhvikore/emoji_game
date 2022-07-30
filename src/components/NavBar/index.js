import './index.css'

const NavBar = props => {
  const {isGameRunning, score, topScore} = props
  return (
    <div className="navbar">
      <div className="nav-title">
        <div className="img-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="logo-image"
          />
          <h1 className="heading">Emoji Game</h1>
        </div>
        <div>
          {isGameRunning && (
            <div className="scores">
              <p className="score">{`Score: ${score}`}</p>
              <p className="score">{`Top Score: ${topScore}`}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NavBar
