import {UPDATE_SEARCH_TEXT, SET_PLANET_LIST, CLEAR_SEARCH_TEXT, START_LOAD_PLANET_LIST, STOP_LOAD_PLANET_LIST, SET_SEARCH_TEXT} from './constants';


export const updateSearchText = (searchText: string) => ({
  type: UPDATE_SEARCH_TEXT,
  payload: {
    searchText
  }
});

export const setSearchText = (searchText: string) => ({
  type: SET_SEARCH_TEXT,
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

export const startLoadingPlanetList = () => ({
  type: START_LOAD_PLANET_LIST,
})

export const stopLoadingPlanetList = () => ({
  type: STOP_LOAD_PLANET_LIST,
})