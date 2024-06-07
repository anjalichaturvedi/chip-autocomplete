import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Chip.css';

const suggestionsData = [
  'React', 'Hands On', 'Live Coding', 'Angular', 'Vue JS', 'JS Fundamentals',
  'Typescript', 'Browser/DOM', 'API', 'Router', 'Forms', 'Jest', 'Vue',
  'Templates', 'Directives', 'Routing', 'State management', 'Asynchronous programming',
  'React Js', 'Hooks', 'JSX', 'CSS', 'Flex', 'DOM'
];

const Chip = ({ label, onRemove }) => (
  <div className="chip">
    {label}
    <button onClick={() => onRemove(label)}>x</button>
  </div>
);

const ChipAutoComplete = ({ 
  suggestions = suggestionsData, 
  noResultsMessage = 'No results found', 
  loadingMessage = 'Loading...', 
  placeholder = 'Enter a tag',
  showLoading = false 
}) => {
  const [inputValue, setInputValue] = useState('');
  const [chips, setChips] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState(suggestions);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const [loading, setLoading] = useState(showLoading);

  useEffect(() => {
    if (showLoading) {
      setLoading(true);
      setTimeout(() => setLoading(false), 1000); // Simulate loading delay
    }
  }, [showLoading]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setActiveSuggestionIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (activeSuggestionIndex >= 0 && activeSuggestionIndex < filteredSuggestions.length) {
        handleSuggestionClick(filteredSuggestions[activeSuggestionIndex]);
      } else if (inputValue && !chips.includes(inputValue)) {
        setChips([...chips, inputValue]);
        setFilteredSuggestions(filteredSuggestions.filter(s => s !== inputValue));
        setInputValue('');
      }
    } else if (e.key === 'ArrowDown') {
      if (activeSuggestionIndex < filteredSuggestions.length - 1) {
        setActiveSuggestionIndex(activeSuggestionIndex + 1);
      }
    } else if (e.key === 'ArrowUp') {
      if (activeSuggestionIndex > 0) {
        setActiveSuggestionIndex(activeSuggestionIndex - 1);
      }
    }
  };

  const handleSuggestionClick = (suggestion) => {
    if (!chips.includes(suggestion)) {
      setChips([...chips, suggestion]);
      setFilteredSuggestions(filteredSuggestions.filter(s => s !== suggestion));
      setInputValue('');
      setActiveSuggestionIndex(-1);
    }
  };

  const handleRemoveChip = (chip) => {
    setChips(chips.filter(c => c !== chip));
    setFilteredSuggestions([...filteredSuggestions, chip]);
  };

  const handleClearAllChips = () => {
    setChips([]);
    setFilteredSuggestions(suggestions);
  };

  const suggestionsToShow = filteredSuggestions.filter(s => 
    s.toLowerCase().includes(inputValue.toLowerCase())
  );

  const highlightMatch = (text) => {
    const regex = new RegExp(`(${inputValue})`, 'gi');
    return text.replace(regex, (match) => `<span class="highlight">${match}</span>`);
  };

  return (
    <div className="chip-input">
      <label className="input-label">Input Tags</label>
      <div className="input-container">
        {chips.map(chip => (
          <Chip key={chip} label={chip} onRemove={handleRemoveChip} />
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="input-field"
        />
        {chips.length > 0 && (
          <button className="clear-all" onClick={handleClearAllChips}>
            Clear All
          </button>
        )}
      </div>
      {loading ? (
        <div className="loading">{loadingMessage}</div>
      ) : (
        <div className="suggestions">
          {inputValue && suggestionsToShow.length > 0 ? (
            suggestionsToShow.map((suggestion, index) => (
              <div
                key={suggestion}
                className={`suggestion ${index === activeSuggestionIndex ? 'active' : ''}`}
                onClick={() => handleSuggestionClick(suggestion)}
                dangerouslySetInnerHTML={{ __html: highlightMatch(suggestion) }}
              />
            ))
          ) : (
            inputValue && <div className="no-results">{noResultsMessage}</div>
          )}
        </div>
      )}
    </div>
  );
};

ChipAutoComplete.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.string),
  noResultsMessage: PropTypes.string,
  loadingMessage: PropTypes.string,
  placeholder: PropTypes.string,
  showLoading: PropTypes.bool,
};

export default ChipAutoComplete;
