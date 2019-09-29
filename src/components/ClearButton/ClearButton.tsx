import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';

import {clearSearchText, stopLoadingPlanetList} from '../../actions'

const ClearButton = () => {
  const dispatch = useDispatch();
  const onClick = useCallback(
    () => {
      dispatch(clearSearchText())
      dispatch(stopLoadingPlanetList())
    },
    [],
  )

  return (
   <button onClick={onClick}>clear</button>
  );
}

export default ClearButton;
