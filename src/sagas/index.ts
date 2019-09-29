import { put, takeLatest, all, fork, take, cancel, select, delay, takeEvery, cancelled} from 'redux-saga/effects';

import { UPDATE_SEARCH_TEXT, STOP_LOAD_PLANET_LIST, START_LOAD_PLANET_LIST } from '../actions/constants';
import getPlanetList from '../api/getPlanetList';
import { setPlanetList, startLoadingPlanetList, updateSearchText } from '../actions';
import { getSearchText } from '../selectors';


function* fetchPlanets() {
  //get last search text
  const searchText = yield select(getSearchText);
  if(searchText !== ''){
    //load list
    yield put(startLoadingPlanetList())
    const json = yield getPlanetList(searchText)
    //set list to store
    yield put(setPlanetList(json.data.results))
  }
}

function* startLoading(){
  while (true) {
    const fetchPlanetsTask = yield fork(fetchPlanets)
    // wait for the user stop action
    yield take(STOP_LOAD_PLANET_LIST)
    yield cancel(fetchPlanetsTask);
  }
}

function* main() {
  yield takeLatest(UPDATE_SEARCH_TEXT, startLoading)
}

export default function* rootSaga() {
  yield all([main()]);
}