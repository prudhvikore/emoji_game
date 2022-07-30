import './index.css'

const EmojiCard = props => {
  const {emojis, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojis

  const onEmoji = () => {
    onClickEmoji(id)
  }
  return (
    <li className="list-item">
      <button type="button" className="emoji-button" onClick={onEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
