import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import cx from 'classnames';

import {clearSearchText, stopLoadingPlanetList} from '../../actions'

import icon from './icon.svg';

import styles from './ClearButton.module.css';

interface Props {
  className?: string;
  tabIndex?: number;
  onClick?: () => void;
}

const ClearButton = ({className, tabIndex, onClick}: Props) => {
  const dispatch = useDispatch();
  const clickHandler = useCallback(() => {
    dispatch(clearSearchText())
    dispatch(stopLoadingPlanetList())
    onClick && onClick()
  }, [onClick])

  return (
    <button className={cx(className, styles.button)} onClick={clickHandler} tabIndex={tabIndex}>
      <img className={styles.icon} src={icon} alt="icon"/>
    </button>
  );
}

export default ClearButton;
