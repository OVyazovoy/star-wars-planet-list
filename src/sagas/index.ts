import { put, takeLatest, all, fork, take, cancel, select, takeEvery} from 'redux-saga/effects';

import { UPDATE_SEARCH_TEXT, STOP_LOAD_PLANET_LIST } from '../actions/constants';
import getPlanetList from '../api/getPlanetList';
import { setPlanetList, startLoadingPlanetList } from '../actions';
import { getSearchText } from '../selectors';


function* fetchPlanets() {
  //get last search text
  const searchText = yield select(getSearchText);
  //start list
  yield put(startLoadingPlanetList())
  //load list
  const json = yield getPlanetList(searchText)
  //set list to store
  yield put(setPlanetList(json.data.results))
}

/**
 * helper function to stop task
 */
//todo fix type
function* cancelWorkerSaga(task : any) {
  yield cancel(task);
}

function* main() {
  //listen update search text
  const fetchPlanetsTask = yield takeLatest(UPDATE_SEARCH_TEXT, fetchPlanets)
  //stop if don't want load
  yield takeEvery([STOP_LOAD_PLANET_LIST], cancelWorkerSaga, fetchPlanetsTask)
}

export default function* rootSaga() {
  yield all([main()]);
}