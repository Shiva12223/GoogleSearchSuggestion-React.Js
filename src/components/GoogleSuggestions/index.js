// Write your code here

import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  updateSuggestion = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="card-container">
          <div>
            <img
              className="google-logo-img"
              src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
              alt="google logo"
            />
          </div>

          <ul className="inputSearch-card-container">
            <div className="input-container">
              <img
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                placeholder="Search Google"
                onChange={this.onChangeInput}
                className="user-input"
                type="search"
                value={searchInput}
              />
            </div>

            {searchResults.map(eachItem => (
              <SuggestionItem
                updateSuggestion={this.updateSuggestion}
                suggestionsListItems={eachItem}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
