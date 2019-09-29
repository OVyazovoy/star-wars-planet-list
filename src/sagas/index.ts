import { put, takeLatest, all} from 'redux-saga/effects';

import { UPDATE_SEARCH_TEXT } from '../actions/constants';
import getPlanetList from '../api/getPlanetList';
import { setPlanetList } from '../actions';


function* fetchPlanets(args : any) {
  const json = yield getPlanetList(args.payload.searchText)

  yield put(setPlanetList(json.data.results))
}

function* actionWatcher() {
  yield takeLatest(UPDATE_SEARCH_TEXT, fetchPlanets)
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}