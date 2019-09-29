import React from 'react';
import {shallowEqual, useSelector, useDispatch} from 'react-redux';

import SearchInput from './SearchInput';
import ClearButton from './ClearButton';
import Loader from './Loader';
import {getList} from '../selectors';

import './App.css';

let App = () => {
  const list = useSelector(getList);

  return (
    <div className="app">
      <SearchInput/>
      <ul>
        {list && list.map(({name}) => (<li>{name}</li>))}
      </ul>
    </div>
  )
};

export default App;