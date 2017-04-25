import ridesReducer from '../../reducers/ridesReducer';
import rootReducer from '../../reducers/index';

const initialState = [];

const rides = [
  {
    id: 11,
    user_id: 1,
    firstname: 'Mike',
    email: 'abc@abc.com',
    location: 'Denver',
    latitude: '39.7392358',
    longitude: '-104.990251',
    experience: 'Beginner',
    ridedate: '2017-01-01',
    ridetime: 'Morning',
  },
];

describe('rides reducer', () => {

  it('should return initial state by default', () => {
    expect(ridesReducer(undefined, {})).toEqual(initialState)
  });

  it('should return a ride object when action is USER_SIGNED_IN', () => {
    expect(ridesReducer(undefined, {
      type: 'FETCH_USER_RIDES',
      rides,
    })).toEqual(rides);
  });

  it('should return to the initialState when action is USER_SIGNED_OUT', () => {
    const userState = rootReducer(undefined, {
      type: 'USER_SIGNED_OUT',
    });
    expect(userState.rides).toEqual(initialState);
  });
});