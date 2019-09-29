import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';

import {clearSearchText} from '../../actions'

const ClearButton = () => {
  const dispatch = useDispatch();
  const onClick = useCallback(
    () => dispatch(clearSearchText()),
    [],
  )

  return (
   <button onClick={onClick}>clear</button>
  );
}

export default ClearButton;
