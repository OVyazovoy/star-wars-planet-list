import React from 'react';
import {shallowEqual, useSelector, useDispatch} from 'react-redux';

import SearchInput from './SearchInput';
import ClearButton from './ClearButton';
import {getList} from '../selectors';

let App = () => {
  const list = useSelector(getList);

  return (
    <div>
      <SearchInput/>
      <ClearButton/>
      <ul>
        {list && list.map(({name}) => (<li>{name}</li>))}
      </ul>
    </div>
  )
};

export default App;