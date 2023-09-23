// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsListItems, updateSuggestion} = props
  const {suggestion} = suggestionsListItems

  const onChangeInputSuggestion = () => {
    updateSuggestion(suggestion)
  }

  return (
    <li className="suggestion-item-container">
      <p>{suggestion}</p>
      <button
        type="button"
        className="arrow-button"
        onClick={onChangeInputSuggestion}
      >
        <img
          alt="arrow-icon"
          className="arrow-icon"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
