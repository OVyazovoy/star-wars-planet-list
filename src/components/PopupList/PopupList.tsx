import React, { useEffect, useCallback } from 'react';
import {useSelector,useDispatch,  shallowEqual} from 'react-redux';
import cx from 'classnames';

import Loader from '../Loader';
import PopupItem from '../PopupItem';

import {getIsLoading, getPlanetList, getSearchText} from '../../selectors';
import {IPlanet} from '../../api/getPlanetList';

import styles from './PopupList.module.css';
import { setPlanetList } from '../../actions';

const PopupList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading, shallowEqual);
  const planetList = useSelector(getPlanetList, shallowEqual);
  const searchText = useSelector(getSearchText, shallowEqual);
  const onESCClick = useCallback((e: KeyboardEvent) => {
    if(e.which === 27) {
      dispatch(setPlanetList([]))
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', onESCClick, false);
    return () => window.removeEventListener('keydown', onESCClick);
  }, [])

  if (planetList.length === 0 && !isLoading) {
    return null
  }

  return (
    <div className={cx(styles.list, {[styles.loading]: isLoading})}>
      {isLoading
        ? (<Loader/>)
        : (
          <ul>
            {planetList.map(({name} : IPlanet) => <PopupItem key={name} searchText={searchText} planetName={name}/>)}
          </ul>
        )}
    </div>
  );
}

export default PopupList;
