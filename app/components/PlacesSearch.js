import React from 'react';
import Geosuggest from 'react-geosuggest';

const PlacesSearch = ({ handleChange }) => {
  return (
    <Geosuggest
      placeholder="Location"
      onSuggestSelect={suggest => handleChange(suggest)}
      onClick={e => (e.target.placeholder = 'Enter Location')}
    />
  );
};

export default PlacesSearch;
