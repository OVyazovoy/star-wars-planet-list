import React, {useCallback, useRef} from 'react';
import {shallowEqual, useSelector, useDispatch} from 'react-redux';

import { getSearchText } from '../../selectors';
import {updateSearchText, stopLoadingPlanetList} from '../../actions';

import ClearButton from '../ClearButton';

import styles from './SearchInput.module.css'
interface Props {
  children: JSX.Element
}

const SearchInput = ({children}: Props) => {
  const inputEl = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const searchText = useSelector(getSearchText, shallowEqual)

  const onClearBtnClick = useCallback(() => {
    inputEl.current &&
    inputEl.current.focus()
  }, [])

  const onChange = useCallback(
    ({ target: { value } } : React.ChangeEvent < HTMLInputElement >) => {
      dispatch(updateSearchText(value))
      //if empty stop load
      if(value === ''){
        dispatch(stopLoadingPlanetList())
      }
    },
  [],)

  return (
    <div className={styles.textField}>
      <input ref={inputEl} className={styles.input} type="text" onChange={onChange} value={searchText} tabIndex={1}/>
      {
        searchText &&
        <ClearButton className={styles.clearButton} onClick={onClearBtnClick}/>
      }
      {children}
    </div>
  );
}

export default SearchInput;