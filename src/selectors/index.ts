import {IState} from '../reducers'
import { IPlanet } from '../api/getPlanetList';

export const getSearchText = (state: IState) => state.searchText
export const getList = (state: IState): IPlanet[] => state.list
export const getIsLoading = (state: IState) => state.isLoading