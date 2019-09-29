import {UPDATE_SEARCH_TEXT, SET_PLANET_LIST, CLEAR_SEARCH_TEXT} from './constants';


export const updateSearchText = (searchText: string) => ({
  type: UPDATE_SEARCH_TEXT,
  payload: {
    searchText
  }
});

export const setPlanetList = (list: any) => ({
  type: SET_PLANET_LIST,
  payload: {
    list
  }
})

export const clearSearchText = () => ({
  type: CLEAR_SEARCH_TEXT,
})