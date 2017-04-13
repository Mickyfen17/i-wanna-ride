const rides = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER_RIDES' :
      return [...action.rides];

    default:
      return state;
  }
};

export default rides;