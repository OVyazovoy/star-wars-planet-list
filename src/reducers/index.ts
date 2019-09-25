import {UPDATE_SEARCH_TEXT} from '../constants/actions'

export interface IState {
  searchText: string,
  isLoading: boolean,
  isLoadedOnce: boolean,
  list: [],
}

const initialState: IState = {
  searchText: '',
  isLoading: false,
  isLoadedOnce: false,
  list: []
}

const reducer = (state = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
     case UPDATE_SEARCH_TEXT:
        return {
          ...state,
          isLoading: true,
          searchText: action.payload.searchText
        };
     default:
        return state;
  }
};

export default reducer;