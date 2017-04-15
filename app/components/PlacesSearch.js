import React from 'react';
import Geosuggest from 'react-geosuggest';

const PlacesSearch = () => {

  return (
    <Geosuggest
      placeholder='Location'
      onSuggestSelect={ suggest => console.log(suggest) }
     />
  );
};

export default PlacesSearch;