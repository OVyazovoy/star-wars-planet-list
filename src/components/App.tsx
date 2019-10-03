import React from 'react';
import {shallowEqual, useSelector, useDispatch} from 'react-redux';

import SearchInput from './SearchInput';
import PopupList from './PopupList';
import {getPlanetList} from '../selectors';

import './App.css';

let App = () => {

  return (
    <div className="app">
      <SearchInput>
        <PopupList/>
      </SearchInput>
    </div>
  )
};

export default App;