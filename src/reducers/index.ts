import {IPlanet} from '../api/getPlanetList';
import {UPDATE_SEARCH_TEXT, SET_PLANET_LIST, CLEAR_SEARCH_TEXT} from '../actions/constants'

export interface IState {
  searchText : string,
  isLoading : boolean,
  isLoadedOnce : boolean,
  list : IPlanet[]
}

const initialState : IState = {
  searchText: '',
  isLoading: false,
  isLoadedOnce: false,
  list: []
}

const reducer = (state = initialState, action : {
  type: string,
  payload: any
}) => {
  switch (action.type) {
    case UPDATE_SEARCH_TEXT:
      {
        return {
          ...state,
          isLoading: true,
          searchText: action.payload.searchText
        };
      }
    case CLEAR_SEARCH_TEXT:
      {
        return {
          ...state,
          searchText: '',
          list: []
        };
      }
    case SET_PLANET_LIST:
      {
        return {
          ...state,
          isLoading: false,
          list: action.payload.list
        }
      }
    default:
      return state;
  }
};

export default reducer;