import {UPDATE_SEARCH_TEXT} from './constants';


export const updateSearchText = (searchText: string) => ({
  type: UPDATE_SEARCH_TEXT,
  payload: {
    searchText
  }
})