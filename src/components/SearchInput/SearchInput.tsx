import React, {useCallback} from 'react';
import {shallowEqual, useSelector, useDispatch} from 'react-redux';

import {getSearchText, getIsLoading} from '../../selectors';
import {updateSearchText} from '../../actions';

const SearchInput = () => {
  const dispatch = useDispatch();
  const searchText = useSelector(getSearchText, shallowEqual)
  const isLoading = useSelector(getIsLoading, shallowEqual)

  const onChange = useCallback((e : React.ChangeEvent < HTMLInputElement >) => dispatch(updateSearchText(e.target.value)), [],)

  return (
    <>
      <input type="text" onChange={onChange} value={searchText}/>
      {isLoading && 'loading'}
    </>
  );
}

export default SearchInput;