/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'

import EmojiCard from '../EmojiCard'

import NavBar from '../NavBar'

import './index.css'

import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    topScore: 0,
    clickedEmojisList: [],
    isGameRunning: true,
  }

  resetGame = () => {
    this.setState({clickedEmojisList: [], isGameRunning: true})
  }

  renderResultCard = () => {
    console.log('game ended')
    const {clickedEmojisList} = this.state
    const {emojisList} = this.props
    const isWon = clickedEmojisList.length === emojisList.length
    return (
      <WinOrLoseCard
        isWon={isWon}
        score={clickedEmojisList.length}
        resetGame={this.resetGame}
      />
    )
  }

  gameEnded = score => {
    const {topScore} = this.state
    let newScore = topScore
    if (score > topScore) {
      newScore = score
    }
    this.setState({topScore: newScore, isGameRunning: false})
  }

  onClickEmoji = id => {
    const {clickedEmojisList} = this.state
    const {emojisList} = this.props

    if (clickedEmojisList.includes(id)) {
      this.gameEnded(clickedEmojisList.length)
    } else {
      if (emojisList.length - 1 === clickedEmojisList.length) {
        this.gameEnded(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisCard = () => {
    const shuffledEmojisList = this.shuffledEmojisList()
    return (
      <ul className="emojisList">
        {shuffledEmojisList.map(each => (
          <EmojiCard
            emojis={each}
            key={each.id}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {topScore, clickedEmojisList, isGameRunning} = this.state
    return (
      <div className="bg-container">
        <NavBar
          isGameRunning={isGameRunning}
          score={clickedEmojisList.length}
          topScore={topScore}
        />
        <div className="emojis-card">
          {isGameRunning ? this.renderEmojisCard() : this.renderResultCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
